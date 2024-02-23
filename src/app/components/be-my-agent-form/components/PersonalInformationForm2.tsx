import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import { styled } from "@stitches/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import CustomSelect from "@/app/components/CustomSelect";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LeaseData } from "../../application-form/components/content";
import styles from "./index.module.css";
import { BeMyAgentFormType } from "./types";
import CustomTextAreaInput from "../../CustomTextAreaInput";
type Props = {};

const PersonalInformationForm2 = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [agentFormData, setAgentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form");

    console.log(agentFormData);

    const handleOnChange = (name: any, value: any) => {
      setAgentFormData({
        ...agentFormData,
        [name]: value,
      });
    };

    return (
      <Root className="space-y-10">
        <div>
          <h2 className={styles.title}>Lease Holder Information</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
            <CustomSelect
              label="Title"
              value={agentFormData?.title || "Mrs"}
              options={[
                { name: "mr", value: "Mr" },
                { name: "mrs", value: "Mrs" },
                { name: "miss", value: "Miss" },
              ]}
              onChange={(value) => handleOnChange("title", value)}
            />
            <CustomSelect
              label="Age"
              value={agentFormData?.dateOfBirth || "18-44"}
              options={[
                { name: "12-17", value: "12-17" },
                { name: "18-44", value: "18-44" },
                { name: "45-74", value: "45-74" },
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
            {/* <SelectSearchInput
                data={LeaseData}
                placeholder="Enter lease term"
                label="Lease term"
                onChange={(value) => {
                  handleOnChange("leaseTerm", value);
                }}
              /> */}
            <CustomSelect
              label="Marital Status"
              value={agentFormData?.maritalStatus || "Single"}
              options={[
                { name: "single", value: "Single" },
                { name: "married", value: "Married" },
              ]}
              onChange={(value) => handleOnChange("maritalStatus", value)}
            />
            <CustomSelect
              label="Number of Tenants"
              value={agentFormData?.tenants || "1-5"}
              options={[
                { name: "1-5", value: "1-5" },
                { name: "6-10", value: "6-10" },
                { name: "10+", value: "10+" },
              ]}
              onChange={(value) => handleOnChange("tenants", value)}
            />
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Screening & Other Details</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
            <div className="form-col">
              <CustomRadioInput
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
                  value={agentFormData?.reasonForEviction}
                  onChange={(e) =>
                    setAgentFormData({
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
                  value={agentFormData?.reasonForConviction}
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

PersonalInformationForm2.displayName == "PersonalInformationForm2";

export default PersonalInformationForm2;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});
