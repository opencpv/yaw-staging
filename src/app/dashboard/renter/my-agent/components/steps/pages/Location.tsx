import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ClientOnly } from "@/components/__shared/hoc/ClientOnly";
import CustomSelect from "../../../../../../../components/__shared/ui/form/CustomSelect";
import style from "../../../index.module.css";
import { Input } from "../../../../../../../components/__shared/ui/form/input";
import { useField } from "formik";
import { BeMyAgentDefaultValues } from "@/store/dashboard/BeMyAgentStepsStore";
import { cn } from "@/lib/utils";

type LocationType = {
  city: string;
  neighbourhood: string;
};

const locationDefault = {
  city: "Accra",
  neighbourhood: "Dansoman",
};

const Location = ({
  index,
  city,
  neighbourhood,
}: {
  index: number;
  city: string;
  neighbourhood: string;
}) => {
  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
    useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");
  const [field, meta, helpers] = useField("location");

  const handleInputChange = (name: string, value: string, index: number) => {
    const updatedLocation = field.value?.map(
      (location: LocationType, currentIndex: number) =>
        currentIndex === index
          ? {
              ...location,
              [name]: value,
            }
          : location,
    );

    helpers.setValue(updatedLocation);

    setBeMyAgentCreationSteps({
      ...BeMyAgentCreationSteps,
      location: updatedLocation,
    });
  };

  return (
    <div
      className={cn("flex w-full flex-col lg:max-w-lg", style.fieldsBlockGap)}
    >
      <CustomSelect
        name={city + index}
        label="City"
        value={city}
        options={[
          { name: "accra", value: "Accra" },
          { name: "tema", value: "Tema" },
        ]}
        onChange={(val) => handleInputChange("city", val, index)}
      />
      <CustomSelect
        name={neighbourhood + index}
        label="Neighbourhood"
        value={neighbourhood}
        options={[
          { name: "dansoman", value: "Dansoman" },
          { name: "osu", value: "Osu" },
        ]}
        onChange={(val) => handleInputChange("neighbourhood", val, index)}
      />
    </div>
  );
};

const DesiredLocations = () => {
  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
    useLocalStorage<typeof BeMyAgentDefaultValues>("bma-creation-steps");

  const [field, meta, helpers] = useField("location");

  const handleAdd = () => {
    helpers.setValue([...field.value, locationDefault]);

    setBeMyAgentCreationSteps({
      ...BeMyAgentCreationSteps,
      location: [...field.value, locationDefault],
    });
  };

  const handleRemove = (index: number) => {
    helpers.setValue(
      field.value?.filter(
        (_: LocationType, currentIndex: number) => currentIndex !== index,
      ),
    );
    setBeMyAgentCreationSteps({
      ...BeMyAgentCreationSteps,
      location: field.value?.filter(
        (_: LocationType, currentIndex: number) => currentIndex !== index,
      ),
    });
  };

  return (
    <div className={style.fieldsSectionWrapper}>
      {/* SearchTitle */}
      <div className="space-y-4 lg:max-w-lg">
        <h2 className={`${style.titleNoMargin}`}>
          Name your Search <span className={style.asterisk}>*</span>
        </h2>
        <Input
          type="text"
          name="search_title"
          placeholder="e.g: My Accra Dream Home"
          onChange={(e) =>
            setBeMyAgentCreationSteps({
              ...BeMyAgentCreationSteps,
              search_title: e.target.value,
            })
          }
        />
      </div>

      {/* Location */}
      <div>
        <h2 className={style.title}>Desired Locations</h2>
        <div className={"col-span-3 flex flex-col gap-2 lg:col-span-1"}>
          {/* Locations */}
          <div>
            {field.value?.map((location: LocationType, index: number) => (
              <div key={index} className={index === 0 ? "mb-10" : "mb-2"}>
                <ClientOnly>
                  <Location
                    index={index}
                    city={location.city}
                    neighbourhood={location.neighbourhood}
                  />
                </ClientOnly>
                {field.value?.length > 1 && index !== 0 && (
                  <button
                    type="button"
                    className="flex h-[38px] items-center justify-center gap-1 px-2 text-[13px] font-[400] text-[#E9515E] hover:bg-[#e9515e3a]"
                    onClick={() => {
                      handleRemove(index);
                    }}
                  >
                    Remove
                    <AiOutlineMinus size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="h-38 text-13 flex w-fit items-center justify-start gap-1 whitespace-nowrap p-2 font-normal text-[#AD842A] hover:bg-[#ad832a20]"
            onClick={handleAdd}
          >
            Add Additional Location
            <div className="w-[20px]">
              {" "}
              <AiOutlinePlus size={20} className="aspect-square w-[20px]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesiredLocations;
