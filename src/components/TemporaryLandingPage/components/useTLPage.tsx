import { useState } from "react";
import {
  useToastDisclosure,
  useToastDisclosureVariant1,
} from "@/lib/custom-hooks/useCustomDisclosure";
import { useGetNotifiedStore } from "./store";
import { E164Number } from "libphonenumber-js/core";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";

function useTLPage() {
  const { onOpen: toastOnOpen } = useToastDisclosureVariant1();

  const optionSelect = useGetNotifiedStore((state: any) => state.filterOption);

  const handleSubmit = (values: any, setFieldError: any, phone) => {
    values.phone = phone;
    if (optionSelect === "mobile") {
      if (!phone || phone.length < 8) {
        setFieldError("phone", "Please enter a valid mobile number.");
        toastOnOpen("Please enter a valid mobile number", "error");
      } else {
        toastOnOpen("You are subscribed now!!!", "success");
      }
    } else {
      // Handle other cases
      toastOnOpen("You are subscribed now!!!", "success");
    }
  };

  return {
    handleSubmit,
  };
}

export default useTLPage;
