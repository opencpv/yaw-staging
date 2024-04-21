import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { styled } from "@stitches/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SlideEnter from "../SlideEnter";

let currentOTPIndex: number = 0;

type Props = {
  phoneNumber?: string;
};

const OTP1 = ({ phoneNumber }: Props) => {
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
    index: number,
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") {
      setActiveOTPIndex(currentOTPIndex - 1);
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex w-fit flex-col items-center justify-center gap-5">
          <div className="relative mt-20 aspect-[542/248] w-full max-w-[542px]">
            <Image fill src={"/svgs/otp.svg"} alt="OTP Image" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center  text-[31px] font-semibold">
              OTP Verification
            </p>
            <p className="text-center ">
              We will send you a one-time password to your mobile number{" "}
            </p>
          </div>
          <div className="mt-6 flex w-full items-center justify-center gap-5">
            <PhoneNumberInputv2
              onChange={() => null}
              label="Enter your mobile number"
            />
          </div>

          <div className="mt-8 w-full">
            <button className="flex h-[52px] w-full  max-w-[542px] items-center justify-center rounded-lg bg-accent-50 font-semibold text-white ">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP1;
