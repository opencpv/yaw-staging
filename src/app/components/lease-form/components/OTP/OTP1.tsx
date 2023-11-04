import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { styled } from "@stitches/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SlideEnter from "../SlideEnter";

let currentOTPIndex: number = 0;

type Props = {
  phoneNumber?: string;
};

const OTP1 = ({ phoneNumber } : Props) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { value } = e.target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);
    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);
    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    console.log("first", key);
    if (key === "Backspace") {
      console.log("key pressed", currentOTPIndex);
      setActiveOTPIndex(currentOTPIndex - 1);
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);
  return (
   <SlideEnter>
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        <div className="w-fit flex flex-col items-center justify-center gap-5">
          <div className="relative w-full max-w-[542px] aspect-[542/248] mt-20">
            <Image fill src={"/svgs/otp.svg"} alt="OTP Image" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[31px]  text-center font-semibold">
              OTP Verification
            </p>
            <p className="text-center ">
              We will send you a one-time password to your mobile number{" "}
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-6 w-full">
            <PhoneNumberInputv2
              onChange={() => console.log("first")}
              label="Enter your mobile number"
            />
          </div>
      
          <div className="w-full mt-8">
            <button className="w-full max-w-[542px] h-[52px]  text-white bg-accent-50 rounded-lg flex items-center justify-center font-semibold ">
              Send
            </button>
          </div>
        </div>
      </div>
   </SlideEnter>
  );
};

export default OTP1;
