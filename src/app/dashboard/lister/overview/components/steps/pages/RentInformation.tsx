import React, { useMemo } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import CurrencyInput from "@/components/__shared/ui/form/CurrencyInput";
import { RadioInput } from "@/components/__shared/ui/form/radio-input";
import { useFormikContext } from "formik";
import { caseInsensitiveCompare } from "@/lib/utils/stringManipulation";
import AdditionalFees from "../../AdditionalFee";
import { Input } from "@/components/__shared/ui/form/input";

type Props = {};

const RentInformation = React.forwardRef<HTMLInputElement, Props>(({}, ref) => {
  const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const { values } = useFormikContext<typeof ListingDefaultValues>();

  const monthlyAmount = useMemo(() => {
    const result =
      Number(values?.total_amount) /
      (Number(values?.lease_duration.slice(0, 1)) * 12);
    return isNaN(result) ? null : Number(result?.toFixed(2))?.toString();
  }, [values?.total_amount, values?.lease_duration]);

  const handleOnChange = (name: string, value: string | number) => {
    setListingCreationSteps({
      ...listingCreationSteps,
      [name]: value,
    });
  };

  const handleDisabled = (options: string[]) => {
    let obj = {};
    options.forEach((option) => {
      Object.assign(obj, { [option]: true });
    });

    return obj;
  };

  const options = [
    "Less than 1 year",
    "1 Year",
    "2 Years",
    "3 Years",
    "4 Years",
    "5 Years",
  ];

  return (
    <div className={style.container}>
      <h2 className={`${style.title}`}>
        Rent Information <span className={style.asterisk}>*</span>
      </h2>
      <div className={`grid sm:grid-cols-2 ${style.fieldsInlineGap}`}>
        <div className={`fade-in-bottom flex flex-col ${style.fieldsBlockGap}`}>
          <RadioInput
            name="payment_terms"
            options={["Monthly", "Advance"]}
            label={"When is the Payment Due?"}
            onValueChange={(value) => handleOnChange("payment_terms", value)}
            color="primary"
          />
          <CurrencyInput
            name="currency"
            name2="total_amount"
            label="Amount Due at Payment"
            onChange={(value) => handleOnChange("currency", value)}
            onChange2={(value) => {
              handleOnChange("total_amount", value);
            }}
          />
          <RadioInput
            name="lease_duration"
            options={options}
            disabled={
              (caseInsensitiveCompare(values.payment_terms, "monthly")
                ? handleDisabled(options)
                : undefined) as any // FIXME: any
            }
            label={"Lease Duration"}
            onValueChange={(value) => {
              handleOnChange("lease_duration", value);
            }}
            color="primary"
          />
          <Input
            name="monthly_amount_calculation"
            label="Rent / Month"
            value={
              caseInsensitiveCompare(values.payment_terms, "monthly")
                ? values.total_amount
                : monthlyAmount || ""
            }
            disabled
            className="max-w-xs"
          />
          <RadioInput
            name="require_refundable_security_deposit"
            options={["Yes", "No"]}
            label={"Do you require a Refundable Security Deposit?"}
            onValueChange={(value) =>
              handleOnChange("require_refundable_security_deposit", value)
            }
            color="primary"
          />
          {caseInsensitiveCompare(
            values.require_refundable_security_deposit,
            "yes",
          ) && (
            <span className="fade-in-top">
              <CurrencyInput
                name="currency"
                name2="refundable_security_deposit"
                label="Refundable Security Deposit Amount"
                onChange={(value) => handleOnChange("currency", value)}
                onChange2={(value) =>
                  handleOnChange("refundable_security_deposit", value)
                }
              />
            </span>
          )}
        </div>
        <div
          className={`fade-in-bottom flex flex-col ${style.fieldsBlockGap}`}
          style={{ animationDelay: "0.5s" }}
        >
          <RadioInput
            name="require_additional_fees"
            options={["Yes", "No"]}
            label={"Do you require Other Fees?"}
            onValueChange={(value) =>
              handleOnChange("require_additional_fees", value)
            }
            color="primary"
          />
          {caseInsensitiveCompare(values.require_additional_fees, "yes") && (
            <span className="fade-in-top">
              <AdditionalFees />
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

RentInformation.displayName == "RentInformation";

export default RentInformation;
