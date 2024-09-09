import React from "react";
import { CountryCode } from "libphonenumber-js/core";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useSessionStorage } from "@uidotdev/usehooks";

export const useContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const [loading, setLoading] = React.useState(false);
  //const [_, setCountry] = React.useState<CountryCode>("GH");
  const [file, setFile] = React.useState<File | null>();
  const { phone, handlePhone, handleCountryChange } = usePhoneInputDisclosure();

  const [contactFormSession, setContactFormSession] = useSessionStorage(
    "contactFormSession",
    {
      fullname: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
      fileUrl: "",
      reportLink: "",
      preferredContactMethod: "Email",
    },
  );

  const handleSessionChange = (name: string, value: string) => {
    setContactFormSession({
      ...contactFormSession,
      [name]: value,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileRemove = () => {
    if (file) setFile(null);
  };

  //const validate = (values: any, phoneValue: E164Number | undefined) => {
  //  const errors: any = {};
  //  if (!values.email && !phoneValue) {
  //    errors.email = "Email or WhatsApp Required";
  //    errors.phone = "Email or WhatsApp Required";
  //  }
  //  return errors;
  //};

  const tableName: keyof Database["public"]["Tables"] = "contact_us";
  const phoneInputPlaceholder = "WhatsApp Number";

  return {
    handleFileUpload,
    handleFileRemove,
    handleCountryChange,
    handlePhone,
    formRef,
    phone,
    file,
    setFile,
    loading,
    setLoading,
    tableName,
    phoneInputPlaceholder,
    handleSessionChange,
    contactFormSession,
  };
};
