import { styled } from "@stitches/react";
import styles from "./index.module.css";
import TextFieldInput from "../../form/TextFieldInput";
import CustomTextAreaInput from "../../form/CustomTextAreaInput";
import { CustomDatePicker } from "../../form/CustomDatePicker";
import SlideEnter from "./SlideEnter";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ListingForm } from "./types";

export default function PropertyInformation() {
  const [listingFormData, setListingFormData] = useLocalStorage<ListingForm>(
    "listing-form",
    {},
  );
  const handleOnChange = (name: any, value: any) => {
    setListingFormData({
      ...listingFormData,
      [name]: value,
    });
  };
  return (
    <>
      <Root className=" flex h-full w-full  flex-col items-center justify-center ">
        <div className="flex w-full flex-col items-center justify-center lg:w-[65%] ">
          <div className="grid w-full grid-cols-2">
            <p className={`${styles.title} col-span-2`}>Property Information</p>
          </div>
          <div className="grid w-full grid-cols-2 gap-x-7">
            <div className="col-span-2 flex flex-col gap-6 lg:col-span-1">
              <TextFieldInput
                type="text"
                label="Property Name ( Optional )"
                name="propertyName"
                placeholder="Enter property name"
                onChange={(e) => handleOnChange("propertyName", e.target.value)}
              />
              <CustomTextAreaInput
                initialValues={listingFormData?.propertyDescription}
                placeholder="Enter the description"
                name="propertyDescription"
                label="Brief Description"
                classes="min-h-[122px]"
                onChange={(e) =>
                  handleOnChange("propertyDescription", e.target.value)
                }
              />

              <CustomTextAreaInput
                initialValues={listingFormData?.renterKnowledge}
                placeholder="Enter the description"
                name="renterKnowledge"
                label="Things For Renter To Know"
                classes="min-h-[332px]"
                onChange={(e) =>
                  handleOnChange("renterKnowledge", e.target.value)
                }
              />
            </div>
            <div className="col-span-2 flex flex-col gap-6 lg:col-span-1">
              <TextFieldInput
                label="Property Size ( sq.M )"
                type="number"
                name="propertySize"
                placeholder=""
                onChange={(e) => handleOnChange("propertySize", e.target.value)}
              />

              <TextFieldInput
                label="Number Of Bedrooms"
                type="number"
                name="bedrooms"
                placeholder=""
                onChange={(e) => handleOnChange("bedrooms", e.target.value)}
              />
              <TextFieldInput
                label="Number Of Bathrooms"
                type="number"
                name="bathrooms"
                placeholder=""
                onChange={(e) => handleOnChange("bathrooms", e.target.value)}
              />

              <TextFieldInput
                label="City"
                type="text"
                name="city"
                placeholder=""
                onChange={(e) => handleOnChange("city", e.target.value)}
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
            </div>
          </div>
        </div>
      </Root>
    </>
  );
}

const Root = styled("div", {});
