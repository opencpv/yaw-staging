import { styled } from "@stitches/react";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Input } from "@/components/__shared/ui/form/input";
import CountryInput from "@/components/__shared/ui/form/CountryInput";
import { Textarea } from "@/components/__shared/ui/form/Textarea";
import style from "../../../index.module.css";
import { Tabs } from "@/components/__shared/ui/tabs";
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

    const [field, meta, helpers] = useField("preferred_contact_method");

    return (
      <Root>
        <div className="h-full">
          <h2 className={`${style.title}`}>
            Contact Information <span className={style.asterisk}>*</span>
          </h2>
          <div className={style.wrappingFieldsGrid}>
            <Input
              name="current_address_1"
              type="text"
              label="Current Address 1"
              placeholder="Please provide your street address"
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  current_address_1: e.target.value,
                })
              }
            />
            <Input
              name="current_address_2"
              type="text"
              label="Current Address 2 ( optional )"
              placeholder="Eg: Apartment No."
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  current_address_2: e.target.value,
                })
              }
            />
            <Input
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
              <label className="text-shade-300">
                Preferred Method of Contact
              </label>
              <div className="w-fit rounded-full bg-primary-600/5 p-2">
                <Tabs
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
                      preferred_contact_method: key as any,
                    });
                  }}
                />
              </div>
              {/* email */}
              <div
                className={
                  field.value?.toLowerCase() === "whatsapp" ? "hidden" : "block"
                }
              >
                <Input
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
                className={
                  field.value?.toLowerCase() === "whatsapp"
                    ? "block pt-2"
                    : "hidden"
                }
              >
                <InputPhoneNumber
                  id=""
                  name="whatsApp"
                  value={phone}
                  onChange={(val) => {
                    handlePhone(val);
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      phone: val as E164Number,
                    });
                  }}
                  onCountryChange={handleCountryChange}
                />
              </div>
            </div>
            <Textarea
              name="moving_reason"
              label="Purpose for Moving"
              placeholder={
                "Why are you moving and what are you looking for in your new place?"
              }
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  moving_reason: e.target.value,
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
