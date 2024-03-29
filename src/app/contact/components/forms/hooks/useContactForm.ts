import React from "react";
import { useContactStore } from "@/store/contact/useContactStore";
import { CountryCode, E164Number } from "libphonenumber-js/core";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type FormValue = {
  fullname: string;
  email: string;
  phone: string;
  message: string;
};

export const useContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const activeTab = useContactStore((state) => state.activeKey);
  const [loading, setLoading] = React.useState(false);
  const [_, setCountry] = React.useState<CountryCode>("GH");
  const [file, setFile] = React.useState<string>("");

  const { phone, handlePhone, handleCountryChange } = usePhoneInputDisclosure();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]?.name);
    }
  };

  const validate = (values: any, phoneValue: E164Number | undefined) => {
    console.log("Inside func:", phoneValue);
    const errors: any = {};
    if (!values.fullname) {
      errors.fullname === "Required";
    }
    if (!values.message) errors.message === "Required";
    if (
      values.fullname &&
      values.message &&
      phoneValue === undefined &&
      !values.email
    ) {
      alert("Email or WhatsApp Number is required");
      errors.email = "Required";
      errors.phone = "Required";
    }
    return errors;
  };

  const tableName = "contact_us";
  const phoneInputPlaceholder = "WhatsApp Number";

  const errorClassName =
    "border-0 relative before:absolute before:inset-0 before:w-full before:h-full before:border before:border-neutral-500 before:rounded-lg before:animate-pulse";

  return {
    handleFileUpload,
    handleCountryChange,
    handlePhone,
    activeTab,
    formRef,
    phone,
    file,
    loading,
    setLoading,
    tableName,
    phoneInputPlaceholder,
    errorClassName,
    validate,
  };
};
