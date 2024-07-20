import { cn } from "@/lib/utils";
import { views as BTFTKViews } from "./BTFTKForm";
import {
  BTFTKDefaultValues,
  BTFTKStepsStore,
} from "@/store/dashboard/BTFTKStepsStore";
import Button from "@/components/__shared/ui/button/Button";
import { useFormikContext } from "formik";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/components/__shared/ui/modals/Modal";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";

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
                <li key={value}>{value.split("is")[0]}</li>
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
            "col-span-1 rounded-lg font-semibold focus:outline-none xs:text-base sm:h-[58px] sm:min-w-[16rem]",
          )}
          onClick={() => {
            handleForward();
          }}
          type="submit"
          isLoading={isSubmitting}
        >
          {lastButOneSlide ? "Finish" : "Continue"}
        </Button>
      </section>
    </>
  );
};

export default BTFTKFooter;
