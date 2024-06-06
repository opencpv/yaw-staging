import React, { useState } from "react";
import { toast } from "react-toastify";
import { E164Number, CountryCode } from "libphonenumber-js/core";

export const useToastDisclosure = () => {
  const variants = {
    success: {
      width: "100%",
      maxWidth: "30rem",
      background: "#22652c",
    },
    error: { width: "100%", maxWidth: "30rem", background: "#5b0d0d" },
  };

  const onOpen = (
    message: string,
    state?: "success" | "error",
    autoClose = 5000,
  ) => {
    const toastId = toast(
      state === "success"
        ? `👍️ ${message}`
        : state === "error"
          ? `❌ ${message}`
          : message,
      {
        position: "top-right",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        progressStyle: { background: "#F1B346" },
        bodyStyle: { paddingRight: "2.5rem" },
        style: variants[state || "success"],
      },
    );
  };

  return { onOpen };
};

type Props = {
  variant: "success" | "error";
};
export const useToastDisclosureVariant1 = () => {
  const variants: any = {
    success: {
      width: "100%",
      maxWidth: "30rem",
      background: "#22652c",
    },
    error: { width: "100%", maxWidth: "30rem", background: "#5b0d0d" },
  };
  const onOpen = (message: string, variant: string) => {
    const toastId = toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      progressStyle: { background: "#22652c" },
      bodyStyle: { paddingRight: "2.5rem" },

      style: variants[variant],
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

export const useFeedbackDisclosure = () => {
  const [value1, setValue1] = useState<number>(50);
  const [value2, setValue2] = useState<number>(50);
  const [thumbsUpChecked, setThumbsUpChecked] = useState<boolean>(false);
  const [thumbsDownChecked, setThumbsDownChecked] = useState<boolean>(false);

  const handleFirstSlideChange = (val: number) => {
    setValue1(val);
  };

  const handleSecondSlideChange = (val: number) => {
    setValue2(val);
  };

  const handleThumbsUpChecked = () => {
    setThumbsUpChecked((prevState) => !prevState);
    setThumbsDownChecked(false);
  };

  const handleThumbsDownChecked = () => {
    setThumbsDownChecked((prevState) => !prevState);
    setThumbsUpChecked(false);
  };

  return {
    value1,
    value2,
    setValue1,
    setValue2,
    thumbsUpChecked,
    thumbsDownChecked,
    handleFirstSlideChange,
    handleSecondSlideChange,
    handleThumbsUpChecked,
    handleThumbsDownChecked,
  };
};
