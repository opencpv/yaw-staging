import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { styled } from "@stitches/react";
import CustomRadioInput from "@/components/__shared/ui/form/CustomRadioInput";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "../../../index.module.css";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";

type Props = {};

const LeaseHolderInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
    useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

  const handleOnChange = (name: any, value: any) => {
    setBeMyAgentCreationSteps({
      ...BeMyAgentCreationSteps,
      [name]: value,
    });
  };

    return (
      <Root className="space-y-10">
        {/* Lease Holder Information */}
        <div>
          <h2 className={styles.title}>Lease Holder Information</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
            <CustomSelect
              name="title"
              label="Title"
              options={[
                { name: "mr.", value: "Mr." },
                { name: "mrs.", value: "Mrs." },
                { name: "miss", value: "Miss" },
              ]}
              onChange={(value) => handleOnChange("title", value)}
            />
            <CustomSelect
              name="age"
              label="Age"
              options={[
                { name: "12 - 17", value: "12 - 17" },
                { name: "18 - 44", value: "18 - 44" },
                { name: "45 - 74", value: "45 - 74" },
              ]}
              onChange={(value) => handleOnChange("age", value)}
            />
            <TextFieldInput
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  firstName: e.target.value,
                })
              }
            />
            <TextFieldInput
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  lastName: e.target.value,
                })
              }
            />
            <CustomSelect
              name="maritalStatus"
              label="Marital Status"
              options={[
                { name: "single", value: "Single" },
                { name: "married", value: "Married" },
              ]}
              onChange={(value) => handleOnChange("maritalStatus", value)}
            />
            <CustomSelect
              name="tenants"
              label="Number of Tenants"
              options={[
                { name: "1 - 5", value: "1 - 5" },
                { name: "6 - 10", value: "6 - 10" },
                { name: "10+", value: "10+" },
              ]}
              onChange={(value) => handleOnChange("tenants", value)}
            />
          </div>
        </div>
        {/* Screening & Other Details */}
        <div>
          <h2 className={styles.title}>Screening & Other Details</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
            <div className="form-col">
              <CustomRadioInput
                name="evicted"
                options={["Yes", "No"]}
                infoBubbleContent="data"
                label={"Have you ever been evicted?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    evicted: value
                  })
                }
              />
              {/* {BeMyAgentCreationSteps?.evicted === true && (
                <CustomTextAreaInput
                  label="State Your Reasons"
                  placeholder={"State your reasons here"}
                  classes="h-[52px]"
                  name="reasonForEviction"
                  onChange={(e) =>
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      reasonForEviction: e.target.value,
                    })
                  }
                />
              )}*/ }
              <CustomRadioInput
                name="convicted"
                options={["Yes", "No"]}
                infoBubble={true}
                infoBubbleContent="data"
                label={"Have you ever been convicted?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    convicted: value
                  })
                }
              />
              {/* {BeMyAgentCreationSteps?.convicted === true && (
                <CustomTextAreaInput
                  label="State Your Reasons"
                  placeholder={"State your reasons here"}
                  classes="h-[52px]"
                  name="reasonForConviction"
                  onChange={(e) =>
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      reasonForConviction: e.target.value,
                    })
                  }
                />
              )} */}
            </div>
            <div className="form-col">
              <CustomRadioInput
                name="hasPets"
                options={["Yes", "No"]}
                label={"Do you have any pets?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    hasPets: value
                  })
                }
              />
              <CustomRadioInput
                name="hasVehicles"
                options={["Yes", "No"]}
                label={"Do you have any vehicles?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    hasVehicles: value
                  })
                }
              />
            </div>
          </div>
        </div>
      </Root>
    );
  },
);

LeaseHolderInformation.displayName == "LeaseHolderInformation";

export default LeaseHolderInformation;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});
