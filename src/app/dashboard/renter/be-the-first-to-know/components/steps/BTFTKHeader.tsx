import React, { useEffect } from "react";
import Progress from "@/app/dashboard/components/shared/Progress";
import Button from "@/components/__shared/ui/button/Button";
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
    activeSlide,
    shouldShowMotivationMessage,
    setShouldShowMotivationMessage,
    onClose,
    onCloseEditPage,
    setCriterion,
    criterion,
  } = BTFTKStepsStore();

  // Save to DB
  const {
    mutateAsync: addSearchCriteria,
    isError,
    isPending,
    isSuccess,
  } = useAddSearchCriteria();

  useEffect(() => {
    if (isSuccess) {
      resetForm({});
      onClose();
      onCloseEditPage();
      setCriterion(null);
      localStorage.removeItem("btftk-creation-steps");
      router.push("/dashboard/renter/be-the-first-to-know/manage-criteria");
    }
    if (pathname?.includes("edit")) {
      setActiveSlide(
        BTFTKEditSteps?.find((step) => step.criterion === criterion?.id)
          ?.activeSlide ?? 1,
      );
    } else if (!pathname?.includes("edit"))
      setActiveSlide(BTFTKCreationSteps?.activeSlide ?? 0);
    else {
      setActiveSlide(0);
    }
  }, [
    isSuccess,
    onClose,
    onCloseEditPage,
    pathname,
    setActiveSlide,
    setCriterion,
    router,
    resetForm,
    criterion?.id,
    //BTFTKEditSteps,
    //BTFTKCreationSteps?.activeSlide,
  ]); // commented out to prevent infinite loop

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
      max_beds: Number(values.bedMaximum),
      min_beds: Number(values.bedMinimum),
      max_price: Number(values.priceRangeMaximum),
      min_price: Number(values.priceRangeMinimum),
      property_type: values.preferredType,
      max_bathrooms: Number(values.bathroomMaximum),
      min_bathrooms: Number(values.bathroomMinimum),
      email: values.email,
      phone: values.whatsApp,
      preferred_contact_method: values.preferredMethodOfContact,
      features: values.requiredFeatures,
      keywords: values.specialKeywords,
      id: criterion?.id,
      renter_id: user?.id,
      is_active: false,
      matched_properties: null,
    });

    pathname?.includes("edit") && router.replace("/dashboard/renter/be-the-first-to-know/manage-criteria"); 
    pathname?.includes("create") && router.back();
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4 className="font-semibold">Be The First to Know</h4>
        <Button
          color="white"
          greenHover
          radius="full"
          className="border px-5"
          isLoading={isPending}
          disabled={isError}
          onClick={handleSaveAndExit}
        >
          Save & Exit
        </Button>
      </div>

      <div className="mt-0 w-full">
        <Progress
          value={progressValue as number}
          firstSlide={activeSlide === 1}
          lastSlide={activeSlide === BTFTKviews.length - 2} // setting it to last but one because of the success page
          hideDopeMessage
          hideGotThisMessage
          middleSlide={progressValue >= 40 && progressValue <= 50}
          shouldShowMotivationMessage={shouldShowMotivationMessage}
          setShouldShowMotivationMessage={setShouldShowMotivationMessage}
        />
      </div>
    </section>
  );
};

export default FirstToKnowHeader;
