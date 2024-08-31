import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";
import style from "../../../index.module.css";
import { SelectInput } from "@/components/__shared/ui/form/select";
import { useLocalStorage } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

export default function PropertyRequirements() {
  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues
  >("btftk-creation-steps");

  const handleOnChange = (name: string, value: any) => {
    setBTFTKCreationSteps({
      ...BTFTKCreationSteps,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className={`${style.title}`}>Property Requirements</h2>
      <div className="flex w-full flex-col gap-8">
        {/* Price range */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Price Range</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <SelectInput
              name="priceRangeMinimum"
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
              onChange={(value) => handleOnChange("priceRangeMinimum", value)}
            />
            <SelectInput
              name="priceRangeMaximum"
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
              onChange={(value) => handleOnChange("priceRangeMaximum", value)}
            />
          </div>
        </div>
        {/* Bed */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Bed</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <SelectInput
              name="bedMinimum"
              label="Minimum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              onChange={(value) => handleOnChange("bedMinimum", value)}
            />
            <SelectInput
              name="bedMaximum"
              label="Maximum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]}
              onChange={(value) => handleOnChange("bedMaximum", value)}
            />
          </div>
        </div>
        {/* Bathroom */}
        <div className={style.subHeadingFieldsContainer}>
          <h3>Bathroom</h3>
          <div className={cn("grid grid-cols-2", style.fieldsInlineGap)}>
            <SelectInput
              name="bathroomMinimum"
              label="Minimum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              onChange={(value) => handleOnChange("bathroomMinimum", value)}
            />
            <SelectInput
              name="bathroomMaximum"
              label="Maximum"
              options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]}
              onChange={(value) => handleOnChange("bathroomMaximum", value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
