import styles from "../../../index.module.css";
import { CustomDatePicker } from "@/components/__shared/ui/form/CustomDatePicker";
import { useLocalStorage } from "@uidotdev/usehooks";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import CallOut from "@/components/__shared/ui/CallOut";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";

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
      <h2 className={`${styles.title}`}>Property Requirements</h2>
      <div className="flex w-full flex-col gap-8">
        {/* Price range */}
        <div className="flex flex-col gap-4">
          <h3>Price Range</h3>
          <div className="grid grid-cols-2 gap-5">
            <CustomSelect
              name="priceRangeMinimum"
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
              onChange={(value) => handleOnChange("priceRangeMinimum", value)}
            />
            <CustomSelect
              name="priceRangeMaximum"
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
              onChange={(value) => handleOnChange("priceRangeMaximum", value)}
            />
          </div>
        </div>
        {/* Bed */}
        <div className="flex flex-col gap-4">
          <h3>Bed</h3>
          <div className="grid grid-cols-2 gap-5">
            <CustomSelect
              name="bedMinimum"
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
              onChange={(value) => handleOnChange("bedMinimum", value)}
            />
            <CustomSelect
              name="bedMaximum"
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
              onChange={(value) => handleOnChange("bedMaximum", value)}
            />
          </div>
        </div>
        {/* Bathroom */}
        <div className="flex flex-col gap-4">
          <h3>Bathroom</h3>
          <div className="grid grid-cols-2 gap-5">
            <CustomSelect
              name="bathroomMinimum"
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
              onChange={(value) => handleOnChange("bathroomMinimum", value)}
            />
            <CustomSelect
              name="bathroomMaximum"
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
              onChange={(value) => handleOnChange("bathroomMaximum", value)}
            />
          </div>
        </div>
        {/* Lease Terms */}
        <CallOut
          content="1-2 year lease with rent paid in advance are most common"
          className="mt-5"
        />
        <div className="flex flex-col gap-4">
          <h3>Lease Terms</h3>
          <div className="grid grid-cols-2 gap-5">
            <CustomSelect
              name="leaseTermMinimum"
              label="Minimum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5", value: "5" },
              ]}
              onChange={(value) => handleOnChange("leaseTermMinimum", value)}
            />
            <CustomSelect
              name="leaseTermMaximum"
              label="Maximum"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5+", value: "5+" },
              ]}
              onChange={(value) => handleOnChange("leaseTermMaximum", value)}
            />
          </div>
        </div>
        {/* Preferred Payment Plan */}
        <div className="flex flex-col gap-4">
          <h3>Move In</h3>
          <div className="grid grid-cols-1 gap-5 gap-y-8 lg:grid-cols-2">
            <CustomSelect
              name="paymentOption"
              label="Preferred Payment Option"
              options={[
                { name: "rent advance", value: "Rent Advance" },
                {
                  name: "monthly payments",
                  value: "Monthly Payments",
                },
                { name: "any", value: "Any" },
              ]}
              onChange={(value) => handleOnChange("paymentOption", value)}
            />
            <CustomDatePicker
              name="moveInDate"
              label="Desired Move In Date"
              onChange={(value) => handleOnChange("moveInDate", value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
