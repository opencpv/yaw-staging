"use client";
import emojiStates from "@/enum/feedback/feedbackStates";
import React, { useEffect } from "react";
import Image from "next/image";
import { useField } from "formik";

type Props = {
  name: string;
  value: number;
  onChange: (val: number) => void;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const FeedbackSlider = ({ onChange, value, setValue, name }: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
     
    </>
  );
};

export default FeedbackSlider;
