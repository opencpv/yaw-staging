import { styled } from "@stitches/react";
import styles from "./index.module.css";
import TextFieldInput from "../../TextFieldInput";
import CustomTextAreaInput from "../../CustomTextAreaInput";
import { CustomDatePicker } from "../../CustomDatePicker";
import { useLocalStorage } from "@uidotdev/usehooks";
import CustomCheckBoxes from "../../CustomCheckBoxes";
import { ClientOnly } from "@/components/ui/ClientOnly";

export default function PropertyRequirements() {
  const [agentFormData, setAgentFormData] = useLocalStorage<any>("agent-form");
  const handleOnChange = (name: any, value: any) => {
    setAgentFormData({
      ...agentFormData,
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
            <TextFieldInput
              label="Minimum"
              name="priceRangeMinimum"
              placeholder=""
              pattern="[0-9]"
              onChange={(e) =>
                handleOnChange("priceRangeMinimum", e.target.value)
              }
            />
            <TextFieldInput
              label="Maximum"
              name="priceRangeMaximum"
              placeholder=""
              pattern="[0-9]"
              onChange={(e) =>
                handleOnChange("priceRangeMaximum", e.target.value)
              }
            />
          </div>
        </div>
        {/* Bed */}
        <div className="flex flex-col gap-4">
          <h3>Bed</h3>
          <div className="grid grid-cols-2 gap-5">
            <TextFieldInput
              label="Minimum"
              name="bedMinimum"
              placeholder=""
              pattern="[0-9]"
              onChange={(e) => handleOnChange("bedMinimum", e.target.value)}
            />
            <TextFieldInput
              label="Maximum"
              name="bedMaximum"
              placeholder=""
              pattern="[0-9]"
              onChange={(e) => handleOnChange("bedMaximum", e.target.value)}
            />
          </div>
        </div>
        {/* Bathroom */}
        <div className="flex flex-col gap-4">
          <h3>Bathroom</h3>
          <div className="grid grid-cols-2 gap-5">
            <TextFieldInput
              label="Minimum"
              name="bathroomMinimum"
              placeholder=""
              pattern="[0-9]"
              onChange={(e) =>
                handleOnChange("bathroomMinimum", e.target.value)
              }
            />
            <TextFieldInput
              label="Maximum"
              name="bathroomMaximum"
              placeholder=""
              pattern="[0-9]"
              onChange={(e) =>
                handleOnChange("bathroomMaximum", e.target.value)
              }
            />
          </div>
        </div>
        {/* Rent advance options */}
        <div className="flex flex-col gap-4">
          <h3>Rent Advance Options</h3>
          <ClientOnly>
            <CustomCheckBoxes
              color="accent"
              onChange={(value: any) =>
                handleOnChange("rentAdvanceOptions", value)
              }
              data={[
                {
                  name: "1 year",
                  value: "1",
                },
                { name: "2 years", value: "2" },
                { name: "3 years", value: "3" },
              ]}
            />
          </ClientOnly>
        </div>
      </div>
    </>
  );
}
