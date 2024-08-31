import React from "react";
import InputPhoneNumber from "./InputPhoneNumber";
import { Input } from "@/components/__shared/ui/form/input";
import { Tabs } from "@/components/__shared/ui/tabs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { useField } from "formik";
import { E164Number, CountryCode } from "libphonenumber-js/core";

type Contact = "Email" | "WhatsApp";

type Props = {
  selectedKey: Contact;
  handleCountryChange: (country: CountryCode | undefined) => void;
  /** handler for the pill */
  hideEmail?: boolean;
  value: string | number | readonly string[] | E164Number;
  onChange: ((value: E164Number | undefined) => void) &
    React.FormEventHandler<HTMLInputElement>;
  onSelectionChange?: (key: Contact) => void;
  /** handler for the email text input */
  onChangeEmail?: ((value: any) => void) &
    React.ChangeEventHandler<HTMLInputElement>;
  onChangePhone?:
    | (((value: E164Number | undefined) => void) &
        React.FormEventHandler<HTMLInputElement>)
    | undefined;
  emailValue?: string;
};

const PreferredContactMethod = ({
  selectedKey = "Email",
  onSelectionChange,
  hideEmail,
  onChangeEmail,
  onChangePhone,
  handleCountryChange,
  value,
  emailValue,
  onChange,
  ...props
}: Props & React.HTMLProps<HTMLInputElement>) => {
  const [field, meta, helpers] = useField("preferredMethodOfContact");

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
            onSelectionChange?.(key as Contact);
          }}
          variant="rounded"
        />
      </div>
      {/* email */}
      <div
        className={
          selectedKey === "WhatsApp" || hideEmail ? "hidden" : "block pt-2"
        }
      >
        <Input
          value={emailValue as string}
          name="email"
          type="email"
          placeholder="Enter your email address"
          onChange={onChangeEmail}
        />
      </div>
      {/* whatsapp */}
      <div
        className={
          selectedKey === "WhatsApp" || hideEmail ? "block pt-2" : "hidden"
        }
      >
        <InputPhoneNumber
          name="phone"
          onChange={onChange}
          onCountryChange={handleCountryChange}
          {...props}
          value={value as E164Number}
        />
      </div>
    </>
  );
};

export default PreferredContactMethod;
