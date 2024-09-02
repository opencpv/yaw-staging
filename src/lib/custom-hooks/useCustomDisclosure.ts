import React, { useState } from "react";
import { E164Number, CountryCode } from "libphonenumber-js/core";

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onOpen = () => {
    setIsOpen(!isOpen);
  };
  const onOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
    if (!isOpen) {
      onOpen();
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return { isOpen, onOpen, onOpenChange, onClose };
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
