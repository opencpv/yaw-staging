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
    const errors: any = {};
    if (!values.email && !phoneValue) {
      errors.email = "Email or WhatsApp Required";
      errors.phone = "Email or WhatsApp Required";
    }
    return errors;
  };

  const tableName: keyof Database["public"]["Tables"] = "contact_us";
  const phoneInputPlaceholder = "WhatsApp Number";

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
    validate,
  };
};
