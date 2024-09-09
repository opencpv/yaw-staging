import React from "react";
import PhoneNumberInput from "@/components/__shared/ui/form/phone-number-input";
import { Input } from "@/components/__shared/ui/form/input";
import { Tabs } from "@/components/__shared/ui/tabs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { FieldHelperProps, FieldInputProps, useFormikContext } from "formik";
import { E164Number } from "libphonenumber-js/core";
import { useContactForm } from "./hooks/useContactForm";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@/lib/utils";

type Contact = "Email" | "WhatsApp";

type Props = {
  name: string;
  placeholder: string;
  className?: string;
};

/**
 * A switch component that allows users to select their preferred contact method.
 */
const ContactMethodSwitch = ({ name, placeholder, className }: Props) => {
  const formikContext = useFormikContext();
  let helpers: FieldHelperProps<any> | undefined;
  let field: FieldInputProps<any> | undefined;

  if (formikContext) {
    field = formikContext.getFieldProps(name as string);
    helpers = formikContext.getFieldHelpers(name as string);
  }
  const { handleSessionChange, contactFormSession } = useContactForm();
  const selectedKey =
    (contactFormSession.preferredContactMethod as Contact) || field?.value;
  const { handleCountryChange } = usePhoneInputDisclosure();

  return (
    <>
      <div className={cn("w-fit rounded-full bg-primary-600/5 p-2", className)}>
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
            helpers?.setValue(key);
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
          placeholder={"WhatsApp" || placeholder}
        />
      </div>
    </>
  );
};

export default ContactMethodSwitch;
