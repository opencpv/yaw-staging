import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Input } from "@/components/__shared/ui/form/input";
import { Textarea } from "@/components/__shared/ui/form/Textarea";
import style from "../../../index.module.css";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import CustomSelect from "@/components/__shared/ui/form/CustomSelect";
import { CustomDatePicker } from "@/components/__shared/ui/form/CustomDatePicker";

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

            <CustomSelect
              name="bedrooms"
              label="Number of Bedrooms"
              options={[
                { name: "1", value: "1" },
                { name: "2", value: "2" },
                { name: "3", value: "3" },
                { name: "4", value: "4" },
                { name: "5", value: "5" },
                { name: "6+", value: "6+" },
              ]}
              onChange={(value) => handleOnChange("bedrooms", value)}
            />
            <CustomSelect
              name="bathrooms"
              label="Number of Bathrooms"
              options={[
                { name: "1", value: "1" },
                { name: "1.5", value: "1.5" },
                { name: "2", value: "2" },
                { name: "2.5", value: "2.5" },
                { name: "3", value: "3" },
                { name: "3.5", value: "3.5" },
                { name: "4", value: "4" },
                { name: "4.5", value: "4.5" },
                { name: "5", value: "5" },
                { name: "5.5", value: "5.5" },
                { name: "6+", value: "6+" },
              ]}
              onChange={(value) => handleOnChange("bathrooms", value)}
            />
            <CustomSelect
              name="city"
              label="City"
              options={[
                { name: "Accra", value: "Accra" },
                { name: "Tema", value: "Tema" },
              ]}
              onChange={(value) => handleOnChange("city", value)}
            />
            <CustomSelect
              name="neighbourhood"
              label="Neighbourhood"
              options={[
                { name: "Dansoman", value: "Dansoman" },
                { name: "Osu", value: "Osu" },
              ]}
              onChange={(value) => handleOnChange("neighbourhood", value)}
            />
            <CustomDatePicker
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
