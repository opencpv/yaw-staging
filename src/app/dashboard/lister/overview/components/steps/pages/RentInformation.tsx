import React, { useMemo } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import style from "../../../index.module.css";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import CurrencyInput from "@/components/__shared/ui/form/currency-input";
import { RadioInput } from "@/components/__shared/ui/form/radio-input";
import { useFormikContext } from "formik";
import { caseInsensitiveCompare } from "@/lib/utils/stringManipulation";
import AdditionalFees from "../../AdditionalFee";
import { CheckboxGroup } from "@/components/__shared/ui/form/checkbox-group";

type Props = {};

const RentInformation = React.forwardRef<HTMLInputElement, Props>(({}, ref) => {
  const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const { values } = useFormikContext<typeof ListingDefaultValues>();

  //const monthlyAmount = useMemo(() => {
  //  const result =
  //    Number(values?.total_amount) /
  //    (Number(values?.payment_terms.slice(0, 1)) * 12);
  //  return isNaN(result) ? null : Number(result?.toFixed(2))?.toString();
  //}, [values?.total_amount, values?.payment_terms]);

  const handleOnChange = (
    name: string,
    value: string | number | string[] | number[],
  ) => {
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

  const termOptions = [
    "Monthly",
    "1 Yr Advance",
    "2 Yr Advance",
    "3 Yr Advance",
    "4 Yr Advance",
    "5 Yr Advance",
  ];

  const incentiveOptions = ["Rent Financing Options", "First Month Free Rent"];

  return (
    <div className={style.container}>
      <h2 className={`${style.title}`}>
        Rent Information <span className={style.asterisk}>*</span>
      </h2>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <div className={`fade-in-bottom flex flex-col ${style.fieldsBlockGap}`}>
          <CurrencyInput
            name="currency"
            name2="total_amount"
            name3="payment_terms"
            options3={termOptions}
            label="How much is Rent?"
            onChange={(value) => handleOnChange("currency", value)}
            onChange2={(value) => {
              handleOnChange("total_amount", value);
            }}
            onChange3={(value) => {
              handleOnChange("payment_terms", value);
            }}
          />
          {/*<RadioInput
            name="payment_terms"
            options={["Monthly", "Advance"]}
            label={"When is the Payment Due?"}
            onValueChange={(value) => handleOnChange("payment_terms", value)}
            color="primary"
          />
          */}
          {/* 
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
          */}
          <CheckboxGroup
            color="primary"
            label="Lease Options"
            name="lease_options"
            options={options}
            disabled={
              (!caseInsensitiveCompare(values.payment_terms, "monthly")
                ? handleDisabled([options[0]])
                : undefined) as any // FIXME: any
            }
            onValueChange={(value, checked) => {
              if (checked) {
                handleOnChange("lease_options", [
                  ...values.lease_options,
                  value,
                ]);
              } else {
                handleOnChange(
                  "lease_options",
                  values.lease_options.filter((v) => v !== value),
                );
              }
            }}
          />
          <CheckboxGroup
            color="primary"
            label="Are you Offering any Incentives/Specials to renters?"
            name="incentives"
            options={incentiveOptions}
            onValueChange={(value, checked) => {
              if (checked) {
                handleOnChange("incentives", [...values.incentives, value]);
              } else {
                handleOnChange(
                  "incentives",
                  values.incentives.filter((v) => v !== value),
                );
              }
            }}
          />
          {/*
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
          */}

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
