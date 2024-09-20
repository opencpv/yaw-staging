import React from "react";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useSessionStorage } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { ContactTabActiveKey } from "@/store/contact/useContactStore";

export const useContactForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);

  const pathname = usePathname();
  const tag = pathname?.split("/")[2] as ContactTabActiveKey;

  const [loading, setLoading] = React.useState(false);
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

  const tableName: keyof Database["public"]["Tables"] = "contact_us";
  const phoneInputPlaceholder = "WhatsApp Number";

  return {
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
    tag,
  };
};
