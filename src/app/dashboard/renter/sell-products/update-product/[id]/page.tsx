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
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/lib/typings";
import UpdateItemPage from "@/app/dashboard/components/shared/sell-products/pages/UpdateItemPage";

interface CategoryProp {
  name: string;
  value: string;
}

const UpdateProduct = () => {
  const [categories, setCategories] = useState<CategoryProp[]>([]);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const id = useCurrentUserId();
  const supabaseClient = createClient();
  const [products, setProducts] = useState<Product[]>([]);
  const validationSchema = Yup.object().shape({
    category: Yup.string().required("This field is required"),
    condition: Yup.string().required("This field is required"),
    itemName: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    price: Yup.number().required("This field is required"),
    phone: Yup.string().required("This field is required"),
    images: Yup.array()
      .min(3, "Please upload at least 3 images")
      .required("This field is required"),
  });

  const { isLoading, isFetching, refetch } = useQuery({
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

  useEffect(() => {
    if (products.length > 0) {
      const fetchFiles = async () => {
        const fetchedFiles = await Promise.all(
          products[0].images.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Failed to fetch ${url}`);
            }
            const blob = await response.blob();
            return new File([blob], url.split("/").pop() as string, {
              type: blob.type,
            });
          }),
        );
        setFiles(fetchedFiles);
        console.log(fetchedFiles);
      };

      fetchFiles().catch(console.error);
    }
  }, [products]);

  return (
    // <section>
    //   <main className="w-full">
    //     <div className="mb-14">
    //       <h2>Update item</h2>
    //     </div>
    //     {products.length > 0 && files.length > 0 && (
    //       <Formik
    //         initialValues={{
    //           itemName: products[0].title,
    //           description: products[0].description,
    //           price: products[0].price,
    //           phone: products[0].phone,
    //           images: files,
    //           category: products[0].category,
    //           condition: products[0].condition,
    //           negotiable: products[0].term === "negotiable" ? "yes" : "no",
    //         }}
    //         validationSchema={validationSchema}
    // onSubmit={async (values) => {
    //   setLoading(true);

    //   const oldFiles = files;
    //   const newFileSelections = values.images;
    //   const oldFilesRemovedFromNewSelections = oldFiles.filter(
    //     (oldFile) => !newFileSelections.includes(oldFile),
    //   );
    //   const newFilesAddedNotInOldFiles = newFileSelections.filter(
    //     (newFile) => !oldFiles.includes(newFile),
    //   );

    //   const imageUrls = products[0].images.filter((url) => {
    //     const fileName = url.split("/").pop();
    //     return !oldFilesRemovedFromNewSelections.some(
    //       (file) => file.name === fileName,
    //     );
    //   });

    //   const imageUploadPromises: Promise<any>[] = [];
    //   const imageDeletePromises: Promise<any>[] = [];

    //   newFilesAddedNotInOldFiles.forEach((imageFile) => {
    //     const newFilename =
    //       generateString(8) + "-" + slugify(imageFile.name || "");
    //     const newFile = new File([imageFile as File], newFilename, {
    //       type: imageFile?.type,
    //     });
    //     const fileForm = new FormData();
    //     fileForm.append("file", newFile);
    //     const fileUrl = `${process.env.NEXT_PUBLIC_DO_CDN_URL}${newFilename}`;

    //     imageUploadPromises.push(
    //       axios
    //         .post(`${location.origin}/api/file-upload`, fileForm, {
    //           headers: {
    //             "Content-Type": "multipart/form-data",
    //           },
    //         })
    //         .then(() => {
    //           imageUrls.push(fileUrl);
    //         })
    //         .catch(() => {
    //           toast.error(`Image upload unavailable`, {
    //             toastId: "toast",
    //           });
    //         }),
    //     );
    //   });

    //   oldFilesRemovedFromNewSelections.forEach((file) => {
    //     imageDeletePromises.push(
    //       axios
    //         .delete(`/api/file-upload?file=${file.name}`)
    //         .then(() => {
    //           toast.success(`Image removed successfully`, {
    //             toastId: "toast",
    //           });
    //         })
    //         .catch(() => {
    //           toast.error(`Image removal failed`, {
    //             toastId: "toast",
    //           });
    //         }),
    //     );
    //   });
    //   console.log(oldFilesRemovedFromNewSelections);
    //   Promise.all([...imageUploadPromises, ...imageDeletePromises])
    //     .then(() => {
    //       const images = imageUrls.map((file) => `${file}`);
    //       supabase
    //         .from("products")
    //         .update({
    //           title: values.itemName,
    //           price: values.price,
    //           description: values.description,
    //           condition: values.condition.toUpperCase(),
    //           term:
    //             values.negotiable === "yes"
    //               ? "Negotiable"
    //               : "Non-Negotiable",
    //           images: images,
    //           category: values.category,
    //           phone: values.phone,
    //         })
    //         .eq("id", products[0].id)
    //         .then(({ data, error }) => {
    //           setLoading(false);
    //           if (!error) {
    //             toast.success("Item updated successfully", {
    //               toastId: "toast",
    //             });
    //           } else {
    //             console.log(error);
    //             toast.error("A problem occurred", { toastId: "toast" });
    //           }
    //         });
    //     })
    //     .catch((error) => {
    //       console.error("Error during image uploads:", error);
    //       setLoading(false);
    //       toast.error("Image upload failed", { toastId: "toast" });
    //     });
    // }}
    //       >
    //         <Form className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3">
    //           <div className="space-y-8">
    //             <TextFieldInput
    //               name="itemName"
    //               label="Item name"
    //               placeholder="e.g. Dining table"
    //             />
    //             <CustomSelect
    //               name="category"
    //               label="Category"
    //               options={categories}
    //             />
    //             <TextFieldInput name="price" label="Price" prefix="GHS" />
    //             <CustomTextAreaInput
    //               name="description"
    //               label="Description"
    //               placeholder="Describe your item"
    //               classes="h-[167px]"
    //             />
    //           </div>
    //           <div className="space-y-8">
    //             <CustomSelect
    //               name="condition"
    //               label="Condition"
    //               options={[
    //                 { name: "new", value: "NEW" },
    //                 { name: "used", value: "USED" },
    //               ]}
    //             />
    //             <CustomRadioInput
    //               options={["yes", "no"]}
    //               label="Negotiable"
    //               name="negotiable"
    //             />
    //             <InputPhoneNumber
    //               id=""
    //               label="Phone"
    //               name="phone"
    //               value={phone}
    //               onChange={handlePhone}
    //               onCountryChange={handleCountryChange}
    //             />
    //           </div>
    //           <div className="flex h-[100%] w-full flex-col">
    //             <FileUploader name="images" />
    //             <div className="mt-auto flex justify-end">
    //               <Button
    //                 type="submit"
    //                 color="accent"
    //                 className="mt-8"
    //                 isLoading={loading}
    //               >
    //                 Publish
    //               </Button>
    //             </div>
    //           </div>
    //         </Form>
    //       </Formik>
    //     )}
    //   </main>
    // </section>
    <UpdateItemPage />
  );
};

export default UpdateProduct;
