"use client";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { styled } from "@stitches/react";
import { openSans } from "@/styles/font";
import { PropertyDataType } from "./propertyDataType";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import { ClientOnly } from "@/components/ui/ClientOnly";

const FullNameAndRelationship = ({ index, fullName, relationship }: any) => {
  const [propertyData, setPropertyData] =
    useLocalStorage<PropertyDataType>("property1");
  const otherPersonsArray = propertyData?.otherPersonsArray || [];

  const handleInputChange = (field: any, value: any) => {
    const updatedOtherPersons = [...otherPersonsArray];

    if (index >= updatedOtherPersons.length) {
      updatedOtherPersons[index] = {};
    }

    updatedOtherPersons[index][field] = value;

    const updatedPropertyData = {
      ...propertyData,
      otherPersonsArray: updatedOtherPersons,
    };

    setPropertyData(updatedPropertyData);
  };

  return (
    <div className="flex w-full flex-col gap-3 xl:flex-row">
      <TFormDiv className={`w-full font-[400] capitalize text-[#6A6968]`}>
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          className="form-input"
          value={fullName}
          placeholder="Enter full name"
          onChange={(e) => handleInputChange(`fullName`, e.target.value)}
        />
      </TFormDiv>

      <TFormDiv className={`w-full font-[400] capitalize text-[#6A6968]`}>
        <label htmlFor="">Relationship</label>

        <input
          type="text"
          className="form-input"
          placeholder="Enter relationship"
          value={relationship}
          onChange={(e) => handleInputChange(`relationship`, e.target.value)}
        />
      </TFormDiv>
    </div>
  );
};

const Applicants = ({}) => {
  const [propertyData, setPropertyData] =
    useLocalStorage<PropertyDataType>("property1");

  const [applicants, setApplicants] = useState(propertyData?.otherApplicants);

  const [applicantsLength, setApplicantsLength] = useState<any>(
    propertyData?.otherPersonsArray?.length || 0,
  );
  const handleRemove = (index: any) => {
    const updatedPropertyData: any = { ...propertyData };

    if (updatedPropertyData.otherPersons) {
      updatedPropertyData.otherPersons =
        updatedPropertyData.otherPersons.filter(
          (_: any, currentIndex: any) => currentIndex !== index,
        );
    }

    setPropertyData(updatedPropertyData);
  };

  return (
    <div>
      <div className="col-span-3 flex flex-col gap-2  lg:col-span-1">
        <CustomRadioInput
          defaultValue={`${propertyData?.otherApplicants ? "yes" : "no"}`}
          label={"Are there additional applicants"}
          onChange={(value) => {
            setPropertyData({
              ...propertyData,
              otherApplicants: value == "yes" ? true : false,
            });
            value == "yes" && setApplicants(true);
            value == "no" && setApplicants(false);
          }}
        />

        {applicants && (
          <div className={`${applicantsLength >= 1 ? "mt-5" : ""}`}>
            {Array.from({ length: applicantsLength }).map((_, index) => (
              <div key={index} className="mb-2">
                <ClientOnly>
                  <FullNameAndRelationship
                    key={index}
                    index={index}
                    fullName={
                      propertyData?.otherPersonsArray?.[index]?.fullName
                    }
                    relationship={
                      propertyData?.otherPersonsArray?.[index]?.relationship
                    }
                  />
                </ClientOnly>
                <button
                  type="button"
                  className="flex h-[38px] items-center justify-center gap-1 px-2 text-[13px] font-[400] text-[#E9515E] hover:bg-[#e9515e3a] "
                  onClick={() => {
                    handleRemove(index);
                    setApplicantsLength((init: any) => init - 1);
                  }}
                >
                  Remove
                  <AiOutlineMinus size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
        {propertyData?.otherApplicants && (
          <button
            type="button"
            className="h-38 text-13 flex w-fit items-center justify-start gap-1 whitespace-nowrap p-2  font-normal text-[#AD842A] hover:bg-[#ad832a20]"
            onClick={() => {
              setApplicantsLength((init: any) => init + 1);
            }}
          >
            Add Another Applicant
            <div className="w-[20px]">
              {" "}
              <AiOutlinePlus size={20} className="aspect-square w-[20px]" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Applicants;

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
