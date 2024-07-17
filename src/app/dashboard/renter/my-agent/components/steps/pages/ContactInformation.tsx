import { styled } from "@stitches/react";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import CountryInput from "@/components/__shared/ui/form/CountryInput";
import CustomTextAreaInput from "@/components/__shared/ui/form/CustomTextAreaInput";
import styles from "../../../index.module.css";
import OptionFilterTabs from "@/components/__shared/ui/OptionFilterTabs";
import InputPhoneNumber from "@/components/__shared/ui/form/InputPhoneNumber";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { E164Number } from "libphonenumber-js/core";
import { useField } from "formik";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";

type Props = {};

const ContactInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
      useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

    const { handlePhone, handleCountryChange, phone } =
      usePhoneInputDisclosure();

    const [field, meta, helpers] = useField("preferredMethodOfContact");

    return (
      <Root>
        <div className="h-full">
          <h2 className={`${styles.title}`}>
            Contact Information{" "}
            <span className="text-sm text-shade-300">*</span>
          </h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-2">
            <TextFieldInput
              name="currentAddress1"
              type="text"
              label="Current Address 1"
              placeholder="Please provide your street address"
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
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
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
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
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  city: e.target.value,
                })
              }
            />
            <CountryInput
              name="country"
              label="Country"
              onChange={(value) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
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
                  selectedKey={field.value}
                  onSelectionChange={(key) => {
                    helpers.setValue(key as any);
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      preferredMethodOfContact: key as any,
                    });
                  }}
                  radius="large"
                  padding="medium"
                  cursorAnimation
                />
              </div>
              {/* email */}
              <div className={field.value === "whatsapp" ? "hidden" : "block"}>
                <TextFieldInput
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) =>
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              {/* whatsapp */}
              <div
                className={field.value === "whatsapp" ? "block pt-2" : "hidden"}
              >
                <InputPhoneNumber
                  id=""
                  name="whatsApp"
                  value={phone}
                  onChange={(val) => {
                    handlePhone(val);
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      whatsApp: val as E164Number,
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
              name="purposeForMoving"
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  purposeForMoving: e.target.value,
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
