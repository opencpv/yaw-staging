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
            value={agentFormData?.mostRecentEmployment || "Employed"}
            label="Employment Status"
            onChange={(value) =>
              setAgentFormData({
                ...agentFormData,
                mostRecentEmployment: value,
              })
            }
          />
          <TextFieldInput
            name="employer"
            type="text"
            label="Employer or Income Source"
            placeholder={
              agentFormData?.employer || "Enter employer or sponsor name"
            }
            onChange={(e) =>
              setAgentFormData({
                ...agentFormData,
                employer: e.target.value,
              })
            }
          />
          <CountryInput
            initialValue={
              agentFormData?.employersCountry || "Republic of Ghana"
            }
            label="Employer's Country"
            placeholder="Select employer's or sponsor's country"
            onChange={(value) =>
              setAgentFormData({
                ...agentFormData,
                employersCountry: value,
              })
            }
            type={2}
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
          {/* <CurrencyInput
            initialCurrency={selectedCurrency}
            initialValue={agentFormData?.monthlyIncomeCurrency}
            infoBubble
            placeholder="Select"
            label="Monthly Income"
            isSelectElement
            value2={agentFormData?.monthlyIncome || "1000 - 2000"}
            options={[
              { name: "1000 - 2000", value: "1000 - 2000" },
              { name: "3000 - 5000", value: "3000 - 5000" },
              { name: "6000 - 10000", value: "6000 - 10000" },
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
            type={2}
          /> */}
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
