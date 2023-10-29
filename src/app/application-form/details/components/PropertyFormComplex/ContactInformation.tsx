import PhoneNumberInput from "@/components/__shared/PhoneInput";
import { LeaseData, PreferedMethodOfContact } from "../content";
import { styled } from "@stitches/react";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import SwiperSlideControls from "../SwiperSliderControls";
import axios from "axios";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PropertyDataType } from "../propertyDataType";
import TextFieldInput from "@/app/components/TextFieldInput ";
import CountryInput from "@/components/__shared/CountryInput";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import FormSwitch from "@/app/contact/components/FormSwitch";
import CustomTextAreaInput from "@/app/components/CustomTextAreaInput";
import CustomSelect from "@/app/components/CustomSelect";

type Props = {
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

const ContactInformationForm = React.forwardRef<HTMLInputElement, Props>(
  ({ setActiveIndex }, ref) => {
    const [propertyData, setPropertyData] =
      useLocalStorage<PropertyDataType>("property1");

    const [phoneNumberSelectedCountry, setPhoneNumberSelectedCountry] =
      useLocalStorage<any>("phoneNumberSelectedCountry");

    return (
      <Root className="text-[#6A6968] px-2  ">
        <div className="p2 h-full ">
          <p className="text-[1.5625rem] text-[#073B3A] font-semibold">
            Contact Information
          </p>
          <div className="grid grid-cols-3 gap-x-5 gap-y-5 pt-7">
            <div className="col-span-3 lg:col-span-1 form-col">
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
              <CountryInput
                label="Country"
                initialValue={propertyData?.country}
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
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
                  setPropertyData({
                    ...propertyData,
                    city: e.target.value,
                  })
                }
              />
              <PhoneNumberInputv2
                initialCountry={phoneNumberSelectedCountry}
                onChange2={(value) => setPhoneNumberSelectedCountry(value)}
                label="Phone"
                initialValue={propertyData?.phoneNumber}
                name="phoneNumber"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    phoneNumber: value,
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
            <div className="col-span-3 lg:col-span-1 form-col">
              <TextFieldInput
                name="currentAddress1"
                type="text"
                label="current address 1"
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
                label="current address 2 ( optional )"
                placeholder="Please provide your address"
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    currentAddress2: e.target.value,
                  })
                }
              />
              <CustomTextAreaInput
                label="Reason for Moving"
                placeholder={
                  propertyData?.reasonsForMoving ||
                  "Please provide your reason(s)"
                }
                classes="h-[167px]"
                name="reasonForMoving"
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    reasonsForMoving: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-span-3 lg:col-span-1 form-col">
              <CustomSelect
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
            </div>
          </div>
          <div className="mt-5 flex justify-start lg:justify-end w-full">
            <SwiperSlideControls ref={ref} setActiveIndex={setActiveIndex} />
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
