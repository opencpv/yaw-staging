import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { styled } from "@stitches/react";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import { BeMyAgentFormType } from "./types";
import { openSans } from "@/styles/font";

const FullNameAndRelationship = ({ index, city, neighbourhood }: any) => {
  const [agentFormData, setagentFormData] = useLocalStorage<any>("agent-form");
  const locationArray = agentFormData?.locationArray || [];

  const handleInputChange = (field: any, value: any) => {
    const updatedLocation = [...locationArray];

    if (index >= updatedLocation.length) {
      updatedLocation[index] = {};
    }

    updatedLocation[index][field] = value;

    const updatedagentFormData = {
      ...agentFormData,
      locationArray: updatedLocation,
    };

    setagentFormData(updatedagentFormData);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
      <TFormDiv
        className={`font-[400] ${openSans.className} text-[#6A6968] capitalize w-full`}
      >
        <label htmlFor="">City</label>
        <input
          type="text"
          className="form-input"
          value={city}
          placeholder="Enter city"
          onChange={(e) => handleInputChange(`city`, e.target.value)}
        />
      </TFormDiv>

      <TFormDiv
        className={`font-[400] ${openSans.className} text-[#6A6968] capitalize w-full`}
      >
        <label htmlFor="">Neighbourhood</label>

        <input
          type="text"
          className="form-input"
          placeholder="Enter neighbourhood"
          value={neighbourhood}
          onChange={(e) => handleInputChange(`neighbourhood`, e.target.value)}
        />
      </TFormDiv>
    </div>
  );
};

const Applicants = ({}) => {
  const [agentFormData, setagentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  const [locationLength, setlocationLength] = useState<any>(
    agentFormData?.locationArray?.length || 1
  );
  const handleRemove = (index: any) => {
    const updatedagentFormData: any = { ...agentFormData };

    if (updatedagentFormData.otherPersons) {
      updatedagentFormData.otherPersons =
        updatedagentFormData.otherPersons.filter(
          (_: any, currentIndex: any) => currentIndex !== index
        );
    }

    setagentFormData(updatedagentFormData);
  };

  return (
    <div>
      <div className="col-span-3 lg:col-span-1 flex flex-col  gap-2">
        <p className="text-[1.9375rem] font-semibold">Location</p>

        <div className={`${locationLength >= 1 ? "mt-5" : ""}`}>
          {Array.from({ length: locationLength }).map((_, index) => (
            <div key={index} className="mb-2">
              <FullNameAndRelationship
                key={index}
                index={index}
                city={agentFormData?.locationArray?.[index]?.city}
                neighbourhood={
                  agentFormData?.locationArray?.[index]?.neighbourhood
                }
              />
              {locationLength > 1 && (
                <button
                  type="button"
                  className="text-[#E9515E]  h-[38px] justify-center items-center flex text-[13px] font-[400] gap-1 hover:bg-[#e9515e3a] px-2 "
                  onClick={() => {
                    handleRemove(index);
                    setlocationLength((init: any) => init - 1);
                  }}
                >
                  Remove
                  <AiOutlineMinus size={20} />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="font-normal text-[#AD842A] h-38 justify-start items-center text-13 flex gap-1 whitespace-nowrap  hover:bg-[#ad832a20] p-2 w-fit"
          onClick={() => {
            setlocationLength((init: any) => init + 1);
          }}
        >
          Add Additional Location
          <div className="w-[20px]">
            {" "}
            <AiOutlinePlus size={20} className="w-[20px] aspect-square" />
          </div>
        </button>
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
