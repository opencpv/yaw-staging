import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import React, { Dispatch, SetStateAction, useState } from "react";
import { styled } from "@stitches/react";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import CustomSelect from "@/app/components/CustomSelect";
import CountryInput from "@/components/__shared/CountryInput";
import { useLocalStorage } from "@uidotdev/usehooks";
import { IdentificationType } from "../../application-form/components/content";
import { BeMyAgentFormType } from "./types";

type Props = {};

const ScreeningAndOtherDetailsForm = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [selectedOption, setSelectedOption] = useState("option1");
    const handleOptionChange = (event: {
      target: { value: SetStateAction<string> };
    }) => {
      setSelectedOption(event.target.value);
    };

    const [agentFormData, setagentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form", {
        maritalStatus: "Single",
        leaseTerm: "12 months",
        gender: "Male",
      });
    return (
      <Root className="p4 px-2">
        <p className="text-[1.5625rem]  text-[#073B3A] font-semibold ">
          Screening & Other Details
        </p>
        <div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 pt-7">
            <div className="col-span-3 lg:col-span-1 form-col">
              <CustomDatePicker
                placeholderDate={agentFormData?.dateOfBirth}
                label="Date of Birth"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    dateOfBirth: value,
                  })
                }
              />
              <CustomSelect
                placeholder={
                  agentFormData?.identificationType || "Please select"
                }
                options={IdentificationType}
                label="Identification Type"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    identificationType: value,
                  })
                }
              />
              <TextFieldInput
                name="idNumber"
                type="text"
                label="Government Issued Identification Number"
                placeholder={"Enter your identification number"}
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    idNumber: e.target.value,
                  })
                }
              />
              <CountryInput
                initialValue={agentFormData?.government}
                placeholder="Select your government8"
                label="Government"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    government: value,
                  })
                }
              />
            </div>
            <div className="col-span-3 lg:col-span-1 form-col">
              <CustomRadioInput
                infoBubble={true}
                infoBubbleContent="data"
                defaultValue={agentFormData?.evictedBefore}
                label={"Have you ever been evicted?"}
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    evictedBefore: value,
                  })
                }
              />
              {agentFormData?.evictedBefore == "yes" && (
                <TextFieldInput
                  name="reasonForEviction"
                  type="text"
                  label="State Your Reasons"
                  placeholder="State your reasons here"
                  onChange={(e) =>
                    setagentFormData({
                      ...agentFormData,
                      reasonForEviction: e.target.value,
                    })
                  }
                />
              )}
              <CustomRadioInput
                infoBubble={true}
                infoBubbleContent="data"
                defaultValue={agentFormData?.convictedBefore}
                label={"Have you ever been convicted?"}
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    convictedBefore: value,
                  })
                }
              />
              {agentFormData?.convictedBefore == "yes" && (
                <TextFieldInput
                  name="reasonForConviction"
                  type="text"
                  label="State Your Reasons"
                  placeholder="State your reasons here"
                  onChange={(e) =>
                    setagentFormData({
                      ...agentFormData,
                      reasonForConviction: e.target.value,
                    })
                  }
                />
              )}
              <CustomRadioInput
                defaultValue={agentFormData?.pets}
                label={"Do you have any pets?"}
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    pets: value,
                  })
                }
              />

              <CustomRadioInput
                defaultValue={agentFormData?.vehicles}
                label={"Do you have any vehicles?"}
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    vehicles: value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </Root>
    );
  }
);

ScreeningAndOtherDetailsForm.displayName == "ScreeningAndOtherDetailsForm";

export default ScreeningAndOtherDetailsForm;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
