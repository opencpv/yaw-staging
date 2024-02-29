import { styled } from "@stitches/react";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import TextFieldInput from "@/app/components/TextFieldInput";
import CountryInput from "@/components/__shared/CountryInput";
import CustomTextAreaInput from "@/app/components/CustomTextAreaInput";
import styles from "../../index.module.css";
import { BeMyAgentFormType } from "../types";
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { E164Number } from "libphonenumber-js/core";
import { useField } from "formik";

type Props = {};

const ContactInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [agentFormData, setAgentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form");

    const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
      useLocalStorage<any>("phoneNumberSelectedCountry");

    const { handlePhone, handleCountryChange, phone } =
      usePhoneInputDisclosure();

    const [field, meta, helpers] = useField("preferredMethodOfContact");

    return (
      <Root>
        <div className="h-full">
          <h2 className={`${styles.title}`}>Contact Information</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
            <TextFieldInput
              name="currentAddress1"
              type="text"
              label="Current Address 1"
              placeholder="Please provide your street address"
              onChange={(e) =>
                setAgentFormData({
                  ...agentFormData,
                  currentAddress1: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="currentAddress2"
              type="text"
              label="Current Address 2 ( optional )"
              placeholder="Eg: Apartment No."
              onChange={(e) =>
                setAgentFormData({
                  ...agentFormData,
                  currentAddress2: e.target.value,
                })
              }
            />
            <TextFieldInput
              name="city"
              type="city"
              label="City"
              placeholder="Enter your city"
              onChange={(e) =>
                setAgentFormData({
                  ...agentFormData,
                  city: e.target.value,
                })
              }
            />
            <CountryInput
              name="country"
              label="Country"
              value={agentFormData?.country}
              onChange={(value) =>
                setAgentFormData({
                  ...agentFormData,
                  country: value,
                })
              }
            />
            <div className="space-y-3">
              <label className="text-[#6A6968]">
                Preferred Method of Contact
              </label>
              <div className="w-fit rounded-full bg-primary-600/5 p-2">
                <OptionFilterTabs
                  options={[
                    {
                      label: "Email",
                      icon: <MdOutlineMailOutline />,
                    },
                    {
                      label: "WhatsApp",
                      icon: <MdOutlineWhatsapp />,
                    },
                  ]}
                  selectedKey={agentFormData?.preferredMethodOfContact}
                  onSelectionChange={(key) => {
                    helpers.setValue(key as any);
                    setAgentFormData({
                      ...agentFormData,
                      preferredMethodOfContact: key as any,
                    });
                  }}
                  radius="large"
                  padding="medium"
                  cursorAnimation
                />
              </div>
              {/* email */}
              <div
                className={
                  agentFormData?.preferredMethodOfContact === "whatsapp"
                    ? "hidden"
                    : "block"
                }
              >
                <TextFieldInput
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) =>
                    setAgentFormData({
                      ...agentFormData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              {/* whatsapp */}
              <div
                className={
                  agentFormData?.preferredMethodOfContact === "whatsapp"
                    ? "block pt-2"
                    : "hidden"
                }
              >
                <InputPhoneNumber
                  id=""
                  name="phoneNumber"
                  value={agentFormData?.phoneNumber}
                  onChange={(val) => {
                    handlePhone(val);
                    setAgentFormData({
                      ...agentFormData,
                      phoneNumber: val as E164Number,
                    });
                  }}
                  onCountryChange={handleCountryChange}
                />
              </div>
            </div>
            <CustomTextAreaInput
              label="Purpose for Moving"
              placeholder={
                "Why are you moving and what are you looking for in your new place?"
              }
              classes="h-[167px]"
              name="reasonForMoving"
              onChange={(e) =>
                setAgentFormData({
                  ...agentFormData,
                  reasonsForMoving: e.target.value,
                })
              }
            />
          </div>
        </div>
      </Root>
    );
  },
);

ContactInformation.displayName == "ContactInformation";

export default ContactInformation;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
