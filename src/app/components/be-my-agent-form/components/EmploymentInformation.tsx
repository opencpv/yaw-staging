/* eslint-disable react/no-unescaped-entities */
import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import PhoneNumberInput from "@/components/__shared/PhoneInput";

import CustomRadioInput from "@/app/components/CustomRadioInput";
import { styled } from "@stitches/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import CountryInput from "@/components/__shared/CountryInput";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import CurrencyInput from "@/components/__shared/CurrencyInput";
import CustomSelect from "@/app/components/CustomSelect";
import { useLocalStorage } from "@uidotdev/usehooks";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { MostRecentEmployment } from "../../application-form/components/content";
import { BeMyAgentFormType } from "./types";
import styles from "./index.module.css";

type Props = {};

const EmploymentInformationForm = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [agentFormData, setAgentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form");
    const [selectedCurrency, setSelectedCurrency] =
      useLocalStorage<any>("selectedCurrency");

    const [
      employersPhoneNumberSelectedCountry,
      setEmployersPhoneNumberSelectedCountry,
    ] = useLocalStorage<any>("employersPhoneNumberSelectedCountry");

    const [isChecked, setIsChecked] = useState(true); // State to store the checkbox state

    return (
      <Root>
        <h2 className={`${styles.title}`}>Employment Information</h2>
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
          <CustomSelect
            options={MostRecentEmployment}
            placeholder={
              agentFormData?.mostRecentEmployment || "Most Recent Employment"
            }
            value={agentFormData?.mostRecentEmployment}
            label="Employment Status"
            onChange={(value) =>
              setAgentFormData({
                ...agentFormData,
                mostRecentEmployment: value,
              })
            }
          />
          {/* {agentFormData?.mostRecentEmployment == "employed" && (
            <div className="text-shade200] mt-[64px] flex items-center justify-start gap-3">
              <input
                type="checkbox"
                name="currentlyEmployed"
                checked={agentFormData?.currentlyEmployed == "yes"}
                onChange={(e) => {
                  setIsChecked(!isChecked);
                  setAgentFormData({
                    ...agentFormData,
                    currentlyEmployed: isChecked ? "yes" : "no",
                  });
                }}
                className="bg-white "
              />
              <p className="text-[#737373]">Current</p>
            </div>
          )}

          {agentFormData?.mostRecentEmployment == "employed" && (
            <div className="mt-2 flex gap-3">
              <CustomDatePicker
                placeholderDate={agentFormData?.employmentStartDate}
                label="Start Date"
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    employmentStartDate: value,
                  })
                }
              />
              <CustomDatePicker
                label="End Date"
                placeholderDate={agentFormData?.employmentEndDate}
                disabled={agentFormData?.currentlyEmployed && true}
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    employmentEndDate: value,
                  })
                }
              />
            </div>
          )} */}
          <TextFieldInput
            name="employer"
            type="text"
            label="Employer or Income source"
            placeholder={agentFormData?.employer || "Enter employer name"}
            onChange={(e) =>
              setAgentFormData({
                ...agentFormData,
                employer: e.target.value,
              })
            }
          />
          <CountryInput
            initialValue={agentFormData?.employersCountry}
            label="Employer's Country"
            placeholder="Select employer's country"
            onChange={(value) =>
              setAgentFormData({
                ...agentFormData,
                employersCountry: value,
              })
            }
          />
          <TextFieldInput
            name="jobTitle"
            type="text"
            label="Job Title"
            placeholder={agentFormData?.jobTitle || "Enter your job title"}
            onChange={(e) =>
              setAgentFormData({
                ...agentFormData,
                jobTitle: e.target.value,
              })
            }
          />
          <CurrencyInput
            initialCurrency={selectedCurrency}
            initialValue={agentFormData?.monthlyIncomeCurrency}
            infoBubble
            placeholder="Select"
            label="Monthly Income"
            isSelectElement
            value2={agentFormData?.monthlyIncome || "1000-2000"}
            options={[
              { name: "1000-2000", value: "1000-2000" },
              { name: "3000-5000", value: "3000-5000" },
              { name: "6000-10000", value: "6000-10000" },
              { name: "10000+", value: "10000+" },
            ]}
            onChange={(value) =>
              setAgentFormData({
                ...agentFormData,
                monthlyIncomeCurrency: value,
              })
            }
            onChange2={(value) =>
              setAgentFormData({
                ...agentFormData,
                monthlyIncome: value,
              })
            }
          />
        </div>
      </Root>
    );
  },
);

EmploymentInformationForm.displayName = "EmploymentInformationForm";

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export default EmploymentInformationForm;
