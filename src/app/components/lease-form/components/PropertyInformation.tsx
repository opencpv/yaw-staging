import { styled } from "@stitches/react";
import styles from "./index.module.css";
import TextFieldInput from "../../TextFieldInput";
import CustomTextAreaInput from "../../CustomTextAreaInput";
import { CustomDatePicker } from "../../CustomDatePicker";
import SlideEnter from "./SlideEnter";

export default function PropertyInformation() {
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
                    label="Property     Name ( Optional )"
                    name="propertyName"
                    placeholder="Enter property name"
                  />
                  <CustomTextAreaInput
                    placeholder="Enter the description"
                    name="description"
                    label="Brief Description"
                    classes="min-h-[122px]"
                  />
        
                  <CustomTextAreaInput
                    placeholder="Enter the description"
                    name="renterKnowledge"
                    label="Things For Renter To Know"
                    classes="min-h-[332px]"
                  />
                </div>
                <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
                  <TextFieldInput
                    label="Property Size ( sq.M )"
                    type="number"
                    name="propertySize"
                    placeholder=""
                  />
        
                  <TextFieldInput
                    label="Number Of Bedrooms"
                    type="number"
                    name="bedrooms"
                    placeholder=""
                  />
                  <TextFieldInput
                    label="Number Of Bathrooms"
                    type="number"
                    name="bathrooms"
                    placeholder=""
                  />
                  
        
                  <TextFieldInput
                    label="City"
                    type="text"
                    name="city"
                    placeholder=""
                  />
                  <TextFieldInput
                    label="Neighbourhood"
                    type="text"
                    name="neighbourhood"
                    placeholder=""
                  />
                  <CustomDatePicker label="Available Date" />
                </div>
              </div>
      </div>
        </Root>
  </SlideEnter>
  );
}

const Root = styled("div", {});
