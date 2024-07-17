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
import { usePathname, useRouter } from "next/navigation";
import { useLocalStorage } from "@uidotdev/usehooks";

const BTFTKFooter = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { submitForm, resetForm, validateForm, errors, isSubmitting } =
    useFormikContext();
  const {
    activeSlide,
    setActiveSlide,
    firstSlide,
    lastSlide,
    onClose,
    setCriterion,
    onCloseEditPage,
  } = BTFTKStepsStore();
  const lastButOneSlide = activeSlide === BTFTKViews.length - 2;
  const { onOpenChange, isOpen, onOpen } = useDisclosure();

  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<Partial<
    typeof BTFTKDefaultValues & { activeSlide: number }
  > | null>("btftk-creation-steps");

  const handleBack = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
        activeSlide: activeSlide - 1,
      });
    } else {
      resetForm({});
      onClose();
      onCloseEditPage();
      setCriterion(null);
      localStorage.removeItem("btftk-creation-steps");
      pathname?.includes("edit") &&
        router.replace(
          "/dashboard/renter/be-the-first-to-know/manage-criteria",
        );
      pathname?.includes("create") && router.back();
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
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
        activeSlide: activeSlide + 1,
      });
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
          color="primary"
          variant="outline"
          className={cn(
            "col-span-1 sm:h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
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
            "col-span-1 sm:h-[58px] rounded-lg font-semibold focus:outline-none xs:text-base sm:min-w-[16rem]",
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
