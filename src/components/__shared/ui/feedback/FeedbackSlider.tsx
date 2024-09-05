"use client";
import emojiStates from "@/enum/feedback/feedbackStates";
import React from "react";
import { Slider } from "../slider/slider";
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
      <div className="grid w-full place-items-center">
        <div className="flex w-full flex-col gap-3">
          <div className="flex justify-between">
            {emojiStates.map((state) => {
              const {
                id,
                label,
                toValue,
                fromValue,
                matchedImage,
                unmatchedImage,
              } = state;
              if (value >= fromValue && value < toValue) {
                return (
                  <div key={id} className="flex w-2/12 flex-col items-center">
                    <Image
                      src={matchedImage}
                      alt={label.toLowerCase()}
                      width={40}
                      height={40}
                      className="shake-bl"
                    />
                    <h4
                      className={`cursor-default text-center font-[600] capitalize leading-4 text-primary-400`}
                    >
                      {label}
                    </h4>
                  </div>
                );
              }
              return (
                <div
                  key={id}
                  className="flex w-2/12 flex-col items-center"
                  onClick={() => {
                    setValue(fromValue + 8);
                    helpers.setValue(fromValue + 8);
                  }}
                >
                  <Image
                    src={unmatchedImage}
                    alt={label.toLowerCase()}
                    width={40}
                    height={40}
                  />
                  <h4
                    className={`cursor-default text-center font-[600] capitalize leading-4 text-neutral-400`}
                  >
                    {label}
                  </h4>
                </div>
              );
            })}
          </div>
          <div>
            <Slider
              value={[value]}
              onValueChange={(val) => {
                onChange(val[0]);
                helpers.setValue(val[0]);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
