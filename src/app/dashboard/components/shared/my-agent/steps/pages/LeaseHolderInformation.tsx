import TextFieldInput from "@/app/components/TextFieldInput";
import { styled } from "@stitches/react";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import CustomSelect from "@/app/components/CustomSelect";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "../../index.module.css";
import { BeMyAgentFormType } from "../types";
import CustomTextAreaInput from "@/app/components/CustomTextAreaInput";


type Props = {};

const LeaseHolderInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [agentFormData, setAgentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form");

    const handleOnChange = (name: any, value: any) => {
      setAgentFormData({
        ...agentFormData,
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
              value={agentFormData?.title}
              options={[
                { name: "mr.", value: "Mr." },
                { name: "mrs.", value: "Mrs." },
                { name: "miss", value: "Miss" },
              ]}
              onChange={(value) => handleOnChange("title", value)}
            />
            <CustomSelect
              name="dateOfBirth"
              label="Age"
              value={agentFormData?.dateOfBirth}
              options={[
                { name: "12 - 17", value: "12 - 17" },
                { name: "18 - 44", value: "18 - 44" },
                { name: "45 - 74", value: "45 - 74" },
              ]}
              onChange={(value) => handleOnChange("dateOfBirth", value)}
            />
            <TextFieldInput
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              onChange={(e) =>
                setAgentFormData({
                  ...agentFormData,
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
                setAgentFormData({
                  ...agentFormData,
                  lastName: e.target.value,
                })
              }
            />
            <CustomSelect
              name="maritalStatus"
              label="Marital Status"
              value={agentFormData?.maritalStatus}
              options={[
                { name: "single", value: "Single" },
                { name: "married", value: "Married" },
              ]}
              onChange={(value) => handleOnChange("maritalStatus", value)}
            />
            <CustomSelect
              name="tenants"
              label="Number of Tenants"
              value={agentFormData?.tenants}
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
                name="evictedBefore"
                infoBubble={true}
                infoBubbleContent="data"
                defaultValue={agentFormData?.evictedBefore}
                label={"Have you ever been evicted?"}
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    evictedBefore: value,
                  })
                }
              />
              {agentFormData?.evictedBefore === "yes" && (
                <CustomTextAreaInput
                  label="State Your Reasons"
                  placeholder={"State your reasons here"}
                  classes="h-[52px]"
                  name="reasonForEviction"
                  onChange={(e) =>
                    setAgentFormData({
                      ...agentFormData,
                      reasonForEviction: e.target.value,
                    })
                  }
                />
              )}
              <CustomRadioInput
                name="convictedBefore"
                infoBubble={true}
                infoBubbleContent="data"
                defaultValue={agentFormData?.convictedBefore}
                label={"Have you ever been convicted?"}
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    convictedBefore: value,
                  })
                }
              />
              {agentFormData?.convictedBefore === "yes" && (
                <CustomTextAreaInput
                  label="State Your Reasons"
                  placeholder={"State your reasons here"}
                  classes="h-[52px]"
                  name="reasonForConviction"
                  onChange={(e) =>
                    setAgentFormData({
                      ...agentFormData,
                      reasonForConviction: e.target.value,
                    })
                  }
                />
              )}
            </div>
            <div className="form-col">
              <CustomRadioInput
                name="pets"
                defaultValue={agentFormData?.pets}
                label={"Do you have any pets?"}
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    pets: value,
                  })
                }
              />
              <CustomRadioInput
                name="vehicles"
                defaultValue={agentFormData?.vehicles}
                label={"Do you have any vehicles?"}
                onChange={(value) =>
                  setAgentFormData({
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
