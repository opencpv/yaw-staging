/* eslint-disable react/no-unescaped-entities */
import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import PhoneNumberInput from "@/components/__shared/PhoneInput";
import { LeaseData, MostRecentEmployment } from "../content";
import CustomRadioInput from "@/app/components/CustomRadioInput";
import { styled } from "@stitches/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import SwiperSlideControls from "../SwiperSliderControls";
import CountryInput from "@/components/__shared/CountryInput";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import CurrencyInput from "@/components/__shared/CurrencyInput";
import CustomSelect from "@/app/components/CustomSelect";
import { useLocalStorage } from "@uidotdev/usehooks";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { PropertyDataType } from "../propertyDataType";

type Props = {
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

const EmploymentInformationForm = React.forwardRef<HTMLInputElement, Props>(
  ({ setActiveIndex }, ref) => {
    const [propertyData, setPropertyData] = useLocalStorage<PropertyDataType>(
      "property1",
      {
        gender: "Male",
        leaseTerm: 12,
        maritalStatus: "single",
        identificationType: "Ghana Card",
        government: "Ghana",
        mostRecentEmployment: "employed",
        preferredMethodOfContact: "phone",
        monthlyIncomeCurrency: "GHS",
        otherApplicants: false,
        employersCountry: "Ghana",
        country: "Ghana",
        availableOnWhatsapp: false,
      },
    );
    const [selectedCurrency, setSelectedCurrency] =
      useLocalStorage<any>("selectedCurrency");

    const [
      employersPhoneNumberSelectedCountry,
      setEmployersPhoneNumberSelectedCountry,
    ] = useLocalStorage<any>("employersPhoneNumberSelectedCountry");

    const [isChecked, setIsChecked] = useState(true); // State to store the checkbox state

    return (
      <Root className="p3 px-2">
        <p className="text-[1.5625rem] font-semibold text-[#073B3A] ">
          Employment Information
        </p>
        <div className="pt-7">
          <div className="grid grid-cols-3 gap-x-5 gap-y-5">
            <div className="form-col col-span-3 lg:col-span-1">
              <CustomSelect
                options={MostRecentEmployment}
                placeholder={
                  propertyData?.mostRecentEmployment || "Most Recent Employment"
                }
                label="Employment Status"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    mostRecentEmployment: value,
                  })
                }
              />
              {propertyData?.mostRecentEmployment == "employed" && (
                <div>
                  <div className="text-shade200] flex items-center justify-start gap-3">
                    <input
                      type="checkbox"
                      name="currentlyEmployed"
                      checked={propertyData?.currentlyEmployed == "yes"}
                      onChange={(e) => {
                        setIsChecked(!isChecked);
                        setPropertyData({
                          ...propertyData,
                          currentlyEmployed: isChecked ? "yes" : "no",
                        });
                      }}
                      className="bg-white "
                    />
                    <p className="text-[#737373]">Current</p>
                  </div>{" "}
                  <div className="mt-2 flex gap-3">
                    <CustomDatePicker
                      placeholderDate={propertyData?.employmentStartDate}
                      label="Start Date"
                      onChange={(value) =>
                        setPropertyData({
                          ...propertyData,
                          employmentStartDate: value,
                        })
                      }
                    />
                    <CustomDatePicker
                      label="End Date"
                      placeholderDate={propertyData?.employmentEndDate}
                      disabled={propertyData?.currentlyEmployed && true}
                      onChange={(value) =>
                        setPropertyData({
                          ...propertyData,
                          employmentEndDate: value,
                        })
                      }
                    />
                  </div>
                </div>
              )}
              <TextFieldInput
                name="employer"
                type="text"
                label="Employer or Income Source"
                placeholder={propertyData?.employer || "Enter employer name"}
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    employer: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-col col-span-3 lg:col-span-1">
              <CountryInput
                initialValue={propertyData?.employersCountry}
                label="Employer's Country"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    employersCountry: value,
                  })
                }
              />
              <TextFieldInput
                name="employerAddress1"
                type="text"
                label="Address 1"
                placeholder={"Please provide employer's address"}
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    employerAddress1: e.target.value,
                  })
                }
              />
              <TextFieldInput
                name="employerAddress2"
                type="text"
                label="Address 2 ( optional ) "
                placeholder={
                  propertyData?.employerAddress2 ||
                  "Please provide employer's address"
                }
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    employerAddress2: e.target.value,
                  })
                }
              />
              <PhoneNumberInputv2
                initialCountry={employersPhoneNumberSelectedCountry}
                onChange2={(value) =>
                  setEmployersPhoneNumberSelectedCountry(value)
                }
                label="Phone"
                initialValue={propertyData?.phoneNumber}
                name="phoneNumber"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    employerPhoneNumber: value,
                  })
                }
              />
            </div>
            <div className="form-col col-span-3 lg:col-span-1">
              <TextFieldInput
                name="jobTitle"
                type="text"
                label="Job Title"
                placeholder={propertyData?.jobTitle || "Enter your job title"}
                onChange={(e) =>
                  setPropertyData({
                    ...propertyData,
                    jobTitle: e.target.value,
                  })
                }
              />
              <CurrencyInput
                initialCurrency={selectedCurrency}
                initialValue={propertyData?.monthlyIncome}
                infoBubble
                placeholder="Select"
                label="Monthly Income"
                onChange={(value) =>
                  setPropertyData({
                    ...propertyData,
                    monthlyIncome: value,
                  })
                }
                onChange2={(value) =>
                  setPropertyData({
                    ...propertyData,
                    monthlyIncomeCurrency: value,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex w-full justify-start lg:justify-end">
          <SwiperSlideControls ref={ref} setActiveIndex={setActiveIndex} />
        </div>
      </Root>
    );
  },
);

EmploymentInformationForm.displayName = "EmploymentInformationForm";

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export default EmploymentInformationForm;
