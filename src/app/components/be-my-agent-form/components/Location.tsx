import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { styled } from "@stitches/react";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import { BeMyAgentFormType } from "./types";
import { openSans } from "@/styles/font";
import { ClientOnly } from "@/components/ui/ClientOnly";
import CustomSelect from "../../CustomSelect";
import styles from "./index.module.css";
import TextFieldInput from "../../TextFieldInput";

const Location = ({ index, city, neighbourhood }: any) => {
  const [agentFormData, setAgentFormData] = useLocalStorage<any>("agent-form");
  const locationArray = agentFormData?.locationArray || [];

  const handleInputChange = (field: any, value: any) => {
    const updatedLocation = [...locationArray];

    if (index >= updatedLocation.length) {
      updatedLocation[index] = {};
    }

    updatedLocation[index][field] = value;

    const updatedAgentFormData = {
      ...agentFormData,
      locationArray: updatedLocation,
    };

    setAgentFormData(updatedAgentFormData);
  };

  return (
    <div className="flex w-full flex-col gap-8 lg:max-w-lg">
      {/* <TFormDiv className={`w-full font-[400] capitalize text-[#6A6968]`}>
        <label htmlFor="">City</label>
        <input
          type="text"
          className="form-input"
          value={city}
          placeholder="Enter city"
          onChange={(e) => handleInputChange(`city`, e.target.value)}
        />
      </TFormDiv> */}
      <CustomSelect
        label="City"
        value={city || "Accra"}
        options={[
          { name: "accra", value: "Accra" },
          { name: "tema", value: "Tema" },
        ]}
        onChange={(val) => handleInputChange("city", val)}
      />
      <CustomSelect
        label="Neighbourhood"
        value={neighbourhood || "Dansoman"}
        options={[
          { name: "dansoman", value: "Dansoman" },
          { name: "osu", value: "Osu" },
        ]}
        onChange={(val) => handleInputChange("neighbourhood", val)}
      />

      {/* <TFormDiv className={`w-full font-[400] capitalize text-[#6A6968]`}>
        <label htmlFor="">Neighbourhood</label>

        <input
          type="text"
          className="form-input"
          placeholder="Enter neighbourhood"
          value={neighbourhood}
          onChange={(e) => handleInputChange(`neighbourhood`, e.target.value)}
        />
      </TFormDiv> */}
    </div>
  );
};

const Applicants = ({}) => {
  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");

  const [locationLength, setLocationLength] = useState<any>(
    agentFormData?.locationArray?.length || 1,
  );
  const handleRemove = (index: any) => {
    const updatedAgentFormData: any = { ...agentFormData };

    if (updatedAgentFormData.locationArray) {
      updatedAgentFormData.locationArray =
        updatedAgentFormData.locationArray.filter(
          (_: any, currentIndex: any) => currentIndex !== index,
        );
    }

    setAgentFormData(updatedAgentFormData);
  };

  return (
    <div className="space-y-10">
      <div className="space-y-4 lg:max-w-lg">
        <h2 className={`${styles.titleNoMargin}`}>Name your Search</h2>
        <TextFieldInput
          type="text"
          name="searchName"
          placeholder="E.g: My Accra Dream Home"
          onChange={(e) =>
            setAgentFormData({
              ...agentFormData,
              searchName: e.target.value,
            })
          }
        />
      </div>
      <div className="">
        <h2 className={styles.title}>Desired Locations</h2>
        <div className={"col-span-3 flex flex-col gap-2 lg:col-span-1"}>
          {/* Locations */}
          <div>
            {Array.from({ length: locationLength }).map((_, index) => (
              <div key={index} className={index !== 0 ? "mb-2" : "mb-10"}>
                <ClientOnly>
                  <Location
                    key={index}
                    index={index}
                    city={agentFormData?.locationArray?.[index]?.city}
                    neighbourhood={
                      agentFormData?.locationArray?.[index]?.neighbourhood
                    }
                  />
                </ClientOnly>
                {locationLength > 1 && index !== 0 && (
                  <button
                    type="button"
                    className="flex h-[38px] items-center justify-center gap-1 px-2 text-[13px] font-[400] text-[#E9515E] hover:bg-[#e9515e3a] "
                    onClick={() => {
                      handleRemove(index);
                      setLocationLength((init: any) => init - 1);
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
            className="h-38 text-13 flex w-fit items-center justify-start gap-1 whitespace-nowrap p-2  font-normal text-[#AD842A] hover:bg-[#ad832a20]"
            onClick={() => {
              setLocationLength((init: any) => init + 1);
            }}
          >
            Add Additional Location
            <div className="w-[20px]">
              {" "}
              <AiOutlinePlus size={20} className="aspect-square w-[20px]" />
            </div>
          </button>
        </div>
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
