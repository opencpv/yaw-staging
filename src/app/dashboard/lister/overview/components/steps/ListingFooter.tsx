import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { views as ListingViews } from "./ListingForm";
import {
  ListingDefaultValues,
  ListingStepsStore,
} from "@/store/dashboard/ListingStepsStore";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import dynamic from "next/dynamic";
import FooterButtons from "@/components/__shared/ui/modals/steps/FooterButtons";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

const ListingFooter = () => {
  const { submitForm, validateForm, errors, isSubmitting, setSubmitting } =
    useFormikContext();
  const { activeSlide, setActiveSlide, firstSlide, lastSlide, listing } =
    ListingStepsStore();

  const [ListingCreationSteps, setListingCreationSteps] =
    useLocalStorage<Partial<
      typeof ListingDefaultValues & { activeSlide: number }
    > | null>("listing-creation-steps");

  const lastButOneSlide = activeSlide === ListingViews.length - 2;
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  const handleBack = () => {
    setActiveSlide(activeSlide - 1);
    setListingCreationSteps({
      ...ListingCreationSteps,
      activeSlide: activeSlide - 1,
    });
  };

  const handleForward = () => {
    validateForm();
    // validate the form on last but one slide
    if (lastButOneSlide) {
      if (Object.keys(errors).length > 0) {
        onOpen();
      } else {
        submitForm();
      }
    } else {
      setActiveSlide(activeSlide + 1);
      setListingCreationSteps({
        ...ListingCreationSteps,
        activeSlide: activeSlide + 1,
      });
    }
  };

  useEffect(() => {
    if (lastSlide) {
      setSubmitting(false);
    }
  }, [lastSlide, setSubmitting]);

  return (
    <>
      <Modal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        header={<h3>Please address the required fields</h3>}
        body={
          <ul className="list-disc pl-10">
            {errors &&
              Object.values(errors).map((value: any) => (
                <li key={value}>{value.split(" is ")[0]}</li> // Try to get actual field name
              ))}
          </ul>
        }
        size="lg"
        className="py-10"
      />
      <FooterButtons
        firstSlide={firstSlide}
        lastSlide={lastSlide}
        onBackward={handleBack}
        onForward={handleForward}
        isSubmitting={isSubmitting}
        classNames={{
          forward: cn({
            hidden: listing?.is_paid,
          }),
        }}
        forwardContent={
          lastSlide
            ? "Proceed to pay"
            : lastButOneSlide
              ? "Summary"
              : "Continue"
        }
      ></FooterButtons>
    </>
  );
};

export default ListingFooter;
