import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import CurrencyInput from "@/components/__shared/ui/form/currency-input";
import { RadioInput } from "@/components/__shared/ui/form/radio-input";
import { caseInsensitiveCompare } from "@/lib/utils/stringManipulation";
import { useFormikContext } from "formik";
import Callout from "@/components/__shared/ui/callout";

type Props = {};

const AgencyInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
      typeof ListingDefaultValues
    >("listing-creation-steps");

    const { values } = useFormikContext<typeof ListingDefaultValues>();
    const handleOnChange = (name: string, value: string | number) => {
      setListingCreationSteps({
        ...listingCreationSteps,
        [name]: value,
      });
    };

    return (
      <div className={`mx-auto max-w-lg ${style.container}`}>
        <h2 className={`${style.title}`}>
          Agency Information <span className={style.asterisk}>*</span>
        </h2>
        <div className={`fade-in-bottom flex flex-col ${style.fieldsBlockGap}`}>
          <RadioInput
            name="require_agent_fee"
            options={["Yes", "No"]}
            label={"Do you require an Agent Fee?"}
            onValueChange={(value) =>
              handleOnChange("require_agent_fee", value)
            }
            color="primary"
          />
          {caseInsensitiveCompare(values.require_agent_fee, "yes") && (
            <>
              <Callout content="You can add more utilities after you publish your listing." />
              <span className="fade-in-top">
                <CurrencyInput
                  name="currency"
                  name2="agent_fee"
                  label="Agent Fee"
                  onChange={(value) => handleOnChange("currency", value)}
                  onChange2={(value) => handleOnChange("agent_fee", value)}
                />
              </span>
            </>
          )}
          <RadioInput
            name="require_viewing_fee"
            options={["Yes", "No"]}
            label={"Do you require a Viewing Fee?"}
            onValueChange={(value) =>
              handleOnChange("require_viewing_fee", value)
            }
            color="primary"
          />
          {caseInsensitiveCompare(values.require_viewing_fee, "yes") && (
            <>
              <Callout content="You can add more utilities after you publish your listing." />
              <span className="fade-in-top">
                <CurrencyInput
                  name="currency"
                  name2="viewing_fee"
                  label="Viewing Fee"
                  onChange={(value) => handleOnChange("currency", value)}
                  onChange2={(value) => handleOnChange("viewing_fee", value)}
                />
              </span>
            </>
          )}
        </div>
      </div>
    );
  },
);

AgencyInformation.displayName === "AgencyInformation";

export default AgencyInformation;
