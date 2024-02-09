import React, { useState } from "react";
import { toast } from "react-toastify";
import { E164Number, CountryCode } from "libphonenumber-js/core";

export const useToastDisclosure = () => {
  const onOpen = (message: string) => {
    const toastId = toast(message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      progressStyle: { background: "#F1B346" },
      bodyStyle: { paddingRight: "2.5rem" },

      style: {
        marginRight: "auto",
        marginLeft: "auto",
      },
    });

    // Add event listener to dismiss the toast when the user scrolls
    window.addEventListener("scroll", () => {
      toast.dismiss(toastId);
    });
  };

  return { onOpen };
};

type Props = {
  variant: "success" | "error";
};
export const useToastDisclosureVariant1 = () => {
  const variants : any = {
    success: { width: "30rem", maxWidth: "30rem", background: "#396261" },
    error: { width: "30rem", maxWidth: "30rem", background: "#5b0d0d" },
  };
  const onOpen = (message: string, variant: string) => {
    const toastId = toast(message, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "dark",
      progressStyle: { background: "#396261" },
      bodyStyle: { paddingRight: "2.5rem", },
      style: variants[variant],
    });

    window.addEventListener("scroll", () => {
      toast.dismiss(toastId);
    });
  };

  return { onOpen };
};


export const useSelectDisclosure = <T extends string>(defaultOption: T) => {
  const [value, setValue] = useState<T>(defaultOption);
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as T);
  };

  return { value, setValue, handleSelectionChange };
};


export const usePhoneInputDisclosure = () => {
  const [phone, setPhone] = React.useState<E164Number>();
  const [_, setCountry] = React.useState<CountryCode>("GH");

  const handlePhone = (value: any) => {
    setPhone(value as E164Number);
  };

  const handleCountryChange = (country: CountryCode | undefined) => {
    setCountry(country as CountryCode);
  };

  return { phone, handleCountryChange, setPhone, handlePhone };
};

export const useSliderAutoPlayDisclosure = () => {
  const [autoPlay, setAutoPlay] = React.useState(true);

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  return { autoPlay, handleAutoPlay };
};
