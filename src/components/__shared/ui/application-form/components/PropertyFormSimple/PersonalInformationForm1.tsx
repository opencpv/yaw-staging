import { SelectSearchInput } from "@/components/__shared/ui/form/SelectSearchInput";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { styled } from "@stitches/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  LeaseData,
  MostRecentEmployment,
  PreferedMethodOfContact,
} from "../content";
import CustomRadioInput from "@/components/__shared/ui/form/CustomRadioInput";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import SwiperSlideControls from "../SwiperSliderControls";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CustomDatePicker } from "@/components/__shared/ui/form/CustomDatePicker";
import Applicants from "../Applicants";
import CustomTextAreaInput from "@/components/__shared/ui/form/CustomTextAreaInput";
import { useLocalStorage } from "@uidotdev/usehooks";
import PhoneNumberInputv2 from "@/components/__shared/ui/form/PhoneInputv2";
import FormSwitch from "@/app/contact/components/FormSwitch";
import { PropertyDataType } from "../propertyDataType";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";

type Props = {
  ref: any;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
  formType?: "simple" | "complex";
};

const PersonalInformationForm1 = React.forwardRef<HTMLInputElement, Props>(
  ({ setActiveIndex, formType }, ref) => {
    const [propertyData, setPropertyData] = useLocalStorage<PropertyDataType>(
      "property1",
      {
        gender: "Male",
        leaseTerm: 12,
        maritalStatus: "single",
        mostRecentEmployment: "employed",
        preferredMethodOfContact: "phone",
        otherApplicants: false,
        availableOnWhatsapp: false,
      },
    );
    const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
      useLocalStorage<any>("phoneNumberSelectedCountry");

    return (
      <Root className="p1 px-2 ">
        <div className="grid grid-cols-3 gap-x-5 gap-y-5 ">
          <div className="form-col col-span-3 w-full lg:col-span-1">
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
            <TextFieldInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              onChange={(e) =>
                setPropertyData({
                  ...propertyData,
                  email: e.target.value,
                })
              }
            />
            <CustomSelect
              name="gender"
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
            <CustomSelect
              name="maritalStatus"
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
            <PhoneNumberInputv2
              initialCountry={phoneNumberSelectedCountry}
              onChange2={(value) => setPhoneNumberSelectedCountry(value)}
              label="Phone"
              initialValue={propertyData?.phone}
              name="phone"
              onChange={(value) =>
                setPropertyData({
                  ...propertyData,
                  phone: value,
                })
              }
            />

            <FormSwitch
              label="Available on whatsapp"
              onChange={(value) =>
                setPropertyData({
                  ...propertyData,
                  availableOnWhatsapp: value,
                })
              }
            />
          </div>
          <div className="form-col col-span-3  lg:col-span-1">
            <TextFieldInput
              name="currentAddress1"
              type="text"
              label="address 1"
              placeholder="Please provide your address"
              onChange={(e) =>
                setPropertyData({
                  ...propertyData,
                  currentAddress1: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="currentAddress2"
              type="text"
              label="address 2 ( optional )"
              placeholder="Please provide your address"
              onChange={(e) =>
                setPropertyData({
                  ...propertyData,
                  currentAddress2: e.target.value,
                })
              }
            />
            <CustomSelect
              name="mostRecentEmployment"
              options={MostRecentEmployment}
              placeholder={
                propertyData?.mostRecentEmployment || "Most Recent Employment"
              }
              label="Employment Status"
              onChange={(value) =>
                setPropertyData({
                  ...propertyData,
                  mostRecentEmployment: value,
                })
              }
            />
            <CustomSelect
              name="preferedMethodOfContact"
              options={PreferedMethodOfContact}
              placeholder={propertyData?.preferredMethodOfContact || "Select"}
              label="Preferred Method Of Contact"
              onChange={(value) =>
                setPropertyData({
                  ...propertyData,
                  preferredMethodOfContact: value,
                })
              }
            />
            <CustomDatePicker
              value={propertyData?.moveInDate as string}
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
                setPropertyData({ ...propertyData, leaseTerm: value });
              }}
            />
          </div>
          <div className="form-col col-span-3  lg:col-span-1">
            <CustomTextAreaInput
              label="Any Additional Information?"
              placeholder={"Message"}
              classes="h-[216px]"
              initialValues={propertyData?.additionalInformation}
              name="additionalInformation"
              onChange={(e) =>
                setPropertyData({
                  ...propertyData,
                  additionalInformation: e.target.value,
                })
              }
            />
            <ClientOnly>
              <Applicants />
            </ClientOnly>
          </div>
        </div>
      </Root>
    );
  },
);

PersonalInformationForm1.displayName == "PersonalInformationForm1";

export default PersonalInformationForm1;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
