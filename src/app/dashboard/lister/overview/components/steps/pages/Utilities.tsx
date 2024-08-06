import { useLocalStorage } from "@uidotdev/usehooks";
import Amenity from "../../../../../../../components/__shared/ui/listing-form/components/Amenity";
import style from "../../../index.module.css";
import CallOut from "../../../../../../../components/__shared/ui/CallOut";
import { useField } from "formik";
import { utilities } from "../../../../../components/shared/content";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import UtilitiesIncludedModal from "../../UtilitiesIncludedModal";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

export default function Utilities() {
  const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const [listingUtilityCheck, setListingUtilityCheck] = useLocalStorage<{
    apply_to_all_check: CheckedState;
  }>("listing-utility-check", { apply_to_all_check: false });

  const { onOpenChange, isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUtility, setSelectedUtility] = React.useState("");
  const [field, meta, helpers] = useField("utilities");
  const [fieldUtilityInc, _, helpersUtilityInc] =
    useField("utilities_included");

  const handleAmenityClick = (r: string) => {
    if (field.value?.includes(r)) {
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
    } else {
      helpers.setValue([...field.value, r]);
      setListingCreationSteps({
        ...listingCreationSteps,
        utilities: [...field.value, r] as any,
      });
    }
  };

  const handleChecked = (checked: CheckedState) => {
    setListingUtilityCheck({
      ...listingUtilityCheck,
      apply_to_all_check: checked,
    });
  };

  const openModal = (utility: string) => {
    setSelectedUtility(utility);
    onOpen();
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

    onClose();
  };

  const handleNo = () => {
    onClose();
  };

  return (
    <>
      <UtilitiesIncludedModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        handleYes={handleYes}
        handleNo={handleNo}
        utility={selectedUtility}
        checked={listingUtilityCheck?.apply_to_all_check || false}
        onCheckedChange={handleChecked}
      />
      <div
        className={style.container}
        style={{ pointerEvents: isOpen ? "none" : "auto" }}
      >
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
