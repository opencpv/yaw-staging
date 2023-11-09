import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { styled } from "@stitches/react";
import { openSans } from "@/app/styles/font";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import { ListingForm } from "./types";
import CurrencyInput from "@/components/__shared/CurrencyInput";

const FeeTitleAndAmount = ({ index, feeTitle, amount }: any) => {
  const [lisitingFormData, setlisitingFormData] =
    useLocalStorage<ListingForm>("listing-form");
  const additionalFeesArray = lisitingFormData?.additionalFeesArray || [];

  const handleInputChange = (field: any, value: any) => {
    const updatedAdditionalFees = [...additionalFeesArray];

    if (index >= updatedAdditionalFees.length) {
      updatedAdditionalFees[index] = {};
    }

    updatedAdditionalFees[index][field] = value;

    const updatedlisitingFormData : any = {
      ...lisitingFormData,
      additionalFeesArray: updatedAdditionalFees,
    };

    setlisitingFormData(updatedlisitingFormData);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-3 w-full">
      <TFormDiv
        className={`font-[400] ${openSans.className} text-[#6A6968] capitalize w-full`}>
        <label htmlFor="">Fee Title</label>
        <input
          type="text"
          className="form-input"
          value={feeTitle}
          placeholder="Enter fee title"
          onChange={(e) => handleInputChange(`feeTitle`, e.target.value)}
        />
      </TFormDiv>

      <div className="w-full">
        <CurrencyInput
          initialValue={amount}
          onChange={(value) => handleInputChange(`amount`, value)}
          label="Amount"
        />
      </div>
    </div>
  );
};

const AdditionalFees = ({}) => {
  const [lisitingFormData, setlisitingFormData] =
    useLocalStorage<ListingForm>("listing-form");

  const [AdditionalFees, setAdditionalFees] = useState(
    lisitingFormData?.additionalFees
  );

  const [AdditionalFeesLength, setAdditionalFeesLength] = useState<any>(
    lisitingFormData?.additionalFeesArray?.length || 0
  );
  const handleRemove = (index: any) => {
    const updatedlisitingFormData: any = { ...lisitingFormData };

    if (updatedlisitingFormData.otherPersons) {
      updatedlisitingFormData.otherPersons =
        updatedlisitingFormData.otherPersons.filter(
          (_: any, currentIndex: any) => currentIndex !== index
        );
    }

    setlisitingFormData(updatedlisitingFormData);
  };

  return (
    <div>
      <div className="col-span-3 lg:col-span-1 flex flex-col  gap-2">
        <CustomRadioInput
          defaultValue={`${lisitingFormData?.additionalFees ? "yes" : "no"}`}
          label={"Do you require other fees?"}
          onChange={(value) => {
            setlisitingFormData({
              ...lisitingFormData,
              additionalFees: value == "yes" ? true : false,
            });
            value == "yes" && setAdditionalFees(true);
            value == "no" && setAdditionalFees(false);
          }}
        />

        {AdditionalFees && (
          <div className={`${AdditionalFeesLength >= 1 ? "mt-5" : ""}`}>
            {Array.from({ length: AdditionalFeesLength }).map((_, index) => (
              <div key={index} className="mb-2">
                <FeeTitleAndAmount
                  key={index}
                  index={index}
                  feeTitle={
                    lisitingFormData?.additionalFeesArray?.[index]?.feeTitle
                  }
                  amount={
                    lisitingFormData?.additionalFeesArray?.[index]?.amount
                  }
                />
                <button
                  className="text-[#E9515E] h-[38px] justify-center items-center flex text-[13px] font-[400] gap-1 hover:bg-[#e9515e3a] px-2 "
                  onClick={() => {
                    handleRemove(index);
                    setAdditionalFeesLength((init: any) => init - 1);
                  }}>
                  Remove
                  <AiOutlineMinus size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
        {lisitingFormData?.additionalFees && (
          <button
            type="button"
            className="font-normal text-[#AD842A] h-38 justify-start items-center text-13 flex gap-1 whitespace-nowrap  hover:bg-[#ad832a20] p-2 w-fit"
            onClick={() => {
              setAdditionalFeesLength((init: any) => init + 1);
            }}>
            Add Another Fee
            <div className="w-[20px]">
              {" "}
              <AiOutlinePlus size={20} className="w-[20px] aspect-square" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default AdditionalFees;

const TFormDiv = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    height: "52px",
    padding: "15px",
    fontSize: " 0.8125rem",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
  },
  label: {
    fontWeight: "400",
    color: "#6A6968",
  },
});
