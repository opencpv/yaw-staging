import { styled } from "@stitches/react";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import TextFieldInput from "@/app/components/TextFieldInput";
import CountryInput from "@/components/__shared/CountryInput";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import FormSwitch from "@/app/contact/components/FormSwitch";
import CustomTextAreaInput from "@/app/components/CustomTextAreaInput";
import CustomSelect from "@/app/components/CustomSelect";
import { PreferedMethodOfContact } from "../../application-form/components/content";
import styles from "./index.module.css";
import { BeMyAgentFormType } from "./types";
type Props = {};

const ContactInformationForm = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [agentFormData, setagentFormData] = useLocalStorage<BeMyAgentFormType>("agent-form", {
      maritalStatus: "Single",
      leaseTerm: "12 months",
      gender: "Male",
    });

    const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
      useLocalStorage<any>("phoneNumberSelectedCountry");

    return (
      <Root className="text-[#6A6968] px-2  ">
        <div className="p2 h-full ">
          <p className={`${styles.title}  font-semibold`}>
            Contact Information
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 pt-7">
            <div className="col-span-3 lg:col-span-1 form-col">
              <TextFieldInput
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter your email address"
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    email: e.target.value,
                  })
                }
              />
              <CountryInput
                label="Country"
                initialValue={agentFormData?.country}
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    country: value,
                  })
                }
              />
              <TextFieldInput
                name="city"
                type="city"
                label="City"
                placeholder="Enter your city"
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    city: e.target.value,
                  })
                }
              />
              <PhoneNumberInputv2
                initialCountry={phoneNumberSelectedCountry}
                onChange2={(value) => setPhoneNumberSelectedCountry(value)}
                label="Phone"
                initialValue={agentFormData?.phoneNumber}
                name="phoneNumber"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    phoneNumber: value,
                  })
                }
              />

              <FormSwitch
                label="Available on whatsapp"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    availableOnWhatsapp: value,
                  })
                }
              />

              <CustomSelect
                options={PreferedMethodOfContact}
                placeholder={agentFormData?.preferredMethodOfContact || "Select"}
                label="Preferred Method Of Contact"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    preferredMethodOfContact: value,
                  })
                }
              />
            </div>
            <div className="col-span-3 lg:col-span-1 form-col">
              <TextFieldInput
                name="currentAddress1"
                type="text"
                label="current address 1"
                placeholder="Please provide your address"
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    currentAddress1: e.target.value,
                  })
                }
              />
              <TextFieldInput
                name="currentAddress2"
                type="text"
                label="current address 2 ( optional )"
                placeholder="Please provide your address"
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    currentAddress2: e.target.value,
                  })
                }
              />
              <CustomTextAreaInput
                label="Reason for Moving"
                placeholder={
                  agentFormData?.reasonsForMoving ||
                  "Please provide your reason(s)"
                }
                classes="h-[167px]"
                name="reasonForMoving"
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    reasonsForMoving: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </Root>
    );
  }
);

ContactInformationForm.displayName == "ContactInformationForm";

export default ContactInformationForm;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
