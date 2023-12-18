"use client";
import { openSans } from "@/styles/font";
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
import CustomRadioInput from "@/app/components/CustomRadioInput ";

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
          <p className="text-[31px] font font-semibold">Add new product</p>
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
          <form className="grid grid-cols-3 gap-2">
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
                        className="bg-transparent border-[1px] rounded-md flex justify-between  px-2 h-[52px] w-full"
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
                      className="text-neutral-800 w-[300px] text-center"
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
                  <div className=" border-[1px] h-fit py-[13px] rounded-md px-8 text-black ">
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
                  className="form-input-textarea p-2 h-[238px] border-1 rounded-md"
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
                      className="bg-transparent border-[1px] rounded-md flex justify-between  px-2 h-[52px] w-full"
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
                    className="text-neutral-800 w-[300px] text-center"
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
                <label>Phone</label>
              </div>
            </div>
            <div className="w-full h-[100%]">
              <div className="w-full h-[100%] border-[1px] rounded-md"></div>
              <div className="flex justify-end">
                <button className="px-[40px] py-[15px] bg-[#DDB771] rounded-md mt-8 text-white font-semibold">
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
    maxWidth: "422px",
    aspectRatio: "422/52",
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
