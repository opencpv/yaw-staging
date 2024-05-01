import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { styled } from "@stitches/react";
import React, { useState } from "react";
import CountryInput from "@/components/__shared/ui/form/CountryInput";
import CurrencyInput from "@/components/__shared/ui/form/CurrencyInput";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import { useLocalStorage } from "@uidotdev/usehooks";
import { MostRecentEmployment } from "../../../../../../../components/__shared/ui/application-form/components/content";
import { BeMyAgentFormType } from "../types";
import styles from "../../index.module.css";

type Props = {};

const EmploymentInformation = React.forwardRef<HTMLInputElement, Props>(
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
            name="mostRecentEmployment"
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
            name="employersCountry"
            value={agentFormData?.employersCountry}
            label="Employer's Country"
            placeholder="Select employer's or sponsor's country"
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
            name="monthlyIncome"
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
          />
        </div>
      </Root>
    );
  },
);

EmploymentInformation.displayName = "EmploymentInformation";

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export default EmploymentInformation;
