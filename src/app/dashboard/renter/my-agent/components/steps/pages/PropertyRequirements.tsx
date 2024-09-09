import style from "../../../index.module.css";
import { DatePicker } from "@/components/__shared/ui/form/date-picker";
import { useLocalStorage } from "@uidotdev/usehooks";
import { SelectInput } from "@/components/__shared/ui/form/select";
import Callout from "@/components/__shared/ui/callout";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import { cn } from "@/lib/utils";

export default function PropertyRequirements() {
  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
    useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

  const handleOnChange = (name: any, value: any) => {
    setBeMyAgentCreationSteps({
      ...BeMyAgentCreationSteps,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className={`${style.title}`}>Property Requirements</h2>
      <div className={cn("flex w-full flex-col", style.fieldsBlockGap)}>
        {/* Price range */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Price Range</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <SelectInput
              name="min_price"
              label="Minimum"
              prefix="GHS"
              options={[
                "100",
                "1000",
                "2000",
                "4000",
                "5000",
                "6000",
                "7000",
                "8000",
                "9000",
                "10000",
              ]}
              onChange={(value) => handleOnChange("min_price", value)}
            />
            <SelectInput
              name="max_price"
              label="Maximum"
              prefix="GHS"
              options={[
                "100",
                "1000",
                "2000",
                "4000",
                "5000",
                "6000",
                "7000",
                "8000",
                "9000",
                "10000+",
              ]}
              onChange={(value) => handleOnChange("max_price", value)}
            />
          </div>
        </div>
        {/* Bed */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Bed</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <SelectInput
              name="min_beds"
              label="Minimum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              onChange={(value) => handleOnChange("min_beds", value)}
            />
            <SelectInput
              name="max_beds"
              label="Maximum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]}
              onChange={(value) => handleOnChange("max_beds", value)}
            />
          </div>
        </div>
        {/* Bathroom */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Bathroom</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <SelectInput
              name="min_bathrooms"
              label="Minimum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              onChange={(value) => handleOnChange("min_bathrooms", value)}
            />
            <SelectInput
              name="max_bathrooms"
              label="Maximum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]}
              onChange={(value) => handleOnChange("max_bathrooms", value)}
            />
          </div>
        </div>
        {/* Lease Terms */}
        <Callout
          content="1-2 year lease with rent paid in advance are most common"
          className="mt-5"
        />
        <div className={style.subHeadingFieldsContainer}>
          <h3>Lease Terms</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <SelectInput
              name="min_lease"
              label="Minimum"
              options={["1", "2", "3", "4", "5"]}
              onChange={(value) => handleOnChange("min_lease", value)}
            />
            <SelectInput
              name="max_lease"
              label="Maximum"
              options={["1", "2", "3", "4", "5+"]}
              onChange={(value) => handleOnChange("max_lease", value)}
            />
          </div>
        </div>
        {/* Preferred Payment Plan */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Move In</h3>
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2",
              style.fieldsInlineGap,
              style.fieldsBlockGap,
            )}
          >
            <SelectInput
              name="preferred_payment_option"
              label="Preferred Payment Term"
              options={["Rent Advance", "Monthly Payments", "Any"]}
              onChange={(value) =>
                handleOnChange("preferred_payment_option", value)
              }
            />
            <DatePicker
              name="move_in_date"
              label="Desired Move In Date"
              onChange={(value) => handleOnChange("move_in_date", value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
