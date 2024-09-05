import React from "react";
import PhoneNumberInput from "@/components/__shared/ui/form/phone-number-input";
import { Input } from "@/components/__shared/ui/form/input";
import { Tabs } from "@/components/__shared/ui/tabs/tabs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { useField } from "formik";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import { useContactForm } from "./hooks/useContactForm";

type Contact = "Email" | "WhatsApp";

type Props = {
  selectedKey?: Contact;
  handleCountryChange: (country: CountryCode | undefined) => void;
};

const PreferredContactMethod = ({
  handleCountryChange,
}: Props & React.HTMLProps<HTMLInputElement>) => {
  const [field, meta, helpers] = useField("preferredContactMethod");
  const { handleSessionChange, contactFormSession } = useContactForm();
  const selectedKey =
    (contactFormSession.preferredContactMethod as Contact) || field.value;

  return (
    <>
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
          selectedKey={selectedKey}
          onSelectionChange={(key) => {
            helpers.setValue(key as any);
            handleSessionChange("preferredContactMethod", key);
          }}
          variant="rounded"
        />
      </div>
      {/* email */}
      <div className={selectedKey === "WhatsApp" ? "hidden" : "block pt-2"}>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            handleSessionChange("email", e.target.value);
          }}
        />
      </div>
      {/* whatsapp */}
      <div className={selectedKey === "WhatsApp" ? "block pt-2" : "hidden"}>
        <PhoneNumberInput
          name="phone"
          onChange={(value) => {
            handleSessionChange("phone", value as E164Number);
          }}
          onCountryChange={handleCountryChange}
        />
      </div>
    </>
  );
};

export default PreferredContactMethod;
