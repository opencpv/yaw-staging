"use client";
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
import { useFetchItemCategories } from "@/app/moving-sale/services";
import capitalizeName from "@/lib/utils/stringManipulation";
import Loader from "@/components/__shared/ui/loader/Loader";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import axios from "axios";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import { toast } from "react-toastify";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";

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
const AddItemPage = () => {
  const [sameAsPhone, setSameAsPhone] = useState(false);
  const id = useCurrentUserId();
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

  const { handlePhone, handleCountryChange, phone } = usePhoneInputDisclosure();
  const {
    handlePhone: handleWhatsApp,
    handleCountryChange: handleCountryChangeWhatsApp,
    phone: whatsApp,
  } = usePhoneInputDisclosure();
  const [loading, setloading] = useState(false);
  const { data: categories, isLoading } = useFetchItemCategories();
  const initialValues: FormValues = {
    itemName: "",
    description: "",
    price: "",
    phone: "",
    whatsApp: "",
    email: "",
    images: [],
    primaryImage: "",
    category: categories?.[0]?.category || "",
    condition: "New",
    term: "no",
  };
  return (
    <main className="wrapper">
      <div className="mb-10">
        <h2 className="capitalize">Add item for sale</h2>
      </div>
      {isLoading ? (
        <Loader position="center" />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            setloading(true);
            const imageUrls: string[] = [];
            const imageUploadPromises: Promise<any>[] = [];
            let primaryImageUrl = "";
            const newFileSelections = values.images;
            newFileSelections.forEach((imageFile) => {
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
                    const file: File = fileForm.get("file") as File;
                    if (file.name.split(".")[0] == values.primaryImage) {
                      primaryImageUrl = fileUrl;
                    } else {
                      imageUrls.push(fileUrl);
                    }
                  })
                  .catch(() => {
                    toast.error(`Image upload unavailable`, {
                      toastId: "toast",
                    });
                  }),
              );
            });
            Promise.all(imageUploadPromises)
              .then(() => {
                supabase
                  .from("products")
                  .insert({
                    title: values.itemName,
                    description: values.description,
                    price: values.price,
                    images: imageUrls,
                    primary_image: primaryImageUrl,
                    category: values.category,
                    condition: values.condition,
                    term: values.term,
                    whatsapp: values.whatsApp,
                    phone: values.phone,
                    email: values.email,
                    seller: id,
                  })
                  .then(({ data, error }) => {
                    console.log(error?.message);
                    if (error) {
                      toast.error(`Something went wrong`, {
                        toastId: "toast",
                      });
                      setloading(false);
                    } else {
                      toast.success(`Item added successfully`, {
                        toastId: "toast",
                      });
                      setloading(false);
                      window.history.back();
                    }
                  });
              })
              .catch(() => {
                toast.error(`Something went wrong`, {
                  toastId: "toast",
                });
                setloading(false);
              });
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
                <TextFieldInput
                  name="itemName"
                  label="Item name"
                  placeholder="e.g. Dining table"
                  required
                />
                <CustomSelect
                  name="category"
                  label="Category"
                  options={
                    categories?.map((category) => ({
                      name: category.category,
                      value: capitalizeName(category.category),
                    })) || []
                  }
                />
                <TextFieldInput
                  name="price"
                  label="Price"
                  prefix="GHS"
                  required
                />
                <CustomTextAreaInput
                  name="description"
                  label="Description"
                  placeholder="Describe your item"
                  classes="h-[167px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-8">
                <CustomSelect
                  name="condition"
                  label="Condition"
                  options={[
                    { name: "new", value: "New" },
                    { name: "used-like new", value: "Used-like New" },
                    { name: "used", value: "Used" },
                  ]}
                />
                <CustomRadioInput
                  options={["yes", "no"]}
                  label="Negotiable"
                  name="term"
                  color="primary"
                />
                <div>
                  <p></p>
                </div>
                <TextFieldInput
                  name="email"
                  label="Email Address"
                  placeholder="Enter email address"
                  type="email"
                  required
                />
                <InputPhoneNumber
                  id=""
                  label="Phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhone}
                  onCountryChange={handleCountryChange}
                />
                {sameAsPhone ? (
                  <InputPhoneNumber
                    id=""
                    label="WhatsApp No."
                    name="phone"
                    value={phone}
                    onChange={handlePhone}
                    onCountryChange={handleCountryChange}
                  />
                ) : (
                  <InputPhoneNumber
                    id=""
                    label="WhatsApp No."
                    name="whatsapp"
                    value={whatsApp}
                    onChange={handleWhatsApp}
                    onCountryChange={handleCountryChangeWhatsApp}
                  />
                )}

                <Checkbox
                  color="primary"
                  label="Same as phone"
                  onCheckedChange={(checked) =>
                    setSameAsPhone(checked as boolean)
                  }
                />
              </div>
              <div className="flex h-[100%] w-full flex-col">
                <FileUploader />
                <div className="mt-auto flex justify-end">
                  <Button
                    type="submit"
                    color="primary"
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
    </main>
  );
};

export default AddItemPage;
