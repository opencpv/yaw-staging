import React, { useEffect } from "react";
import Progress from "@/app/dashboard/components/shared/Progress";
import Button from "@/components/__shared/ui/button/Button";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";
import { useFormikContext } from "formik";
import { BTFTKDefaultValues, views as BTFTKviews } from "./BTFTKForm";
import { useAddSearchCriteria } from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";

type Props = {
  onClose: () => void;
};

const FirstToKnowHeader = ({ onClose }: Props) => {
  const { user } = useAppStore();
  const { values } = useFormikContext<typeof BTFTKDefaultValues>();

  const {
    progressValue,
    activeSlide,
    shouldShowMotivationMessage,
    setShouldShowMotivationMessage,
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
      onClose();
    }
  }, [isSuccess, onClose]);

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
          onClick={() => {
            addSearchCriteria({
              title: values.searchTitle,
              location: values.location,
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
              renter_id: user?.id,
              is_active: false,
            });
          }}
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
