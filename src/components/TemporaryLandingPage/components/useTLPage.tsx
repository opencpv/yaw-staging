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

  const handleSubmit = async (values: any, setFieldError: any, phone: any) => {
    values.phone = phone;
    if (optionSelect === "mobile") {
      if (!phone || phone.length < 8) {
        setFieldError("phone", "Please enter a valid mobile number.");
        toastOnOpen("Please enter a valid mobile number", "error");
      } else {
        const result = await sendData("phone", values);
        if (result?.ok) {
          toastOnOpen("You are subscribed now!!!", "success");
        }
      }
    } else {
      const result = await sendData("email", values);
      if (result?.ok) {
        toastOnOpen("You are subscribed now!!!", "success");
      }
    }
  };

  const sendData = async (type, values) => {
    // const requestBody: any = {};
    // if (type === "email") {
    //   requestBody.email = values?.email;
    // } else if (type === "phone") {
    //   requestBody.number = values?.phone;
    // }
    // requestBody.waitlist_id = 13213;

    // console.log(requestBody)

    try {
      const response = await fetch(
        "https://api.getwaitlist.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values?.email || "N/A",
            phone: values?.phone,
            waitlist_id: 13213,
          }),
        },
      );

      if (!response.ok) {
        toastOnOpen("Please try again. Request failed", "error");
      }
      console.log(response);
      return response;
    } catch (error) {
      toastOnOpen("Please try again. Request failed", "error");
    }
  };

  return {
    handleSubmit,
  };
}

export default useTLPage;
