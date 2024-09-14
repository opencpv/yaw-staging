import { cn } from "@/lib/utils";
import { views as BTFTKViews } from "./BTFTKForm";
import {
  BTFTKDefaultValues,
  BTFTKStepsStore,
} from "@/store/dashboard/BTFTKStepsStore";
import { Button } from "@/components/__shared/ui/button";
import { useFormikContext } from "formik";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import FooterButtons from "@/components/__shared/ui/modals/steps/FooterButtons";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

const BTFTKFooter = () => {
  const { submitForm, validateForm, errors, isSubmitting, setSubmitting } =
    useFormikContext();
  const { activeSlide, setActiveSlide, firstSlide, lastSlide } =
    BTFTKStepsStore();
  const lastButOneSlide = activeSlide === BTFTKViews.length - 2;
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<Partial<
    typeof BTFTKDefaultValues & { activeSlide: number }
  > | null>("btftk-creation-steps");

  const handleBack = () => {
    setActiveSlide(activeSlide - 1);
    setBTFTKCreationSteps({
      ...BTFTKCreationSteps,
      activeSlide: activeSlide - 1,
    });
  };

  const handleForward = () => {
    validateForm();
    if (lastButOneSlide) {
      if (Object.keys(errors).length > 0) {
        onOpen();
      } else {
        submitForm();
      }
    } else {
      setActiveSlide(activeSlide + 1);
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
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
                <li key={value}>{value.split(" is ")[0]}</li>
              ))}
          </ul>
        }
        size="lg"
        className="py-10"
      />
      <section
        className={cn(
          "ml-auto grid grid-cols-2 items-center gap-2 max-sm:w-full xs:justify-end",
        )}
      >
        <FooterButtons
          firstSlide={firstSlide}
          lastSlide={lastSlide}
          onBackward={handleBack}
          onForward={handleForward}
          isSubmitting={isSubmitting}
          forwardContent={lastButOneSlide ? "Finish" : "Continue"}
        ></FooterButtons>
      </section>
    </>
  );
};

export default BTFTKFooter;
