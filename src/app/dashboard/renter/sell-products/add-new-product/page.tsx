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

interface CategoryProp {
  label: string;
  key: string;
}
const AddNewProduct = () => {
  const [categories, setCategories] = useState<CategoryProp[]>([]);

  const validationSchema = Yup.object().shape({
    category: Yup.string().required("This field is requiredRequired"),
    condition: Yup.string().required("This field is required"),
    itemName: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    price: Yup.number().required("This field is required"),
    phoneNumber: Yup.string().required("This field is required"),
    // images: Yup.mixed().required("This field is required"),
    images: Yup.array()
      .min(3, "Please upload at least 3 images")
      .required("This field is required"),
  });

  const { handlePhone, handleCountryChange, phone } = usePhoneInputDisclosure();

  useEffect(() => {
    const supabase = createClient();
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
              catArray.push({ key: element.category, label: element.category });
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
            phoneNumber: "",
            images: [],
            category: "Furniture",
            condition: "New",
            negotiable: "no",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {}}
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
                options={[
                  { name: "furniture", value: "Furniture" },
                  { name: "tools", value: "Tools" },
                  { name: "electronics", value: "Electronics" },
                  { name: "vehicles", value: "Vehicles" },
                ]}
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
                  { name: "new", value: "New" },
                  { name: "used", value: "Used" },
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
                name="phoneNumber"
                value={phone}
                onChange={handlePhone}
                onCountryChange={handleCountryChange}
              />
            </div>
            <div className="flex h-[100%] w-full flex-col">
              <FileUploader />
              <div className="mt-auto flex justify-end">
                <Button type="submit" color="accent" className="mt-8">
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

// const Root = styled("div", {
//   " .form-div": {
//     display: "flex",
//     flexDirection: "column",
//     gap: "0.875rem",
//     color: "#6A6968",
//   },
//   " .form-input": {
//     maxHeight: "52px",
//     padding: "0.9375rem",
//     border: "1px solid #E6E6E6",
//     borderRadius: "4px",
//     color: "#737373",
//     backgroundColor: "white",
//   },

//   ".form-input option": {
//     backgroundColor: "white",
//   },
//   ".form-input option:hover": {
//     backgroundColor: "green",
//   },
//   "form-input-textarea": {
//     padding: "0.9375rem",
//     maxWidth: "541px",
//     width: "100%",
//     aspectRatio: "541/368",
//     border: "1px solid #E6E6E6",
//     borderRadius: "4px",
//     color: "#737373",
//   },
//   "& .link-icon": {
//     top: "75%",
//     transform: "translateY(-75%)",
//     left: "1rem",
//   },
// });
