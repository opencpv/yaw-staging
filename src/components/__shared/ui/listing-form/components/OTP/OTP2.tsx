/* eslint-disable react/no-unescaped-entities */
import { styled } from "@stitches/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SlideEnter from "../SlideEnter";

let currentOTPIndex: number = 0;

type Props = {
  phoneNumber?: string;
};

const OTP2 = ({ phoneNumber }: Props) => {
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
        <div className="flex flex-col items-center justify-center gap-5 ">
          <div className="relative mt-20 aspect-[542/248] w-full max-w-[542px]">
            <Image fill src={"/svgs/otp.svg"} alt="OTP Image" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center  text-[31px] font-semibold">
              OTP Verification
            </p>
            <p className="text-center ">
              Enter your OTP code number sent to {phoneNumber}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-5">
            {otp.map((_, index) => {
              return (
                <div className="" key={index}>
                  <input
                    type="text"
                    ref={index == activeOTPIndex ? inputRef : null}
                    className="input flex h-[57px] max-h-[57px] w-full max-w-[120px] items-center justify-center rounded-2xl border-[1px] border-[#D9D9D9] text-center"
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
            <button className="flex h-[52px] w-full  max-w-[542px] items-center justify-center rounded-lg bg-accent-50 font-semibold text-white ">
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP2;
