import React from "react";
import { useContactStore } from "@/store/contact/useContactStore";
import { CountryCode } from "libphonenumber-js/core";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

export const useContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const activeTab = useContactStore((state) => state.activeKey);
  const [loading, setLoading] = React.useState(false);
  const [_, setCountry] = React.useState<CountryCode>("GH");
  const [file, setFile] = React.useState<string>("");

  const {phone, handlePhone, handleCountryChange} = usePhoneInputDisclosure()

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]?.name);
    }
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
  };
};
