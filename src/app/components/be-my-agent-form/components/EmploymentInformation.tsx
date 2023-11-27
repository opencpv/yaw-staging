/* eslint-disable react/no-unescaped-entities */
import { SelectSearchInput } from "@/app/components/SelectSearchInput";
import TextFieldInput from "@/app/components/TextFieldInput";
import PhoneNumberInput from "@/components/__shared/PhoneInput";

import CustomRadioInput from "@/app/components/CustomRadioInput";
import { styled } from "@stitches/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import CountryInput from "@/components/__shared/CountryInput";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import CurrencyInput from "@/components/__shared/CurrencyInput";
import CustomSelect from "@/app/components/CustomSelect";
import { useLocalStorage } from "@uidotdev/usehooks";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { MostRecentEmployment } from "../../application-form/components/content";
import { BeMyAgentFormType } from "./types";
import styles from './index.module.css'

type Props = {};

const EmploymentInformationForm = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [agentFormData, setagentFormData] =
      useLocalStorage<BeMyAgentFormType>("agent-form", {
        maritalStatus: "Single",
        leaseTerm: "12 months",
        gender: "Male",
      });
    const [selectedCurrency, setSelectedCurrency] =
      useLocalStorage<any>("selectedCurrency");

    const [
      employersPhoneNumberSelectedCountry,
      setEmployersPhoneNumberSelectedCountry,
    ] = useLocalStorage<any>("employersPhoneNumberSelectedCountry");

    const [isChecked, setIsChecked] = useState(true); // State to store the checkbox state

    return (
      <Root className="p3 px-2">
          <p className={`${styles.title}  font-semibold`}>
          Employment Information
        </p>
        <div className="pt-7">
          <div className="grid grid-cols-2 gap-x-5 gap-y-5">
            <div className="col-span-3 lg:col-span-1 form-col">
              <CustomSelect
                options={MostRecentEmployment}
                placeholder={
                  agentFormData?.mostRecentEmployment ||
                  "Most Recent Employment"
                }
                label="Employment Status"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    mostRecentEmployment: value,
                  })
                }
              />
              {agentFormData?.mostRecentEmployment == "employed" && (
                  <div className="flex gap-3 items-center justify-start text-shade200] mt-[64px]">
                    <input
                      type="checkbox"
                      name="currentlyEmployed"
                      checked={agentFormData?.currentlyEmployed == "yes"}
                      onChange={(e) => {
                        setIsChecked(!isChecked);
                        setagentFormData({
                          ...agentFormData,
                          currentlyEmployed: isChecked ? "yes" : "no",
                        });
                      }}
                      className="bg-white "
                    />
                    <p className="text-[#737373]">Current</p>
                  </div>
                  )}

                  {agentFormData?.mostRecentEmployment == "employed" &&(
                  <div className="flex gap-3 mt-2">
                    <CustomDatePicker
                      placeholderDate={agentFormData?.employmentStartDate}
                      label="Start Date"
                      onChange={(value) =>
                        setagentFormData({
                          ...agentFormData,
                          employmentStartDate: value,
                        })
                      }
                    />
                    <CustomDatePicker
                      label="End Date"
                      placeholderDate={agentFormData?.employmentEndDate}
                      disabled={agentFormData?.currentlyEmployed && true}
                      onChange={(value) =>
                        setagentFormData({
                          ...agentFormData,
                          employmentEndDate: value,
                        })
                      }
                    />
                </div>
              )}
              <TextFieldInput
                name="employer"
                type="text"
                label="Employer / source of Incone"
                placeholder={agentFormData?.employer || "Enter employer name"}
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    employer: e.target.value,
                  })
                }
              />
              <CountryInput
                initialValue={agentFormData?.employersCountry}
                label="Employer's Country"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    employersCountry: value,
                  })
                }
              />
            </div>

            <div className="col-span-3 lg:col-span-1 form-col">
              <TextFieldInput
                name="employerAddress1"
                type="text"
                label="Address 1"
                placeholder={"Please provide employer's address"}
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    employerAddress1: e.target.value,
                  })
                }
              />
              <TextFieldInput
                name="employerAddress2"
                type="text"
                label="Address 2 ( optional ) "
                placeholder={
                  agentFormData?.employerAddress2 ||
                  "Please provide employer's address"
                }
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
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
                initialValue={agentFormData?.phoneNumber}
                name="phoneNumber"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    employerPhoneNumber: value,
                  })
                }
              />
              <TextFieldInput
                name="jobTitle"
                type="text"
                label="Job Title"
                placeholder={agentFormData?.jobTitle || "Enter your job title"}
                onChange={(e) =>
                  setagentFormData({
                    ...agentFormData,
                    jobTitle: e.target.value,
                  })
                }
              />
              <CurrencyInput
                initialCurrency={selectedCurrency}
                initialValue={agentFormData?.monthlyIncome}
                infoBubble
                placeholder="Select"
                label="Monthly Income"
                onChange={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    monthlyIncome: value,
                  })
                }
                onChange2={(value) =>
                  setagentFormData({
                    ...agentFormData,
                    monthlyIncomeCurrency: value,
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

EmploymentInformationForm.displayName = "EmploymentInformationForm";

const Root = styled("div", {
  ".form-col": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export default EmploymentInformationForm;
