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

import useTLPage from "./useTLPage";

function GetNotifiedInput() {

  const { handleSubmit } = useTLPage();
  const optionSelect = useGetNotifiedStore((state: any) => state.filterOption);
  const {
    handleCountryChange,
    handlePhone,
    phone,

    phoneInputPlaceholder,
  } = useContactForm();

  return (
    <Root className={`flex flex-col sm:flex-row gap-10 w-full ${styles.root}`}>
      <div className="flex flex-col gap-4 w-full  ">
        <p
          className="text-[#F2B94E] font-semibold 
        text-[1.5625rem] leading-[2.1875rem] whitespace-nowrap">
          Get notified when we go live!
        </p>

        <GetNotifiedInputTabs />
      </div>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values, { setFieldError }) => {
          handleSubmit(values, setFieldError, phone)
        }}>
        {({ handleBlur, handleChange, values, errors }) => (
          <Form className="flex flex-col items-center gap-4 w-full max-w-[345px]">
            {optionSelect == "email" && (
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={values?.email}
                placeholder="Your email "
                className="w-full rounded-[4px] h-[3.25rem] bg-[#F9F9F9] border-[1px] p-[15px]"
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
              className="hope w-full text-white font-semibold px-10 py-[15px] rounded-lg bg-[#095B5A] h-[3.25rem]">
              Subscribe
            </Button>
          </Form>
        )}
      </Formik>
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
