import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { styled } from "@stitches/react";
import React from "react";
import CountryInput from "@/components/__shared/ui/form/CountryInput";
import CurrencyInput from "@/components/__shared/ui/form/CurrencyInput";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import { useLocalStorage } from "@uidotdev/usehooks";
import { MostRecentEmployment } from "../../../../../../../components/__shared/ui/application-form/components/content";
import styles from "../../../index.module.css";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import CallOut from "@/components/__shared/ui/CallOut";

type Props = {};

const EmploymentInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
      useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

    return (
      <Root>
        <div className="mb-10 flex w-full flex-col gap-8">
          <h2 className={`${styles.titleNoMargin}`}>
            Employment Information{" "}
            <span className="text-sm text-shade-300">*</span>
          </h2>
          <CallOut content="You may select more than one response" />
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
          <CustomSelect
            name="employmentStatus"
            options={MostRecentEmployment}
            label="Employment Status"
            onChange={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                employmentStatus: value,
              })
            }
          />
          <TextFieldInput
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
            name="employerCountry"
            label="Employer's Country"
            placeholder="Select employer's or sponsor's country"
            onChange={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                employerCountry: value,
              })
            }
          />
          <TextFieldInput
            name="jobTitle"
            type="text"
            label="Job Title"
            placeholder={"Enter your job title"}
            onChange={(e) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                jobTitle: e.target.value,
              })
            }
          />
          <CurrencyInput
            name="monthlyIncomeCurrency"
            name2="monthlyIncome"
            //placeholder="Select"
            label="Monthly Income"
            isSelectElement
            //value2={BeMyAgentCreationSteps?.monthlyIncome || "1000 - 2000"}
            options={[
              { name: "1000 - 2000", value: "1000 - 2000" },
              { name: "3000 - 5000", value: "3000 - 5000" },
              { name: "6000 - 10000", value: "6000 - 10000" },
              { name: "10000+", value: "10000+" },
            ]}
            onChange={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
                monthlyIncomeCurrency: value,
              })
            }
            onChange2={(value) =>
              setBeMyAgentCreationSteps({
                ...BeMyAgentCreationSteps,
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
