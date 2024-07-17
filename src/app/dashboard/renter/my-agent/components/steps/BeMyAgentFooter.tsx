import React from "react";
import { cn } from "@/lib/utils";
import { views as BeMyAgentViews } from "./BeMyAgentForm";
import {
  BeMyAgentDefaultValues,
  BeMyAgentStepsStore,
} from "@/store/dashboard/BeMyAgentStepsStore";
import Button from "@/components/__shared/ui/button/Button";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/components/__shared/ui/modals/Modal";

const BeMyAgentFooter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { submitForm, resetForm, validateForm, errors } = useFormikContext();
  const {
    activeSlide,
    setActiveSlide,
    firstSlide,
    lastSlide,
    onClose,
    setAgentRequest,
    agentRequest,
    onCloseEditPage,
  } = BeMyAgentStepsStore();

  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] =
    useLocalStorage<Partial<
      typeof BeMyAgentDefaultValues & { activeSlide: number }
    > | null>("bma-creation-steps");

  const lastButOneSlide = activeSlide === BeMyAgentViews.length - 2;
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
      setBeMyAgentCreationSteps({
        ...BeMyAgentCreationSteps,
        activeSlide: activeSlide - 1,
      });
    } else {
      resetForm({});
      onClose();
      onCloseEditPage();
      setAgentRequest(null);
      localStorage.removeItem("bma-creation-steps");
      pathname?.includes("edit") &&
        router.replace("/dashboard/renter/my-agent/agent");
      pathname?.includes("create") && router.back();
    }
  };

  const handleForward = () => {
    validateForm();
    // validate the form on last but one slide
    if (lastButOneSlide) {
      if (Object.keys(errors).length > 0) {
        onOpen();
      } else {
        setActiveSlide(activeSlide + 1);
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
    // matched_properties needs to be set to []
    // maybe created_at needs to be set to now. I am not sure about that.
  };

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
                <li key={value}>{value.split("is")[0]}</li> // Try to get actual field name
              ))}
          </ul>
        }
        size="lg"
        className="max-w-md py-10"
      />

      <section
        className={cn(
          "ml-auto grid grid-cols-2 items-center gap-2 max-sm:w-full xs:justify-end",
        )}
      >
        <Button
          color="primary"
          variant="outline"
          className={cn(
            "col-span-1 rounded-lg font-semibold focus:outline-none xs:text-base sm:h-[58px] sm:min-w-[16rem]",
            {
              invisible: firstSlide || lastSlide,
            },
          )}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          color="primary"
          className={cn(
            "col-span-1 whitespace-nowrap rounded-lg font-semibold focus:outline-none xs:text-base sm:h-[58px] sm:min-w-[16rem]",
            {
              hidden: agentRequest?.is_paid,
            },
          )}
          onClick={() => {
            lastSlide ? handlePayment() : handleForward();
          }}
          type={lastSlide ? "button" : "submit"}
        >
          {lastSlide
            ? "Proceed to pay"
            : lastButOneSlide
              ? "Summary"
              : "Continue"}
        </Button>
      </section>
    </>
  );
};

export default BeMyAgentFooter;
