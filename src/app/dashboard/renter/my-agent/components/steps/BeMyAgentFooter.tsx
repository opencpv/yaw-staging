import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { views as BeMyAgentViews } from "./BeMyAgentForm";
import {
  BeMyAgentDefaultValues,
  BeMyAgentStepsStore,
} from "@/store/dashboard/BeMyAgentStepsStore";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import dynamic from "next/dynamic";
import FooterButtons from "@/components/__shared/ui/modals/steps/FooterButtons";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

const BeMyAgentFooter = () => {
  const { submitForm, validateForm, errors, isSubmitting, setSubmitting } =
    useFormikContext();
  const { activeSlide, setActiveSlide, firstSlide, lastSlide, agentRequest } =
    BeMyAgentStepsStore();

  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
    useLocalStorage<Partial<
      typeof BeMyAgentDefaultValues & { activeSlide: number }
    > | null>("bma-creation-steps");

  const lastButOneSlide = activeSlide === BeMyAgentViews.length - 2;
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  const handleBack = () => {
    setActiveSlide(activeSlide - 1);
    setBeMyAgentCreationSteps({
      ...BeMyAgentCreationSteps,
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
      setBeMyAgentCreationSteps({
        ...BeMyAgentCreationSteps,
        activeSlide: activeSlide + 1,
      });
    }
  };

  const handlePayment = () => {
    // Id can be gotten from agentRequest in BeMyAgentStepsStore
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
        className="max-w-md py-10"
      />
      <FooterButtons
        firstSlide={firstSlide}
        lastSlide={lastSlide}
        onBackward={handleBack}
        onForward={() => {
          lastSlide ? handlePayment() : handleForward();
        }}
        isSubmitting={isSubmitting}
        classNames={{
          forward: cn({
            hidden: agentRequest?.is_paid,
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

export default BeMyAgentFooter;
