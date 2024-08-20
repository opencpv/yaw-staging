import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import CustomRadioInput from "@/components/__shared/ui/form/CustomRadioInput";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import CallOut from "@/components/__shared/ui/CallOut";
import { cn } from "@/lib/utils";

type Props = {};

const LeaseHolderInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
      useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

    const handleOnChange = (name: any, value: any) => {
      setBeMyAgentCreationSteps({
        ...BeMyAgentCreationSteps,
        [name]: value,
      });
    };

    return (
      <div className={style.fieldsSectionWrapper}>
        {/* Lease Holder Information */}
        <div>
          <div className={style.titleCallOutContainer}>
            <h2 className={`${style.titleNoMargin}`}>
              Lease Holder Information <span className={style.asterisk}>*</span>
            </h2>
            <CallOut content="You may select more than one response" />
          </div>
          <div className={style.wrappingFieldsGrid}>
            <CustomSelect
              name="title"
              label="Title"
              options={[
                { name: "mr.", value: "Mr." },
                { name: "mrs.", value: "Mrs." },
                { name: "miss", value: "Miss" },
              ]}
              onChange={(value) => handleOnChange("title", value)}
            />
            <CustomSelect
              name="age"
              label="Age"
              options={[
                { name: "12 - 17", value: "12 - 17" },
                { name: "18 - 44", value: "18 - 44" },
                { name: "45 - 74", value: "45 - 74" },
              ]}
              onChange={(value) => handleOnChange("age", value)}
            />
            <TextFieldInput
              type="text"
              name="first_name"
              label="First Name"
              placeholder="Enter your first name"
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  first_name: e.target.value,
                })
              }
            />
            <TextFieldInput
              type="text"
              name="last_name"
              label="Last Name"
              placeholder="Enter your last name"
              onChange={(e) =>
                setBeMyAgentCreationSteps({
                  ...BeMyAgentCreationSteps,
                  last_name: e.target.value,
                })
              }
            />
            <CustomSelect
              name="marital_status"
              label="Marital Status"
              options={[
                { name: "single", value: "Single" },
                { name: "married", value: "Married" },
              ]}
              onChange={(value) => handleOnChange("marital_status", value)}
            />
            <CustomSelect
              name="tenants"
              label="Number of Tenants"
              options={[
                { name: "1 - 5", value: "1 - 5" },
                { name: "6 - 10", value: "6 - 10" },
                { name: "10+", value: "10+" },
              ]}
              onChange={(value) => handleOnChange("tenants", value)}
            />
          </div>
        </div>
        {/* Screening & Other Details */}
        <div>
          <h2 className={style.title}>Screening & Other Details</h2>
          <div className={style.wrappingFieldsGrid}>
            <div className={cn("flex flex-col", style.fieldsBlockGap)}>
              <CustomRadioInput
                name="evicted"
                options={["Yes", "No"]}
                label={"Have you ever been evicted?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    evicted: value,
                  })
                }
              />
              {/* {BeMyAgentCreationSteps?.evicted === true && (
                <CustomTextAreaInput
                  label="State Your Reasons"
                  placeholder={"State your reasons here"}
                  classes="h-[52px]"
                  name="reasonForEviction"
                  onChange={(e) =>
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      reasonForEviction: e.target.value,
                    })
                  }
                />
              )}*/}
              <CustomRadioInput
                name="convicted"
                options={["Yes", "No"]}
                label={"Have you ever been convicted?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    convicted: value,
                  })
                }
              />
              {/* {BeMyAgentCreationSteps?.convicted === true && (
                <CustomTextAreaInput
                  label="State Your Reasons"
                  placeholder={"State your reasons here"}
                  classes="h-[52px]"
                  name="reasonForConviction"
                  onChange={(e) =>
                    setBeMyAgentCreationSteps({
                      ...BeMyAgentCreationSteps,
                      reasonForConviction: e.target.value,
                    })
                  }
                />
              )} */}
            </div>
            <div className={cn("flex flex-col", style.fieldsBlockGap)}>
              <CustomRadioInput
                name="has_pets"
                options={["Yes", "No"]}
                label={"Do you have any pets?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    has_pets: value,
                  })
                }
              />
              <CustomRadioInput
                name="has_vehicles"
                options={["Yes", "No"]}
                label={"Do you have any vehicles?"}
                onChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    has_vehicles: value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

LeaseHolderInformation.displayName == "LeaseHolderInformation";

export default LeaseHolderInformation;
