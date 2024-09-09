"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { RadioInput } from "@/components/__shared/ui/form/radio-input";
import { Input } from "@/components/__shared/ui/form/input";
import { SelectInput } from "@/components/__shared/ui/form/select";
import { Textarea } from "@/components/__shared/ui/form/textarea";
import PhoneNumberInput from "@/components/__shared/ui/form/phone-number-input";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { Button } from "@/components/__shared/ui/button";
import { useFetchItemCategories } from "@/app/moving-sale/services";
import capitalizeName from "@/lib/utils/stringManipulation";
import Loader from "@/components/__shared/ui/loader";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { Checkbox } from "@/components/__shared/ui/form/checkbox";
import axios from "axios";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import { toast } from "react-hot-toast";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { Product } from "@/lib/typings";
import dynamic from "next/dynamic";
const FileUploader = dynamic(
  () => import("@/app/dashboard/components/shared/sell-products/FileUploader"),
);

interface CategoryProp {
  label: string;
  key: string;
}

interface FormValues {
  itemName: string;
  description: string;
  price: string;
  phone: string;
  whatsApp: string;
  email: string;
  images: File[];
  primaryImage: string;
  category: string;
  condition: string;
  term: string;
}
const UpdateItemPage = () => {
  const [sameAsPhone, setSameAsPhone] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [useEmail, setUseEmail] = useState(true);
  const [usePhone, setUsePhone] = useState(false);
  const [useWhatsapp, setUseWhatsapp] = useState(false);
  const id = useCurrentUserId();
  const supabaseClient = createClient();
  const validationSchema = Yup.object().shape({
    category: Yup.string().required("This field is requiredRequired"),
    condition: Yup.string().required("This field is required"),
    itemName: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    price: Yup.number().required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    // phone: Yup.string().required("This field is required"),
    // images: Yup.mixed().required("This field is required"),
    images: Yup.array()
      .min(3, "Please upload at least 3 images")
      .max(5, "Please upload at most 5 images")
      .required("This field is required"),
  });

  const {
    isLoading: isLoadingProducts,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["single-product"],
    queryFn: async () => {
      if (!id) return;
      const { data: listings } = await supabaseClient
        .from("products")
        .select("*")
        .eq("seller", id);

      setProducts(listings as Product[]);
    },
    enabled: !!id,
  });

  const { handlePhone, handleCountryChange, phone } = usePhoneInputDisclosure();
  const {
    handlePhone: handleWhatsApp,
    handleCountryChange: handleCountryChangeWhatsApp,
    phone: whatsApp,
  } = usePhoneInputDisclosure();
  const [loading, setLoading] = useState(false);
  const { data: categories, isLoading } = useFetchItemCategories();

  useEffect(() => {
    if (products.length > 0) {
      const fetchFiles = async () => {
        const fetchedFiles = await Promise.all(
          [...products[0].images, products[0].primary_image].map(
            async (url) => {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Failed to fetch ${url}`);
              }
              const blob = await response.blob();
              return new File([blob], url.split("/").pop() as string, {
                type: blob.type,
              });
            },
          ),
        );
        setFiles(fetchedFiles);
        console.log(fetchedFiles);
      };

      fetchFiles().catch(console.error);
    }
  }, [products]);

  return (
    <main className="wrapper">
      <div className="mb-10">
        <h2 className="capitalize">Update Product</h2>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {products.length > 0 && files.length > 0 && (
            <Formik
              initialValues={{
                itemName: products[0]?.title,
                description: products[0]?.description,
                price: products[0]?.price?.toString(),
                phone: products[0]?.phone,
                whatsApp: products[0]?.whatsapp,
                email: products[0]?.email,
                images: files,
                primaryImage: products[0]?.primary_image.split("/").pop(),
                category: products[0]?.category,
                condition: products[0]?.condition,
                term: products[0]?.term,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                setLoading(true);

                const oldFiles = files;
                const newFileSelections = values.images;
                const oldFilesRemovedFromNewSelections = oldFiles.filter(
                  (oldFile) => !newFileSelections.includes(oldFile),
                );
                const newFilesAddedNotInOldFiles = newFileSelections.filter(
                  (newFile) => !oldFiles.includes(newFile),
                );

                const imageUrls = products[0].images.filter((url) => {
                  const fileName = url.split("/").pop();
                  return !oldFilesRemovedFromNewSelections.some(
                    (file) => file.name === fileName,
                  );
                });

                const imageUploadPromises: Promise<any>[] = [];
                const imageDeletePromises: Promise<any>[] = [];

                newFilesAddedNotInOldFiles.forEach((imageFile) => {
                  const newFilename =
                    generateString(8) + "-" + slugify(imageFile.name || "");
                  const newFile = new File([imageFile as File], newFilename, {
                    type: imageFile?.type,
                  });
                  const fileForm = new FormData();
                  fileForm.append("file", newFile);
                  const fileUrl = `${process.env.NEXT_PUBLIC_DO_CDN_URL}${newFilename}`;

                  imageUploadPromises.push(
                    axios
                      .post(`${location.origin}/api/file-upload`, fileForm, {
                        headers: {
                          "Content-Type": "multipart/form-data",
                        },
                      })
                      .then(() => {
                        imageUrls.push(fileUrl);
                      })
                      .catch(() => {
                        toast.error(`Image upload unavailable`);
                      }),
                  );
                });

                oldFilesRemovedFromNewSelections.forEach((file) => {
                  imageDeletePromises.push(
                    axios
                      .delete(`/api/file-upload?file=${file.name}`)
                      .then(() => {
                        // toast.success(`Image removed successfully`, {
                        //   toastId: "toast",
                        // });
                      })
                      .catch(() => {
                        // toast.error(`Image removal failed`, {
                        //   toastId: "toast",
                        // });
                      }),
                  );
                });
                console.log(oldFilesRemovedFromNewSelections);
                if (values.primaryImage) {
                  Promise.all([...imageUploadPromises, ...imageDeletePromises])
                    .then(() => {
                      const images = imageUrls.map((file) => `${file}`);
                      supabase
                        .from("products")
                        .update({
                          title: values.itemName,
                          price: Number(values.price),
                          description: values.description,
                          condition: values.condition.toUpperCase(),
                          primary_image: `${process.env.NEXT_PUBLIC_DO_CDN_URL}${values.primaryImage}`,
                          term:
                            values.term === "yes"
                              ? "Negotiable"
                              : "Non-Negotiable",
                          images: images,
                          category: values.category,
                          phone: values.phone,
                          email: values.email,
                        })
                        .eq("id", products[0].id)
                        .then(({ data, error }) => {
                          setLoading(false);
                          if (!error) {
                            toast.success("Item updated successfully");
                          } else {
                            console.log(error);
                            toast.error("A problem occurred");
                          }
                        });
                    })
                    .catch((error) => {
                      console.error("Error during image uploads:", error);
                      setLoading(false);
                      toast.error("Image upload failed");
                    });
                } else {
                  toast.error("Please select a primary image");
                }
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit }) => (
                <Form
                  className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  <div className="flex flex-col gap-8">
                    <Input
                      name="itemName"
                      label="Item name"
                      placeholder="e.g. Dining table"
                      required
                    />
                    <SelectInput
                      name="category"
                      label="Category"
                      options={
                        categories?.map((data) =>
                          capitalizeName(data.category),
                        ) || []
                      }
                    />
                    <Input name="price" label="Price" prefix="GHS" required />
                    <Textarea
                      name="description"
                      label="Description"
                      placeholder="Describe your item"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-8">
                    <SelectInput
                      name="condition"
                      label="Condition"
                      options={["New", "Used-Like New", "Used"]}
                    />
                    <RadioInput
                      options={["Yes", "No"]}
                      label="Negotiable"
                      name="term"
                      color="primary"
                    />

                    <div className="flex flex-col gap-y-2">
                      <p className="text-shade-900">
                        Preferred Method of contact
                      </p>
                      <Checkbox
                        name="inAppCheck"
                        defaultChecked
                        label="In app messaging ( Default)"
                        disabled={true}
                      />
                      <Checkbox
                        name="emailCheck"
                        label="Email"
                        defaultChecked
                        onCheckedChange={(checked) =>
                          setUseEmail(checked as boolean)
                        }
                      />
                      {useEmail && (
                        <Input
                          name="email"
                          label="Email Address"
                          placeholder="Enter email address"
                          type="email"
                        />
                      )}
                      <Checkbox
                        name="phoneCheck"
                        label="Phone call"
                        onCheckedChange={(checked) =>
                          setUsePhone(checked as boolean)
                        }
                      />
                      {usePhone && (
                        <PhoneNumberInput
                          id=""
                          label="Phone"
                          name="phone"
                          value={phone}
                          onChange={handlePhone}
                          onCountryChange={handleCountryChange}
                        />
                      )}
                      <Checkbox
                        name="whatsappCheck"
                        label="WhatsApp"
                        onCheckedChange={(checked) =>
                          setUseWhatsapp(checked as boolean)
                        }
                      />
                      {useWhatsapp && (
                        <PhoneNumberInput
                          id=""
                          label="WhatsApp No."
                          name="whatsapp"
                          value={whatsApp}
                          onChange={handleWhatsApp}
                          onCountryChange={handleCountryChangeWhatsApp}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex h-[100%] w-full flex-col">
                    <FileUploader defaultImages={files} />
                    <div className="mt-auto flex justify-end">
                      <Button
                        type="submit"
                        className="mt-8"
                        isLoading={loading}
                      >
                        Publish
                      </Button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </>
      )}
    </main>
  );
};

export default UpdateItemPage;
