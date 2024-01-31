// @ts-nocheck

"use client";
import { styled } from "@stitches/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaCaretDown } from "react-icons/fa";

import { Switch } from "@nextui-org/react";
import { openSans } from "@/styles/font";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";

interface CategoryProp {
  label: string;
  key: string;
}
const AddNewProduct = () => {
  const [categories, setCategories] = useState<CategoryProp[]>([]);
  const [selectedCategory, setselectedCategory] = useState<string>("");
  const [image, setImage] = useState<File | null>();
  const [condition, setCondition] = useState<string>("");
  const [negotiable, setNegotiable] = useState<boolean>(false);
  const [code, setCode] = useState();
  const [phone, setPhone] = useState();

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
            console.log(error);
            const catArray: CategoryProp[] = [];
            data.forEach((element) => {
              catArray.push({ key: element.category, label: element.category });
            });
            setCategories(catArray);
            console.log(catArray);
          }
        });
    }
  }, []);

  return (
    <Root>
      <main className="w-full px-8">
        <div className="mb-5 lg:mt-[32px] ">
          <p className="font text-[31px] font-semibold">Add new product</p>
        </div>
        <Formik
          initialValues={{
            product_name: "",
            category: "",
            price: "",
            description: "",
            condition: "",
            negotiable: false,
            phone: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <form className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div>
              <div className="form-div">
                <label>Product name</label>
                <Field
                  type="text"
                  name="product_name"
                  // placeholder={firstname}
                  className="form-input w-full"
                />
                <ErrorMessage name="product_name" />
              </div>
              <div className="form-div mt-5">
                <div className="form-div">
                  <label>Category</label>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        className="flex h-[52px] w-full justify-between rounded-md  border-[1px] bg-transparent px-2"
                      >
                        <p className="text-[#B4B2AF]">
                          {selectedCategory == ""
                            ? "Select product category"
                            : selectedCategory}
                        </p>
                        <FaCaretDown className="text-[#737373]" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Static Actions"
                      className="w-[300px] text-center text-neutral-800"
                      onAction={(key) => setselectedCategory(key as string)}
                      items={categories}
                    >
                      {(item) => (
                        <DropdownItem key={item.key}>{item.label}</DropdownItem>
                      )}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <div className="form-div mt-5">
                <label>Price</label>
                <div className="flex gap-2">
                  <div className=" h-fit rounded-md border-[1px] px-8 py-[13px] text-black ">
                    <p className={`${openSans.className}`}>GHS</p>
                  </div>
                  <Field
                    type="number"
                    name="price"
                    // placeholder={firstname}
                    className="form-input w-full"
                  />
                </div>
                <ErrorMessage name="price" />
              </div>
              <div className="form-div mt-5">
                <label>Description</label>
                <Field
                  as="textarea"
                  name="description"
                  // placeholder={firstname}
                  className="form-input-textarea h-[238px] rounded-md border-1 p-2"
                />
                <ErrorMessage name="description" />
              </div>
            </div>
            <div>
              <div className="form-div">
                <label>Condition</label>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      isIconOnly
                      className="flex h-[52px] w-full justify-between rounded-md  border-[1px] bg-transparent px-2"
                    >
                      <p className="text-[#B4B2AF]">
                        {condition == ""
                          ? "Select product condition"
                          : condition}
                      </p>
                      <FaCaretDown className="text-[#737373]" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    className="w-[300px] text-center text-neutral-800"
                    onAction={(key) => setCondition(key as string)}
                  >
                    <DropdownItem key="USED">Used</DropdownItem>
                    <DropdownItem key="NEW">New</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="form-div mt-5">
                <CustomRadioInput
                  label="Negotiable"
                  defaultValue="no"
                  onChange={(e) =>
                    e == "yes" ? setNegotiable(true) : setNegotiable(false)
                  }
                  infoBubble={false}
                />
              </div>
              <div className="form-div mt-[47px]">
                <PhoneNumberInputv2
                  label="Phone"
                  onChange={(selection) => {
                    setCode(selection);
                  }}
                  onChange2={(selection) => {
                    setPhone(selection);
                  }}
                  placeholder="Select your country"
                />
              </div>
            </div>
            <div className="h-[100%] w-full">
              <div className="h-[100%] w-full rounded-md border-[1px]"></div>
              <div className="flex justify-end">
                <button className="mt-8 rounded-md bg-[#DDB771] px-[40px] py-[15px] font-semibold text-white">
                  Add New Product
                </button>
              </div>
            </div>
          </form>
        </Formik>
      </main>
    </Root>
  );
};

export default AddNewProduct;

const Root = styled("div", {
  " .form-div": {
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
    color: "#6A6968",
  },
  " .form-input": {
    maxHeight: "52px",
    padding: "0.9375rem",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
    backgroundColor: "white",
  },

  ".form-input option": {
    backgroundColor: "white",
  },
  ".form-input option:hover": {
    backgroundColor: "green",
  },
  "form-input-textarea": {
    padding: "0.9375rem",
    maxWidth: "541px",
    width: "100%",
    aspectRatio: "541/368",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
  },
  "& .link-icon": {
    top: "75%",
    transform: "translateY(-75%)",
    left: "1rem",
  },
});

const Navigation = styled("button", {
  fontSize: "16px",
  fontWeight: "400",
  color: "#8A8A8A",
  padding: "0.5rem",
  "&:hover": {
    backgroundColor: "#8a8a8a05",
    color: "black",
  },

  variants: {
    type: {
      active: {
        color: "#307A4A",
        borderBottom: "2px solid #307A4A",
      },
    },
  },
});
