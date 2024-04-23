import React from "react";
import InputPhoneNumber from "./InputPhoneNumber";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import OptionFilterTabs from "../OptionFilterTabs";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import { useField } from "formik";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type Contact = "email" | "whatsapp";

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
};

const PreferredContactMethod = ({
  selectedKey = "email",
  onSelectionChange,
  hideEmail,
  onChangeEmail,
  onChangePhone,
  handleCountryChange,
  value,
  onChange,
  ...props
}: Props & React.HTMLProps<HTMLInputElement>) => {
  const [field, meta, helpers] = useField("preferredMethodOfContact");

  return (
    <>
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
          selectedKey={selectedKey}
          onSelectionChange={(key) => {
            helpers.setValue(key as any);
            onSelectionChange && onSelectionChange(key as Contact);
          }}
          radius="large"
          padding="medium"
          cursorAnimation
        />
      </div>
      {/* email */}
      <div
        className={
          selectedKey === "whatsapp" || hideEmail ? "hidden" : "block pt-2"
        }
      >
        <TextFieldInput
          name="email"
          type="email"
          placeholder="Enter your email address"
          onChange={onChangeEmail}
        />
      </div>
      {/* whatsapp */}
      <div
        className={
          selectedKey === "whatsapp" || hideEmail ? "block pt-2" : "hidden"
        }
      >
        <InputPhoneNumber
          id=""
          name="phoneNumber"
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
