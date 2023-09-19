"use client";
import { styled } from "@stitches/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import PhoneNumberInput from "@/components/__shared/PhoneInput";
import supabase from "@/lib/utils/supabaseClient";
import Loader from "@/components/__shared/loader/Loader";
import { openSans } from "@/app/styles/font";

const ContactForm = () => {
  const [phone, setPhone] = useState("+233");
  const [loading, setLoading] = useState(false);
  const handlePhone = (phoneNumber: string) => {
    setPhone(phoneNumber);
  };

  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        phone: "",
        help: "",
      }}
      validate={(values) => {
        const errors: any = {};
        if (!values.fullname) {
          errors.fullname = "This field is required";
        }
        if (!values.email) {
          errors.email = "This field is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.help) {
          errors.help = "This field is required";
        }
        return errors;
      }}
      onSubmit={(values) => {
        const val = values;
        val.phone = phone;
        setLoading(true);
        supabase
          .from("faq")
          .insert([
            {
              fullname: val.fullname,
              email: val.email,
              phone: val.phone,
              message: val.help,
            },
          ])
          .select()
          .then(({ data, error }) => {
            if (error) {
              setLoading(false);
              console.log(error);
            } else {
              console.log(data);
              setLoading(false);
            }
          });
      }}
    >
      <Form className="w-full ">
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <label className="text-[#6A6968] block mb-[15px]">Fullname</label>
            <Field
              type="text"
              name="fullname"
              placeholder="John"
              className="border-[1px] rounded-[4px] border-[#EBEBEB] p-[15px] w-full"
            />
            <ErrorMessage
              className={`text-[#073B3A] text-[13px] ${openSans.className}`}
              name="fullname"
              component="p"
            />
          </div>
          <div className="w-full ">
            <label className="text-[#6A6968] block mb-[15px]">
              Email Address
            </label>
            <Field
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="border-[1px] rounded-[4px] border-[#EBEBEB] p-[15px] w-full"
            />
            <ErrorMessage
              name="email"
              component="p"
              className={`text-[#073B3A] text-[13px] ${openSans.className}`}
            />
          </div>
          <div className="w-full ">
            <label className="text-[#6A6968] block mb-[15px]">Phone</label>
            <PhoneNumberInput phoneChange={handlePhone} />
          </div>
          <div className="w-full">
            <label className="text-[#6A6968] block mb-[15px]">
              How can we help you?
            </label>
            <Field
              as="textarea" // Use 'textarea' as the component
              id="help"
              name="help"
              className="form-input-textarea px-4 w-full
                  border-[#E6E6E6] rounded-[4px] text-[#737373]
                  border py-2"
              rows="15" // Optional: Set the number of rows for the text area
              cols="50" // Optional: Set the number of columns for the text area
            />
            <ErrorMessage
              name="help"
              component="p"
              className={`text-[#073B3A] text-[13px] ${openSans.className}`}
            ></ErrorMessage>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <button
              type="submit"
              className="max-w-[160px] max-h-[52px] w-full aspect-[160/52]
                mt-5 bg-[#DDB771] text-[#ffff] rounded-[8px]"
            >
              Ask It Now
            </button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

const Root = styled("div", {
  " .form-div": {
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
    columnSpan: 2,
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

export default ContactForm;
