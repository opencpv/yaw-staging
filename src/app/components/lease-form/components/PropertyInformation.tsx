import { styled } from "@stitches/react";
import styles from "./index.module.css";
import TextFieldInput from "../../TextFieldInput";
import CustomTextAreaInput from "../../CustomTextAreaInput";
import { CustomDatePicker } from "../../CustomDatePicker";
import SlideEnter from "./SlideEnter";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function PropertyInformation() {
  const [leaseFormData, setLeaseFormData] = useLocalStorage("lease-form", {});
  const handleOnChange = (name: any, value: any) => {
    setLeaseFormData({
      ...leaseFormData,
      [name]: value,
    });
  };
  return (
    <SlideEnter>
      <Root className=" flex flex-col w-full  h-full items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full lg:w-[65%] ">
          <div className="grid grid-cols-2 w-full">
            <p className={`${styles.title}`}>Property Information</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
              <TextFieldInput
                type="text"
                label="Property Name ( Optional )"
                name="propertyName"
                placeholder="Enter property name"
                onChange={(e) => handleOnChange("propertyName", e.target.value)}
              />
              <CustomTextAreaInput
                initialValues={leaseFormData?.propertyDescription}
                placeholder="Enter the description"
                name="propertyDescription"
                label="Brief Description"
                classes="min-h-[122px]"
                onChange={(e) =>
                  handleOnChange("propertyDescription", e.target.value)
                }
              />

              <CustomTextAreaInput
                initialValues={leaseFormData?.renterKnowledge}
                placeholder="Enter the description"
                name="renterKnowledge"
                label="Things For Renter To Know"
                classes="min-h-[332px]"
                onChange={(e) =>
                  handleOnChange("renterKnowledge", e.target.value)
                }
              />
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
              <TextFieldInput
                label="Property Size ( sq.M )"
                type="number"
                name="propertySize"
                placeholder=""
                onChange={(e) =>
                  handleOnChange("propertySize", e.target.value)
                }
              />

              <TextFieldInput
                label="Number Of Bedrooms"
                type="number"
                name="bedrooms"
                placeholder=""
                onChange={(e) =>
                  handleOnChange("bedrooms", e.target.value)
                }
              />
              <TextFieldInput
                label="Number Of Bathrooms"
                type="number"
                name="bathrooms"
                placeholder=""
                onChange={(e) =>
                  handleOnChange("bathrooms", e.target.value)
                }
              />

              <TextFieldInput
                label="City"
                type="text"
                name="city"
                placeholder=""
                onChange={(e) =>
                  handleOnChange("city", e.target.value)
                }
              />
              <TextFieldInput
                label="Neighbourhood"
                type="text"
                name="neighbourhood"
                placeholder=""
                onChange={(e) =>
                  handleOnChange("neighbourhood", e.target.value)
                }
              />
              <CustomDatePicker 
              placeholderDate={leaseFormData?.availableDate}
              label="Available Date" 
                   onChange={(value) =>
                    handleOnChange("availableDate", value)
                  }
              />
            </div>
          </div>
        </div>
      </Root>
    </SlideEnter>
  );
}

const Root = styled("div", {});
