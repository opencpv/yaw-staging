import React, { useCallback, useEffect } from "react";
import Progress from "../../../../components/shared/Progress";
import Button from "@/components/__shared/ui/button/Button";
import {
  ListingDefaultValues,
  ListingStepsStore,
} from "@/store/dashboard/ListingStepsStore";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useAddListing } from "../../services";
import { convertYesNoToBoolean } from "@/lib/utils/stringManipulation";
import { useAppStore } from "@/store/dashboard/AppStore";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";
import { getFormValues } from "../../utils";

const ListingHeader = () => {
  const { user } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();
  const { values, resetForm, setSubmitting } =
    useFormikContext<typeof ListingDefaultValues>();

  const [ListingCreationSteps] = useLocalStorage<{
    activeSlide: number;
  }>("listing-creation-steps");

  const {
    firstSlide,
    lastSlide,
    progressValue,
    setActiveSlide,
    activeSlide,
    onClose,
    onCloseEditPage,
    setListing,
    listing,
  } = ListingStepsStore();

  const { mutate: addListing, isPending, isSuccess } = useAddListing();

  const handleActiveSlide = useCallback(() => {
    setActiveSlide(ListingCreationSteps?.activeSlide ?? activeSlide);
  }, [setActiveSlide, activeSlide, ListingCreationSteps?.activeSlide]);

  useEffect(() => {
    if (isSuccess) {
      resetForm({});
      onClose();
      onCloseEditPage();
      setListing(null);
      localStorage.removeItem("listing-creation-steps");
      pathname?.includes("edit") &&
        router.replace("/dashboard/lister/overview");
      pathname?.includes("create") && router.back();
    }
    if (pathname?.includes("create")) handleActiveSlide();
  }, [
    isSuccess,
    onClose,
    onCloseEditPage,
    pathname,
    setActiveSlide,
    setListing,
    router,
    resetForm,
    listing?.id,
    lastSlide,
    setSubmitting,
    handleActiveSlide,
  ]);

  const handleCancel = () => {
    resetForm({});
    onClose();
    onCloseEditPage();
    setListing(null);
    localStorage.removeItem("listing-creation-steps");
    pathname?.includes("edit") && router.replace("/dashboard/lister/overview");
    pathname?.includes("create") && router.back();
  };

  const handleSaveAndExit = () => {
    addListing(getFormValues({...values, 
      owner_uid: user?.id,
      is_published: false,
      is_complete: false,
      id: listing?.id,
    } as unknown as typeof ListingDefaultValues))
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4>Create Listing</h4>
        <span className="flex items-center gap-3">
          {/* For very small screens */}
          <Button
            isIconOnly
            color="white"
            greenHover
            radius="full"
            className="rounded-full border px-3 py-3 xsm:hidden"
            onClick={handleCancel}
          >
            <LiaTimesSolid />
          </Button>
          <Button
            color="white"
            greenHover
            radius="full"
            className="px-5 border max-xsm:hidden"
            onClick={handleCancel}
          >
            {lastSlide ? "Exit" : "Cancel"}
          </Button>
          <Button
            color="white"
            greenHover
            radius="full"
            className={cn("border px-5", { hidden: lastSlide })}
            isLoading={isPending}
            onClick={handleSaveAndExit}
          >
            Save & Exit
          </Button>
        </span>
      </div>

      <div className="mt-0 w-full">
        <Progress
          value={progressValue as number}
          firstSlide={activeSlide === 1}
          lastSlide={lastSlide}
          shouldShowMotivationMessage={
            pathname?.includes("edit") || listing?.id ? false : true
          }
        />
      </div>
    </section>
  );
};

export default ListingHeader;
