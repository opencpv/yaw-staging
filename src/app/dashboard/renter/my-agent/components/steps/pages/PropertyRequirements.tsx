import style from "../../../index.module.css";
import { CustomDatePicker } from "@/components/__shared/ui/form/CustomDatePicker";
import { useLocalStorage } from "@uidotdev/usehooks";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import CallOut from "@/components/__shared/ui/callout";
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
            <CustomSelect
              name="min_price"
              label="Minimum"
              prefix="GHS"
              options={[
                { name: "100", value: "100" },
                { name: "1000", value: "1000" },
                { name: "2000", value: "2000" },
                { name: "4000", value: "4000" },
                { name: "5000", value: "5000" },
                { name: "6000", value: "6000" },
                { name: "7000", value: "7000" },
                { name: "8000", value: "8000" },
                { name: "9000", value: "9000" },
                { name: "10000", value: "10000" },
              ]}
              onChange={(value) => handleOnChange("min_price", value)}
            />
            <CustomSelect
              name="max_price"
              label="Maximum"
              prefix="GHS"
              options={[
                { name: "100", value: "100" },
                { name: "1000", value: "1000" },
                { name: "2000", value: "2000" },
                { name: "4000", value: "4000" },
                { name: "5000", value: "5000" },
                { name: "6000", value: "6000" },
                { name: "7000", value: "7000" },
                { name: "8000", value: "8000" },
                { name: "9000", value: "9000" },
                { name: "10000+", value: "10000+" },
              ]}
              onChange={(value) => handleOnChange("max_price", value)}
            />
          </div>
        </div>
        {/* Bed */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Bed</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <CustomSelect
              name="min_beds"
              label="Minimum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5", value: "5" },
                { name: "6", value: "6" },
                { name: "7", value: "7" },
                { name: "8", value: "8" },
                { name: "9", value: "9" },
                { name: "10", value: "10" },
              ]}
              onChange={(value) => handleOnChange("min_beds", value)}
            />
            <CustomSelect
              name="max_beds"
              label="Maximum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5", value: "5" },
                { name: "6", value: "6" },
                { name: "7", value: "7" },
                { name: "8", value: "8" },
                { name: "9", value: "9" },
                { name: "10+", value: "10+" },
              ]}
              onChange={(value) => handleOnChange("max_beds", value)}
            />
          </div>
        </div>
        {/* Bathroom */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Bathroom</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <CustomSelect
              name="min_bathrooms"
              label="Minimum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5", value: "5" },
                { name: "6", value: "6" },
                { name: "7", value: "7" },
                { name: "8", value: "8" },
                { name: "9", value: "9" },
                { name: "10", value: "10" },
              ]}
              onChange={(value) => handleOnChange("min_bathrooms", value)}
            />
            <CustomSelect
              name="max_bathrooms"
              label="Maximum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5", value: "5" },
                { name: "6", value: "6" },
                { name: "7", value: "7" },
                { name: "8", value: "8" },
                { name: "9", value: "9" },
                { name: "10+", value: "10+" },
              ]}
              onChange={(value) => handleOnChange("max_bathrooms", value)}
            />
          </div>
        </div>
        {/* Lease Terms */}
        <CallOut
          content="1-2 year lease with rent paid in advance are most common"
          className="mt-5"
        />
        <div className={style.subHeadingFieldsContainer}>
          <h3>Lease Terms</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <CustomSelect
              name="min_lease"
              label="Minimum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5", value: "5" },
              ]}
              onChange={(value) => handleOnChange("min_lease", value)}
            />
            <CustomSelect
              name="max_lease"
              label="Maximum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5+", value: "5+" },
              ]}
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
            <CustomSelect
              name="preferred_payment_option"
              label="Preferred Payment Term"
              options={[
                { name: "rent advance", value: "Rent Advance" },
                {
                  name: "monthly payments",
                  value: "Monthly Payments",
                },
                { name: "any", value: "Any" },
              ]}
              onChange={(value) =>
                handleOnChange("preferred_payment_option", value)
              }
            />
            <CustomDatePicker
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
