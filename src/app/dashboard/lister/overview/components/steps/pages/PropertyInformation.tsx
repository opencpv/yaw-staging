import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Input } from "@/components/__shared/ui/form/input";
import { Textarea } from "@/components/__shared/ui/form/textarea";
import style from "../../../index.module.css";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import { SelectInput } from "@/components/__shared/ui/form/select";
import { DatePicker } from "@/components/__shared/ui/form/date-picker";

type Props = {};

const PropertyInformation = React.forwardRef<HTMLInputElement, Props>(
  ({}, ref) => {
    const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
      typeof ListingDefaultValues
    >("listing-creation-steps");

    const handleOnChange = (name: string, value: string | number) => {
      setListingCreationSteps({
        ...listingCreationSteps,
        [name]: value,
      });
    };

    return (
      <div className={style.container}>
        <h2 className={`${style.title}`}>
          Property Information <span className={style.asterisk}>*</span>
        </h2>
        <div className={`grid sm:grid-cols-2 ${style.fieldsInlineGap}`}>
          <div
            className={`fade-in-bottom flex flex-col ${style.fieldsBlockGap}`}
          >
            <Input
              name="property_name"
              label="Property Name"
              type="text"
              placeholder="E.g. Aseda House"
              onChange={(e) => handleOnChange("property_name", e.target.value)}
            />
            <Textarea
              name="description"
              label="Brief Description"
              placeholder={"Enter description"}
              onChange={(e) => handleOnChange("description", e.target.value)}
              characterLimit={100}
            />
            <Textarea
              name="renter_knowledge"
              label="Things for Renters to Know"
              placeholder={"Enter things for renters to know"}
              onChange={(e) =>
                handleOnChange("renter_knowledge", e.target.value)
              }
              characterLimit={100}
            />
          </div>
          <div
            className={`fade-in-bottom flex flex-col ${style.fieldsBlockGap}`}
            style={{ animationDelay: "0.5s" }}
          >
            <Input
              name="property_size"
              type="text"
              label="Property Size ( sq M )"
              onChange={(e) => handleOnChange("property_size", e.target.value)}
            />

            <SelectInput
              name="bedrooms"
              label="Number of Bedrooms"
              options={["1", "2", "3", "4", "5", "6+"]}
              onChange={(value) => handleOnChange("bedrooms", value)}
            />
            <SelectInput
              name="bathrooms"
              label="Number of Bathrooms"
              options={[
                "1",
                "1.5",
                "2",
                "2.5",
                "3",
                "3.5",
                "4",
                "4.5",
                "5",
                "5.5",
                "6+",
              ]}
              onChange={(value) => handleOnChange("bathrooms", value)}
            />
            <SelectInput
              name="city"
              label="City"
              options={["Accra", "Tema"]}
              onChange={(value) => handleOnChange("city", value)}
            />
            <SelectInput
              name="neighbourhood"
              label="Neighbourhood"
              options={["Dansoman", "Osu"]}
              onChange={(value) => handleOnChange("neighbourhood", value)}
            />
            <DatePicker
              name="available_date"
              label="Available On"
              onChange={(value) => handleOnChange("available_date", value)}
            />
          </div>
        </div>
      </div>
    );
  },
);

PropertyInformation.displayName == "PropertyInformation";

export default PropertyInformation;
