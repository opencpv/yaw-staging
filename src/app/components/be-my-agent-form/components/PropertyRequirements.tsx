import { styled } from "@stitches/react";
import styles from "./index.module.css";
import TextFieldInput from "../../TextFieldInput";
import CustomTextAreaInput from "../../CustomTextAreaInput";
import { CustomDatePicker } from "../../CustomDatePicker";
import { useLocalStorage } from "@uidotdev/usehooks";
import CustomCheckBoxes from "../../CustomCheckBoxes";

export default function PropertyRequirements() {
  const [agentFormData, setagentFormData] = useLocalStorage<any>(
    "agent-form",
    {}
  );
  const handleOnChange = (name: any, value: any) => {
    setagentFormData({
      ...agentFormData,
      [name]: value,
    });
  };
  return (
    <>
      <Root className=" flex flex-col w-full  h-full items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <div className="grid grid-cols-2 w-full">
            <p className={`${styles.title} col-span-2`}>
              Property Requirements
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-7 w-full">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-[1.25rem[ font-semibold">Price Range</p>
                <TextFieldInput
                  type="number"
                  label="Minimum"
                  name="priceRangeMinimum"
                  placeholder="1"
                  onChange={(e) =>
                    handleOnChange("priceRangeMinimum", e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[1.25rem[ font-semibold">Bed</p>
                <TextFieldInput
                  type="number"
                  label="Minimum"
                  name="bedMinimum"
                  placeholder="1"
                  onChange={(e) => handleOnChange("bedMinimum", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[1.25rem[ font-semibold">Bathroom</p>
                <TextFieldInput
                  type="number"
                  label="Minimum"
                  name="bathroomMinimum"
                  placeholder="1"
                  onChange={(e) =>
                    handleOnChange("bathroomMimum", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[1.25rem[ font-semibold">
                  Rent Advance Options
                </p>

                <CustomCheckBoxes
                
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
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-[1.25rem[ font-semibold invisible">
                  invisible
                </p>{" "}
                <TextFieldInput
                  type="number"
                  label="Maximum"
                  name="priceRangeMaximum"
                  placeholder="1"
                  onChange={(e) =>
                    handleOnChange("priceRangeMaximum", e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[1.25rem[ font-semibold invisible">
                  invisible
                </p>
                <TextFieldInput
                  type="number"
                  label="Maximum"
                  name="bedMaximum"
                  placeholder="1"
                  onChange={(e) => handleOnChange("bedMaximum", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[1.25rem[ font-semibold invisible">
                  invisible
                </p>
                <TextFieldInput
                  type="number"
                  label="Maximum"
                  name="bathroomMaximum"
                  placeholder="1"
                  onChange={(e) =>
                    handleOnChange("bathroomMaximum", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </Root>
    </>
  );
}

const Root = styled("div", {});
