"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import CustomRadioInput from "@/components/__shared/ui/form/CustomRadioInput";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import CustomTextAreaInput from "@/components/__shared/ui/form/CustomTextAreaInput";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import FileUploader from "@/app/dashboard/components/shared/sell-products/FileUploader";
import Button from "@/components/__shared/ui/button/Button";
import { createClient } from "@/lib/utils/supabase/auth/client";
import axios from "axios";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { toast } from "react-toastify";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";

interface CategoryProp {
  name: string;
  value: string;
}
const AddNewProduct = () => {
  const [categories, setCategories] = useState<CategoryProp[]>([]);
  const [loading, setLoading] = useState(false);
  const id = useCurrentUserId();
  const validationSchema = Yup.object().shape({
    category: Yup.string().required("This field is requiredRequired"),
    condition: Yup.string().required("This field is required"),
    itemName: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    price: Yup.number().required("This field is required"),
    phone: Yup.string().required("This field is required"),
    // images: Yup.mixed().required("This field is required"),
    images: Yup.array()
      .min(3, "Please upload at least 3 images")
      .required("This field is required"),
  });

  const { handlePhone, handleCountryChange, phone } = usePhoneInputDisclosure();

  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    } else {
      supabase
        .from("product_category")
        .select("*")
        .then(({ data, error }) => {
          if (!error) {
            const catArray: CategoryProp[] = [];
            data.forEach((element) => {
              catArray.push({
                value: element.category,
                name: element.category,
              });
            });
            setCategories(catArray);
          }
        });
    }
  }, []);

  return (
    <section>
      <main className="w-full">
        <div className="mb-14">
          <h2>Add item for sale</h2>
        </div>
        <Formik
          initialValues={{
            itemName: "",
            description: "",
            price: "",
            phone: "",
            images: [new File([], "default")],
            category: "Furniture",
            condition: "New",
            negotiable: "no",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            setLoading(true);

            const imageUrls: string[] = [];
            const imageUploadPromises: Promise<any>[] = []; // Array to store upload promises

            values.images.forEach((imageFile) => {
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
                    toast.error(`Image upload unavailable`, {
                      toastId: "taost",
                    });
                  }),
              );
            });

            // Wait for all image uploads to finish before inserting into Supabase
            Promise.all(imageUploadPromises)
              .then(() => {
                supabase
                  .from("products")
                  .insert([
                    {
                      title: values.itemName,
                      price: values.price,
                      description: values.description,
                      condition: values.condition.toUpperCase(),
                      term:
                        values.negotiable === "yes"
                          ? "Negotiable"
                          : "Non-Negotiable",
                      images: imageUrls,
                      seller: id,
                      category: values.category,
                      phone: values.phone,
                    },
                  ])
                  .then(({ data, error }) => {
                    if (!error) {
                      setLoading(false);
                      window.history.back();
                    } else {
                      console.log(error);
                      setLoading(false);
                      toast.error("A problem occured", { toastId: "toast" });
                    }
                  });
              })
              .catch((error) => {
                console.error("Error during image uploads:", error);
                setLoading(false);
                toast.error("Image upload failed", { toastId: "toast" });
              });
          }}
        >
          <Form className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3">
            <div className="space-y-8">
              <TextFieldInput
                name="itemName"
                label="Item name"
                placeholder="e.g. Dining table"
              />
              <CustomSelect
                name="category"
                label="Category"
                options={categories}
              />
              <TextFieldInput name="price" label="Price" prefix="GHS" />
              <CustomTextAreaInput
                name="description"
                label="Description"
                placeholder="Describe your item"
                classes="h-[167px]"
              />
            </div>
            <div className="space-y-8">
              <CustomSelect
                name="condition"
                label="Condition"
                options={[
                  { name: "new", value: "NEW" },
                  { name: "used", value: "USED" },
                ]}
              />
              <CustomRadioInput
                options={["yes", "no"]}
                label="Negotiable"
                name="negotiable"
              />
              <InputPhoneNumber
                id=""
                label="Phone"
                name="phone"
                value={phone}
                onChange={handlePhone}
                onCountryChange={handleCountryChange}
              />
            </div>
            <div className="flex h-[100%] w-full flex-col">
              <FileUploader />
              <div className="mt-auto flex justify-end">
                <Button
                  type="submit"
                  color="accent"
                  className="mt-8"
                  isLoading={loading}
                >
                  Publish
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </main>
    </section>
  );
};

export default AddNewProduct;
