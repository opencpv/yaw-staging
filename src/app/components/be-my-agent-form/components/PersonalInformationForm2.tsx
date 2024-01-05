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
    const [agentFormData, setagentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form");

    return (
      <Root>
        <div>
          <p className={`${styles.title}  font-semibold`}>
            Personal Information
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-5 pt-7">
          <div className="col-span-3 lg:col-span-1 form-col w-full">
            <TextFieldInput
              type="text"
              name="title"
              label="Title"
              placeholder="Enter your Title"
              onChange={(e) =>
                setagentFormData({ ...agentFormData, title: e.target.value })
              }
            />
            <TextFieldInput
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              onChange={(e) =>
                setagentFormData({
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
                setagentFormData({ ...agentFormData, lastName: e.target.value })
              }
            />
            <CustomSelect
              placeholder={agentFormData?.gender}
              label="Gender"
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
              ]}
              onChange={(value) =>
                setagentFormData({ ...agentFormData, gender: value })
              }
            />
          </div>
          <div className="col-span-3 lg:col-span-1  form-col">
            <CustomDatePicker
              placeholderDate={agentFormData?.moveInDate}
              label="Desired Move In Date"
              onChange={(value) =>
                setagentFormData({ ...agentFormData, moveInDate: value })
              }
            />
            <SelectSearchInput
              data={LeaseData}
              placeholder={
                `${agentFormData?.leaseTerm} months` || "Enter lease term"
              }
              label="Lease term"
              onChange={(value) => {
                console.log(value);
                setagentFormData({ ...agentFormData, leaseTerm: value });
              }}
            />
            <CustomSelect
              label="Marital Status"
              placeholder={
                agentFormData?.maritalStatus || "Select marital status"
              }
              options={[
                { name: "Single", value: "single" },
                { name: "married", value: "married" },
              ]}
              onChange={(value) =>
                setagentFormData({ ...agentFormData, maritalStatus: value })
              }
            />
          </div>
        </div>
      </Root>
    );
  }
);

PersonalInformationForm2.displayName == "PersonalInformationForm2";

export default PersonalInformationForm2;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
