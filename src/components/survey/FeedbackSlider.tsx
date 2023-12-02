"use client";
import emojiStates from "@/enum/feedback/feedbackStates";
import React, { useState } from "react";
import { ConfigProvider, Slider } from "antd";
import Image from "next/image";

const FeedbackSlider = () => {
  const [value, setValue] = useState<number>(50);

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              /* component tokens */
              controlSize: 30,
              trackBg: "#44AF69",
              railBg: "#B2DEC2",
              handleActiveColor: "#105955",
              handleColor: "#B2DEC2",
              handleLineWidthHover: 2,
              handleSize: 16,
              handleSizeHover: 16,
              trackHoverBg: "#44AF69",
              railHoverBg: "#B2DEC2",
              railSize: 8,
            },
          },
        }}
      >
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
                      />
                      <h4
                        className={`text-center font-[600] capitalize leading-4 cursor-default text-primary-400`}
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
                    onClick={() => setValue(fromValue + 8)}
                  >
                    <Image
                      src={unmatchedImage}
                      alt={label.toLowerCase()}
                      width={40}
                      height={40}
                    />
                    <h4
                      className={`text-center font-[600] capitalize leading-4 cursor-default text-neutral-400`}
                    >
                      {label}
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className="">
              <Slider
                value={value}
                onChange={setValue}
                trackStyle={{
                  borderRadius: "5px",
                }}
                railStyle={{
                  borderRadius: "5px",
                }}
                tooltip={{
                  open: false,
                }}
              />
            </div>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};

export default FeedbackSlider;
