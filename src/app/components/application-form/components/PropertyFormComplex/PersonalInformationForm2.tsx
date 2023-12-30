import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import { openSans } from "@/styles/font";
import { styled } from "@stitches/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LeaseData } from "../content";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import CustomSelect from "@/app/components/CustomSelect";
import SwiperSlideControls from "../SwiperSliderControls";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import Applicants from "../Applicants";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PropertyDataType } from "../propertyDataType";

type Props = {
  ref: any;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  formType?: "simple" | "complex";
};

const PersonalInformationForm2 = React.forwardRef<HTMLInputElement, Props>(
  ({ setActiveIndex, formType }, ref) => {
    const [propertyData, setPropertyData] =
      useLocalStorage<PropertyDataType>("property1");

    return (
      <Root className="p1 px-2">
        <div>
          <p className="text-[1.5625rem] text-[#073B3A] font-semibold">
            Personal Information
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5 pt-7">
          <div className="col-span-3 lg:col-span-1 form-col w-full">
            <TextFieldInput
              type="text"
              name="title"
              label="Title"
              placeholder="Enter your Title"
              onChange={(e) =>
                setPropertyData({ ...propertyData, title: e.target.value })
              }
            />
            <TextFieldInput
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              onChange={(e) =>
                setPropertyData({ ...propertyData, firstName: e.target.value })
              }
            />
            <TextFieldInput
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              onChange={(e) =>
                setPropertyData({ ...propertyData, lastName: e.target.value })
              }
            />
            <CustomSelect
              placeholder={propertyData?.gender}
              label="Gender"
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
              ]}
              onChange={(value) =>
                setPropertyData({ ...propertyData, gender: value })
              }
            />
          </div>
          <div className="col-span-3 lg:col-span-1  form-col">
            <CustomDatePicker
              placeholderDate={propertyData?.moveInDate}
              label="Desired Move In Date"
              onChange={(value) =>
                setPropertyData({ ...propertyData, moveInDate: value })
              }
            />
            <SelectSearchInput
              data={LeaseData}
              placeholder={
                `${propertyData?.leaseTerm} months` || "Enter lease term"
              }
              label="Lease term"
              onChange={(value) => {
                console.log(value);
                setPropertyData({ ...propertyData, leaseTerm: value });
              }}
            />
            <CustomSelect
              label="Marital Status"
              placeholder={
                propertyData?.maritalStatus || "Select marital status"
              }
              options={[
                { name: "Single", value: "single" },
                { name: "married", value: "married" },
              ]}
              onChange={(value) =>
                setPropertyData({ ...propertyData, maritalStatus: value })
              }
            />
          </div>
          <Applicants />
        </div>
        {formType == "complex" && (
          <div className="mt-5 flex justify-start lg:justify-end w-full">
            <SwiperSlideControls
              ref={ref}
              setActiveIndex={setActiveIndex}
              buttonLabel1="Cancel"
            />
          </div>
        )}
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
