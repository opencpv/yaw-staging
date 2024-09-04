import { Input } from "@/components/__shared/ui/form/input";
import { RadioInput } from "@/components/__shared/ui/form/radio-input";
import { SelectInput } from "@/components/__shared/ui/form/select";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import Callout from "@/components/__shared/ui/callout/callout";
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
            <Callout content="You may select more than one response" />
          </div>
          <div className={style.wrappingFieldsGrid}>
            <SelectInput
              name="title"
              label="Title"
              options={["Mr.", "Mrs.", "Miss"]}
              onChange={(value) => handleOnChange("title", value)}
            />
            <SelectInput
              name="age"
              label="Age"
              options={["12 - 17", "18 - 44", "45 - 74"]}
              onChange={(value) => handleOnChange("age", value)}
            />
            <Input
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
            <Input
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
            <SelectInput
              name="marital_status"
              label="Marital Status"
              options={["Single", "Married"]}
              onChange={(value) => handleOnChange("marital_status", value)}
            />
            <SelectInput
              name="tenants"
              label="Number of Tenants"
              options={["1 - 5", "6 - 10", "10+"]}
              onChange={(value) => handleOnChange("tenants", value)}
            />
          </div>
        </div>
        {/* Screening & Other Details */}
        <div>
          <h2 className={style.title}>Screening & Other Details</h2>
          <div className={style.wrappingFieldsGrid}>
            <div className={cn("flex flex-col", style.fieldsBlockGap)}>
              <RadioInput
                name="evicted"
                options={["Yes", "No"]}
                label={"Have you ever been evicted?"}
                onValueChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    evicted: value,
                  })
                }
              />
              {/* {BeMyAgentCreationSteps?.evicted === true && (
                <Textarea
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
              <RadioInput
                name="convicted"
                options={["Yes", "No"]}
                label={"Have you ever been convicted?"}
                onValueChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    convicted: value,
                  })
                }
              />
              {/* {BeMyAgentCreationSteps?.convicted === true && (
                <Textarea
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
              <RadioInput
                name="has_pets"
                options={["Yes", "No"]}
                label={"Do you have any pets?"}
                onValueChange={(value) =>
                  setBeMyAgentCreationSteps({
                    ...BeMyAgentCreationSteps,
                    has_pets: value,
                  })
                }
              />
              <RadioInput
                name="has_vehicles"
                options={["Yes", "No"]}
                label={"Do you have any vehicles?"}
                onValueChange={(value) =>
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
