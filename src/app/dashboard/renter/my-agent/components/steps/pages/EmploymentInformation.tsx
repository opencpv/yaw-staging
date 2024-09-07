import { Input } from "@/components/__shared/ui/form/input";
import { styled } from "@stitches/react";
import React from "react";
import CountryInput from "@/components/__shared/ui/form/country-input";
import CurrencyInput from "@/components/__shared/ui/form/currency-input";
import { SelectInput } from "@/components/__shared/ui/form/select";
import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import Callout from "@/components/__shared/ui/callout";

type Props = {};

const MostRecentEmployment = [
  "Employed",
  "Self Employed",
  "Student",
  "Retired",
  "Unemployed",
];

const EmploymentInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
      useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

    return (
      <Root>
        <div className={style.titleCallOutContainer}>
          <h2 className={`${style.titleNoMargin}`}>
            Employment Information <span className={style.asterisk}>*</span>
          </h2>
          <Callout content="You may select more than one response" />
        </div>
        <div className={style.wrappingFieldsGrid}>
          <SelectInput
            name="employment_status"
            options={MostRecentEmployment}
            label="Employment Status"
            onChange={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                employment_status: value,
              })
            }
          />
          <Input
            name="employer"
            type="text"
            label="Employer or Income Source"
            placeholder={"Enter employer or sponsor name"}
            onChange={(e) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                employer: e.target.value,
              })
            }
          />
          <CountryInput
            name="employer_country"
            label="Employer's Country"
            placeholder="Select employer's or sponsor's country"
            onChange={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                employer_country: value,
              })
            }
          />
          <Input
            name="job_title"
            type="text"
            label="Job Title"
            placeholder={"Enter your job title"}
            onChange={(e) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                job_title: e.target.value,
              })
            }
          />
          <CurrencyInput
            name="monthly_income_currency"
            name2="monthly_income"
            //placeholder="Select"
            label="Monthly Income"
            isSelectElement
            //value2={BeMyAgentCreationSteps?.monthlyIncome || "1000 - 2000"}
            options={["1000 - 2000", "3000 - 5000", "6000 - 10000", "10000+"]}
            onChange={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                monthly_income_currency: value,
              })
            }
            onChange2={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                monthly_income: value,
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
