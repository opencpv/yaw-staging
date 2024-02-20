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
      <Root className=" flex h-full w-full  flex-col items-center justify-center ">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="grid w-full grid-cols-2">
            <h2 className={`col-span-2 ${styles.title}`}>
              Property Requirements
            </h2>
          </div>
          <div className="grid w-full grid-cols-2 gap-x-7">
            <div className="col-span-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3>Price Range</h3>
                <TextFieldInput
                  label="Minimum"
                  name="priceRangeMinimum"
                  placeholder=""
                  pattern="[0-9]"
                  onChange={(e) =>
                    handleOnChange("priceRangeMinimum", e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3>Bed</h3>
                <TextFieldInput
                  label="Minimum"
                  name="bedMinimum"
                  placeholder=""
                  pattern="[0-9]"
                  onChange={(e) => handleOnChange("bedMinimum", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3>Bathroom</h3>
                <TextFieldInput
                  label="Minimum"
                  name="bathroomMinimum"
                  placeholder=""
                  pattern="[0-9]"
                  onChange={(e) =>
                    handleOnChange("bathroomMimum", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3>Rent Advance Options</h3>
                <ClientOnly>
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
                </ClientOnly>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="invisible">invisible</h3>{" "}
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

              <div className="flex flex-col gap-4">
                <h3 className="invisible">invisible</h3>
                <TextFieldInput
                  label="Maximum"
                  name="bedMaximum"
                  placeholder=""
                  pattern="[0-9]"
                  onChange={(e) => handleOnChange("bedMaximum", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="invisible ">invisible</h3>
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
          </div>
        </div>
      </Root>
    </>
  );
}

const Root = styled("div", {});
