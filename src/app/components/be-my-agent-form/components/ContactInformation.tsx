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
import OptionFilterTabs from "@/components/__shared/OptionFilterTabs";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type Props = {};

const ContactInformationForm = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [agentFormData, setAgentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form");

    const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
      useLocalStorage<any>("phoneNumberSelectedCountry");

    const [emailOrWhatsApp, setEmailOrWhatsApp] = useState<
      "email" | "whatsapp"
    >("email");

    const { handlePhone, handleCountryChange } = usePhoneInputDisclosure();

    return (
      <Root className="px-2 text-[#6A6968]">
        <div className="h-full p-2">
          <h2 className={`${styles.title}`}>Contact Information</h2>
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 pt-7 lg:grid-cols-2">
            <TextFieldInput
              name="currentAddress1"
              type="text"
              label="current address 1"
              placeholder="Please provide your street address"
              onChange={(e) =>
                setAgentFormData({
                  ...agentFormData,
                  currentAddress1: e.target.value,
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
            <TextFieldInput
              name="currentAddress2"
              type="text"
              label="current address 2 ( optional )"
              placeholder="Apartment No. or other relevant information"
              onChange={(e) =>
                setAgentFormData({
                  ...agentFormData,
                  currentAddress2: e.target.value,
                })
              }
            />
            <CountryInput
              label="Country"
              initialValue={agentFormData?.country}
              onChange={(value) =>
                setAgentFormData({
                  ...agentFormData,
                  country: value,
                })
              }
            />
            <div className="space-y-3">
              <label>Preferred Method of Contact</label>
              <div className="w-fit rounded-full bg-primary-600/5 p-2">
                <OptionFilterTabs
                  options={["Email", "WhatsApp"]}
                  selectedKey={emailOrWhatsApp}
                  onSelectionChange={(key) => setEmailOrWhatsApp(key as any)}
                  radius="large"
                  padding="medium"
                  cursorAnimation
                />
              </div>
              {/* email */}
              <div
                className={emailOrWhatsApp === "whatsapp" ? "hidden" : "block"}
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
                  emailOrWhatsApp === "whatsapp" ? "block pt-2" : "hidden"
                }
              >
                <InputPhoneNumber
                  id=""
                  name="phoneNumber"
                  value={agentFormData?.phoneNumber}
                  onChange={handlePhone}
                  onCountryChange={handleCountryChange}
                />
              </div>
            </div>
            {/* <PhoneNumberInputv2
              initialCountry={phoneNumberSelectedCountry}
              onChange2={(value) => setPhoneNumberSelectedCountry(value)}
              label="Phone"
              initialValue={agentFormData?.phoneNumber}
              name="phoneNumber"
              onChange={(value) =>
                setAgentFormData({
                  ...agentFormData,
                  phoneNumber: value,
                })
              }
            /> */}

            {/* <FormSwitch
                label="Available on whatsapp"
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    availableOnWhatsapp: value,
                  })
                }
              /> */}

            {/* <CustomSelect
                options={PreferedMethodOfContact}
                placeholder={
                  agentFormData?.preferredMethodOfContact || "Select"
                }
                label="Preferred Method Of Contact"
                onChange={(value) =>
                  setAgentFormData({
                    ...agentFormData,
                    preferredMethodOfContact: value,
                  })
                }
              /> */}
            <CustomTextAreaInput
              label="Reason for Moving"
              placeholder={
                agentFormData?.reasonsForMoving ||
                "Please provide your reason (s)"
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

ContactInformationForm.displayName == "ContactInformationForm";

export default ContactInformationForm;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
