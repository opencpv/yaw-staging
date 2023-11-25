/* eslint-disable react/no-unescaped-entities */
import { styled } from "@stitches/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SlideEnter from "../SlideEnter";

let currentOTPIndex: number = 0;

type Props = {
  phoneNumber?: string;
};

const OTP2 = ({ phoneNumber } : Props) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

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
    <>
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        <div className="flex flex-col gap-5 items-center justify-center ">
          <div className="relative w-full max-w-[542px] aspect-[542/248] mt-20">
            <Image fill src={"/svgs/otp.svg"} alt="OTP Image" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[31px]  text-center font-semibold">
              OTP Verification
            </p>
            <p className="text-center ">
              Enter your OTP code number sent to {phoneNumber}
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-6">
            {otp.map((_, index) => {
              return (
                <div className="" key={index}>
                  <input
                    type="text"
                    ref={index == activeOTPIndex ? inputRef : null}
                    className="input border-[1px] border-[#D9D9D9] flex items-center justify-center max-w-[120px] max-h-[57px] w-full h-[57px] text-center rounded-2xl"
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={otp[index]}
                  />
                </div>
              );
            })}
          </div>
          <p className="my-2">
            Didn't receive the OTP?{" "}
            <button className="font-semibold">Resend OTP</button>
          </p>
          <div className="w-full ">
            <button className="w-full max-w-[542px] h-[52px]  text-white bg-accent-50 rounded-lg flex items-center justify-center font-semibold ">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP2;
