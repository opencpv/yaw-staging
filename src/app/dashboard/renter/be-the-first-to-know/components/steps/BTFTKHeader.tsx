import React, { useCallback, useEffect } from "react";
import Progress from "@/app/dashboard/components/shared/ui/Progress";
import {
  BTFTKDefaultValues,
  BTFTKStepsStore,
} from "@/store/dashboard/BTFTKStepsStore";
import { useFormikContext } from "formik";
import { views as BTFTKviews } from "./BTFTKForm";
import { useAddSearchCriteria } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { usePathname, useRouter } from "next/navigation";
import { useLocalStorage } from "@uidotdev/usehooks";
import capitalizeName from "@/lib/utils/stringManipulation";
import style from "../../index.module.css";
import HeaderButtons from "@/components/__shared/ui/modals/steps/HeaderButtons";

const FirstToKnowHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAppStore();
  const { values, resetForm } = useFormikContext<typeof BTFTKDefaultValues>();

  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<{
    activeSlide: number;
  }>("btftk-creation-steps");

  const [BTFTKEditSteps, setBTFTKEditSteps] = useLocalStorage<
    { criterion: number; activeSlide: number }[]
  >("btftk-edit-steps", []);

  const {
    progressValue,
    setActiveSlide,
    lastSlide,
    activeSlide,
    onClose,
    onCloseEditPage,
    setCriterion,
    criterion,
    previousPath,
  } = BTFTKStepsStore();

  // Save to DB
  const {
    mutate: addSearchCriteria,
    isError,
    isPending,
    isSuccess,
  } = useAddSearchCriteria();

  const handleActiveSlide = useCallback(() => {
    setActiveSlide(BTFTKCreationSteps?.activeSlide ?? activeSlide);
  }, [setActiveSlide, activeSlide, BTFTKCreationSteps?.activeSlide]);

  const handleClearData = useCallback(() => {
    resetForm({});
    onClose();
    onCloseEditPage();
    setCriterion(null);
    localStorage.removeItem("btftk-creation-steps");
    localStorage.removeItem("btftk-edit-steps");
    router.replace(
      previousPath || "/dashboard/renter/be-the-first-to-know/manage-criteria",
    );
  }, [resetForm, onClose, onCloseEditPage, setCriterion, previousPath, router]);

  useEffect(() => {
    if (
      isSuccess &&
      (pathname?.includes("edit") || pathname?.includes("create"))
    ) {
      handleClearData();
    }
    if (pathname?.includes("create")) handleActiveSlide();
  }, [isSuccess, pathname, handleActiveSlide, handleClearData]);

  const handleBTFTKEditStepsStorage = () => {
    setBTFTKEditSteps((prevSteps) => {
      const updatedSteps = prevSteps.filter(
        (step) => step.criterion !== criterion?.id,
      );
      return [
        { criterion: criterion?.id as number, activeSlide: activeSlide },
        ...updatedSteps,
      ];
    });
    setBTFTKCreationSteps({ activeSlide: 0 });
  };

  const handleSaveAndExit = () => {
    handleBTFTKEditStepsStorage();
    addSearchCriteria({
      title: values.searchTitle,
      location: values.location.length > 0 ? values.location : null,
      min_beds: values.bedMinimum,
      max_beds: values.bedMaximum,
      min_price: values.priceRangeMinimum,
      max_price: values.priceRangeMaximum,
      min_bathrooms: values.bathroomMinimum,
      max_bathrooms: values.bathroomMaximum,
      property_type: values.preferredType,
      email: values.email,
      phone: values.whatsApp,
      preferred_contact_method: capitalizeName(values.preferredMethodOfContact),
      features: values.requiredFeatures,
      keywords: values.specialKeywords,
      id: criterion?.id,
      renter_id: user?.id,
      is_active: false,
      matched_properties: null,
    });

    pathname?.includes("edit") &&
      router.replace("/dashboard/renter/be-the-first-to-know/manage-criteria");
    pathname?.includes("create") && router.back();
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4 className={style.formTitle}>Be The First to Know</h4>
        <HeaderButtons
          onSaveAndExit={handleSaveAndExit}
          onCancel={handleClearData}
          lastSlide={lastSlide}
          isPending={isPending}
          cancelBreakpoint="ssm"
        />
      </div>

      <div className="mt-0 w-full">
        <Progress
          value={progressValue as number}
          firstSlide={activeSlide === 1}
          lastSlide={activeSlide === BTFTKviews.length - 2} // setting it to last but one because of the success page
          hideDopeMessage
          hideGotThisMessage
          middleSlide={progressValue >= 40 && progressValue <= 50}
          shouldShowMotivationMessage={
            pathname?.includes("edit") ? false : true
          }
        />
      </div>
    </section>
  );
};

export default FirstToKnowHeader;
