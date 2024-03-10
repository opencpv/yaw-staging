"use client";
import { Button, Tabs } from "@nextui-org/react";
import { Form, Formik } from "formik";
import GetNotifiedInputTabs from "./GetNotifiedInputTabs";
import { useGetNotifiedStore } from "./store";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";
import { styled } from "@stitches/react";
import styles from "../index.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import useTLPage from "./useTLPage";
import { useState } from "react";

function GetNotifiedInput() {
  const { handleSubmit } = useTLPage();
  const [showInputs, setShowInputs] = useState<any>(false);
  const optionSelect = useGetNotifiedStore((state: any) => state.filterOption);
  const {
    handleCountryChange,
    handlePhone,
    phone,

    phoneInputPlaceholder,
  } = useContactForm();

  return (
    <Root
      className={`flex w-full flex-col gap-6 sm:flex-row sm:gap-10 ${styles.root}`}
    >
      <div className="flex w-full flex-col gap-4">
        <div
          className={`flex items-center ${
            showInputs ? "justify-center" : "justify-start"
          } gap-3 sm:justify-start`}
        >
          <p
            className="2xl:text-[1.5625rem text-left text-20 font-semibold
          leading-[2.1875rem] text-[#F2B94E] xs:whitespace-nowrap"
          >
            Click here to get notified!
          </p>
          <button
            className="appearance-none"
            onClick={() => setShowInputs((init: boolean) => !init)}
          >
            {" "}
            <MdOutlineKeyboardArrowRight size="30" color="#F2B94E" />
          </button>
        </div>
        {showInputs && <GetNotifiedInputTabs />}{" "}
      </div>
      {showInputs && (
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={(values, { setFieldError }) => {
            handleSubmit(values, setFieldError, phone, setShowInputs);
          }}
        >
          {({ handleBlur, handleChange, values, errors }) => (
            <Form className="flex w-full flex-col items-center gap-2 xs:max-w-[345px]">
              {optionSelect == "email" && (
                <input
                  required
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values?.email}
                  placeholder="Your email "
                  className="h-[3.25rem] w-full rounded-[4px] border-[1px] bg-[#F9F9F9] p-[15px]"
                />
              )}

              {optionSelect == "mobile" && (
                <InputPhoneNumber
                  id="phone"
                  name="phone"
                  value={phone}
                  placeholder={phoneInputPlaceholder}
                  onBlur={handleBlur}
                  onChange={handlePhone}
                  onInput={handleChange}
                  onCountryChange={handleCountryChange}
                />
              )}

              <Button
                type="submit"
                className="hope h-[3.25rem] w-full rounded-lg bg-[#095B5A] px-10 py-[15px] font-semibold text-white"
              >
                Subscribe
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </Root>
  );
}

const Root = styled("div", {
  ".PhoneInput": {
    width: "100%",
  },
  ".PhoneInput input": {
    height: "3.25rem",
    backgroundColor: "#F9F9F9",
  },
});
export default GetNotifiedInput;
