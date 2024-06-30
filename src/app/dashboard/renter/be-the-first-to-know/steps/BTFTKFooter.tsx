import { cn } from "@/lib/utils";
import { views as BTFTKViews } from "./BTFTKForm";
import { BTFTKStepsStore } from "@/store/dashboard/BTFTKStepsStore";
import Button from "@/components/__shared/ui/button/Button";
import { useFormikContext } from "formik";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/components/__shared/ui/modals/Modal";

type Props = {
  onClose: () => void;
};

const BTFTKFooter = ({ onClose }: Props) => {
  const { submitForm, resetForm, validateForm, errors, isSubmitting } =
    useFormikContext();
  const { activeSlide, setActiveSlide, firstSlide } = BTFTKStepsStore();
  const lastButOneSlide = activeSlide === BTFTKViews.length - 2;
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  //useEffect(() => {
  //  if (lastSlide) {
  //    setFirstToKnowFormData({
  //      ...(values as any), // set the values of the form to localStorage (which itself is a copy of initial values + local storage values)
  //    });
  //  }
  //}, [lastSlide, setFirstToKnowFormData, values, firstToKnowFormData]);

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      resetForm({});
      onClose();
    }
  };

  const handleForward = () => {
    validateForm();
    if (lastButOneSlide) {
      if (Object.keys(errors).length > 0) {
        onOpen();
      } else {
        setActiveSlide(activeSlide + 1);
        submitForm();
      }
    } else {
      setActiveSlide(activeSlide + 1);
    }
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
          color={!firstSlide ? "accent" : undefined}
          variant={!firstSlide ? "outline" : "default"}
          className={cn(
            "col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
            {
              "bg-primary-200/80 text-white hover:bg-primary-200": firstSlide,
            },
          )}
          onClick={handleBack}
        >
          {firstSlide ? "Cancel" : "Back"}
        </Button>
        <Button
          color="accent"
          className={cn(
            "col-span-1 h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
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
