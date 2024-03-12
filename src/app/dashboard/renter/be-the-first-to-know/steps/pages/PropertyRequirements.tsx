import styles from "../../index.module.css";
import { CustomDatePicker } from "@/app/components/CustomDatePicker";
import CustomSelect from "@/app/components/CustomSelect";
import InfoText from "@/app/components/listing-form/components/InfoText";

export default function PropertyRequirements() {
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
            />
          </div>
        </div>
      </div>
    </>
  );
}
