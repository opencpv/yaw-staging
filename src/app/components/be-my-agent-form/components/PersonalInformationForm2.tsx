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
type Props = {};

const PersonalInformationForm2 = React.forwardRef<HTMLInputElement, Props>(
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
        <div>
          <h2 className={styles.title}>Personal Information</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
            <div className="form-col col-span-1 w-full">
              {/* <TextFieldInput
                type="text"
                name="title"
                label="Title"
                placeholder="Enter your Title"
                onChange={(e) =>
                  setAgentFormData({ ...agentFormData, title: e.target.value })
                }
              /> */}
              <CustomSelect
                label="Title"
                value={agentFormData?.title || "Mrs"}
                options={[
                  { name: "mr", value: "Mr" },
                  { name: "mrs", value: "Mrs" },
                ]}
                onChange={(value) => handleOnChange("title", value)}
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
                label="Gender"
                value={agentFormData?.gender || "Female"}
                options={[
                  { name: "male", value: "Male" },
                  { name: "female", value: "Female" },
                ]}
                onChange={(value) => handleOnChange("gender", value)}
              />
            </div>
            <div className="form-col col-span-1">
              <CustomDatePicker
                placeholderDate={agentFormData?.moveInDate}
                label="Desired Move In Date"
                onChange={(value) => handleOnChange("moveInDate", value)}
              />
              <SelectSearchInput
                data={LeaseData}
                placeholder={
                  `${agentFormData?.leaseTerm} months` || "Enter lease term"
                }
                label="Lease term"
                onChange={(value) => {
                  handleOnChange("leaseTerm", value);
                }}
              />
              <CustomSelect
                label="Marital Status"
                value={agentFormData?.maritalStatus || "Single"}
                options={[
                  { name: "single", value: "Single" },
                  { name: "married", value: "Married" },
                ]}
                onChange={(value) => handleOnChange("maritalStatus", value)}
              />
              <CustomDatePicker
                placeholderDate={agentFormData?.dateOfBirth}
                label="Date of Birth"
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    dateOfBirth: value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Screening & Other Details</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
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
              {agentFormData?.evictedBefore == "yes" && (
                <TextFieldInput
                  name="reasonForEviction"
                  type="text"
                  label="State Your Reasons"
                  placeholder="State your reasons here"
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
              {agentFormData?.convictedBefore == "yes" && (
                <TextFieldInput
                  name="reasonForConviction"
                  type="text"
                  label="State Your Reasons"
                  placeholder="State your reasons here"
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
