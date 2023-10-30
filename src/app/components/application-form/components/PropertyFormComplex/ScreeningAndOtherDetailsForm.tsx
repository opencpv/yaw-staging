import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import { IdentificationType, LeaseData } from "../content";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import React, { Dispatch, SetStateAction, useState } from "react";
import { styled } from "@stitches/react";
import SwiperSlideControls from "../SwiperSliderControls";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import CustomSelect from "@/app/components/CustomSelect";
import CountryInput from "@/components/__shared/CountryInput";
import { useLocalStorage } from "@uidotdev/usehooks";
import { PropertyDataType } from "../propertyDataType";


type Props = {
  ref: any;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

const ScreeningAndOtherDetailsForm = React.forwardRef<HTMLInputElement, Props>(
  ({ setActiveIndex }, ref) => {
    const [selectedOption, setSelectedOption] = useState("option1");
    const handleOptionChange = (event: {
      target: { value: SetStateAction<string> };
    }) => {
      setSelectedOption(event.target.value);
    };

    const [propertyData, setPropertyData] = useLocalStorage<PropertyDataType>("property1");
    return (
      <Root className="p4 px-2">
        <p className="text-[1.5625rem]  text-[#073B3A] font-semibold ">
          Screening & Other Details
        </p>
        <div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-5 pt-7">
            <div className="col-span-3 lg:col-span-1 form-col">
              <CustomDatePicker
                placeholderDate={propertyData?.dateOfBirth}
                label="Date of Birth"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    dateOfBirth: value,
                  })
                }
              />
              <CustomSelect
                placeholder={
                  propertyData?.identificationType || "Please select"
                }
                options={IdentificationType}
                label="Identification Type"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    identificationType: value,
                  })
                }
              />
              <TextFieldInput
                name="idNumber"
                type="text"
                label="Government Issued Identification Number"
                placeholder={"Enter your identification number"}
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    idNumber: e.target.value,
                  })
                }
              />
              <CountryInput
                initialValue={propertyData?.government}
                placeholder="Select your government8"
                label="Government"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    government: value,
                  })
                }
              />
            </div>
            <div className="col-span-3 lg:col-span-1 form-col">
              <CustomRadioInput
                infoBubble={true}
                infoBubbleContent="data"
                defaultValue={propertyData?.evictedBefore}
                label={"Have you ever been evicted?"}
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    evictedBefore: value,
                  })
                }
              />
              {propertyData?.evictedBefore == "yes" && (
                <TextFieldInput
                  name="reasonForEviction"
                  type="text"
                  label="State Your Reasons"
                  placeholder="State your reasons here"
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      reasonForEviction: e.target.value,
                    })
                  }
                />
              )}
              <CustomRadioInput
                infoBubble={true}
                infoBubbleContent="data"
                defaultValue={propertyData?.convictedBefore}
                label={"Have you ever been convicted?"}
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    convictedBefore: value,
                  })
                }
              />
              {propertyData?.convictedBefore == "yes" && (
                <TextFieldInput
                  name="reasonForConviction"
                  type="text"
                  label="State Your Reasons"
                  placeholder="State your reasons here"
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      reasonForConviction: e.target.value,
                    })
                  }
                />
              )}
            </div>
            <div className="col-span-3 lg:col-span-1 form-col">
              <CustomRadioInput
                defaultValue={propertyData?.pets}
                label={"Do you have any pets?"}
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    pets: value,
                  })
                }
              />

              <CustomRadioInput
                defaultValue={propertyData?.vehicles}
                label={"Do you have any vehicles?"}
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    vehicles: value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-start lg:justify-end w-full">
          <SwiperSlideControls
            ref={ref}
            setActiveIndex={setActiveIndex}
            buttonLabel2="Submit Application"
          />
        </div>
      </Root>
    );
  }
);

ScreeningAndOtherDetailsForm.displayName == "ScreeningAndOtherDetailsForm";

export default ScreeningAndOtherDetailsForm;

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
