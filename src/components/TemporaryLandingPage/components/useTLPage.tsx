import { useState } from "react";
import {
  useToastDisclosure,
  useToastDisclosureVariant1,
} from "@/lib/custom-hooks/useCustomDisclosure";
import { useGetNotifiedStore } from "./store";
import { E164Number } from "libphonenumber-js/core";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";
import parsePhoneNumber from "libphonenumber-js";
function useTLPage() {
  const { onOpen: toastOnOpen } = useToastDisclosureVariant1();

  const optionSelect = useGetNotifiedStore((state: any) => state.filterOption);

  const handleSubmit = (
    values: any,
    setFieldError: any,
    phone: any,
    func: any,
  ) => {
    values.phone = phone;

    const phoneNUmber = parsePhoneNumber(values?.phone || "");
    if (optionSelect === "mobile") {
      if (!phone || !phoneNUmber?.isValid() || !phoneNUmber?.isPossible()) {
        setFieldError("phone", "Please enter a valid mobile number.");
        toastOnOpen("Please enter a valid mobile number", "error");
      } else {
        toastOnOpen("Congratulations! You are in the loop!!", "success");
        func((init: boolean) => !init);
      }
    } else {
      toastOnOpen("Congratulations! You are in the loop!!", "success");
      func((init: boolean) => !init);
    }
  };

  return {
    handleSubmit,
  };
}

export default useTLPage;
