import React from "react";
import { useContactStore } from "@/store/contact/useContactStore";
import { E164Number, CountryCode } from "libphonenumber-js/core";

export const useContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const activeTab = useContactStore((state) => state.activeKey);
  const [loading, setLoading] = React.useState(false);
  const [phone, setPhone] = React.useState<E164Number>();
  const [_, setCountry] = React.useState<CountryCode>("GH");
  const [file, setFile] = React.useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]?.name);
    }
  };

  const handleCountryChange = (country: CountryCode | undefined) => {
    setCountry(country as CountryCode);
  };

  const handlePhone = (value: any) => {
    setPhone(value as E164Number);
  };

  const tableName = "contact_us";
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
  };
};
