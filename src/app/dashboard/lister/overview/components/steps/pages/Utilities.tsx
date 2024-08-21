import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "@/app/dashboard/components/shared/Amenity";
import style from "../../../index.module.css";
import CallOut from "../../../../../../../components/__shared/ui/CallOut";
import { useField } from "formik";
import { utilities } from "../../../../../components/shared/content";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import UtilitiesIncludedModal from "../../UtilitiesIncludedModal";
// import { useDisclosure } from "@nextui-org/react";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function Utilities() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  // const { onOpenChange, isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUtility, setSelectedUtility] = React.useState("");
  const [field, meta, helpers] = useField("utilities");
  const [fieldUtilityInc, _, helpersUtilityInc] =
    useField("utilities_included");

  const handleAmenityClick = (r: string) => {
    if (field.value?.includes(r)) {
      // remove from both utilities and utilities_included if already included
      helpers.setValue(field.value?.filter((item: string) => item !== r));
      helpersUtilityInc.setValue(
        fieldUtilityInc.value?.filter((item: string) => item !== r),
      );

      setListingCreationSteps({
        ...listingCreationSteps,
        utilities: field.value?.filter((item: string) => item !== r),
        utilities_included: fieldUtilityInc.value?.filter(
          (item: string) => item !== r,
        ),
      });
      fieldUtilityInc?.value?.includes(r) &&
        toast("Removed from utilities included", { duration: 2000 });
    } else {
      // only add to utilities if not already included
      helpers.setValue([...field.value, r]);
      setListingCreationSteps({
        ...listingCreationSteps,
        utilities: [...field.value, r] as any,
      });
    }
  };

  const openModal = (utility: string) => {
    setSelectedUtility(utility);
    // onOpen();
  };

  const handleYes = () => {
    if (fieldUtilityInc.value?.includes(selectedUtility)) {
      helpersUtilityInc.setValue(
        fieldUtilityInc.value?.filter((item: any) => item !== selectedUtility),
      );
      setListingCreationSteps({
        ...listingCreationSteps,
        utilities_included: fieldUtilityInc.value?.filter(
          (item: any) => item !== selectedUtility,
        ),
      });
    } else {
      helpersUtilityInc.setValue([...fieldUtilityInc.value, selectedUtility]);
      setListingCreationSteps({
        ...listingCreationSteps,
        utilities_included: [...fieldUtilityInc.value, selectedUtility] as any,
      });
    }

    // onClose();
  };

  useEffect(() => {
    const bodyRefCurrent = bodyRef.current;
    // if (isOpen && bodyRef.current) {
    //   setTimeout(() => {
    //     bodyRefCurrent?.classList.add("pointer-events-none");
    //   }, 300);
    // } else {
    //   setTimeout(() => {
    //     bodyRefCurrent?.classList.remove("pointer-events-none");
    //   }, 300);
    // }

    return () => {
      setTimeout(() => {
        bodyRefCurrent?.classList.remove("pointer-events-none");
      }, 300);
    };
    //@ts-ignore
  }, [isOpen]);

  return (
    <>
      {/* <UtilitiesIncludedModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        handleYes={handleYes}
        handleNo={onClose}
        utility={selectedUtility}
      /> */}
      <div ref={bodyRef} className={style.container}>
        <div className={style.titleCallOutContainer}>
          <h2 className={`${style.titleNoMargin}`}>
            Utilities <span className={style.asterisk}>*</span>
          </h2>
          <CallOut content="You can add more utilities after you publish your listing." />
        </div>

        <div className={style.amenityGrid}>
          {utilities.map((r, index: number) => (
            <Amenity
              key={r?.name}
              n={index}
              name={r?.name}
              icon={r?.icon}
              selected={field.value?.includes(r?.name)}
              onClick={() => {
                handleAmenityClick(r?.name);
                // only open modal when amenity is not included in utilities
                field.value?.includes(r?.name) === false && openModal(r?.name);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
