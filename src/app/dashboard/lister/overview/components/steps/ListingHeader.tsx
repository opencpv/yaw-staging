import React, { useCallback, useEffect } from "react";
import Progress from "@/app/dashboard/components/shared/ui/Progress";
import {
  ListingDefaultValues,
  ListingStepsStore,
} from "@/store/dashboard/ListingStepsStore";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useAddListing } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getFormValues } from "../../utils";
import HeaderButtons from "@/components/__shared/ui/modals/steps/HeaderButtons";

const ListingHeader = () => {
  const { user } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();
  const { values, resetForm } = useFormikContext<typeof ListingDefaultValues>();

  const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<{
    activeSlide: number;
  }>("listing-creation-steps");

  const [listingEditSteps, setListingEditSteps] = useLocalStorage<
    { listing: number; activeSlide: number }[]
  >("listing-edit-steps", []);

  const {
    lastSlide,
    progressValue,
    setActiveSlide,
    activeSlide,
    closeCreatePage,
    closeEditPage,
    setListing,
    listing,
    previousPath,
  } = ListingStepsStore();

  const { mutate: addListing, isPending, isSuccess } = useAddListing();

  const handleActiveSlide = useCallback(() => {
    setActiveSlide(listingCreationSteps?.activeSlide ?? activeSlide);
  }, [setActiveSlide, activeSlide, listingCreationSteps?.activeSlide]);

  const handleClearData = useCallback(() => {
    resetForm({});
    closeCreatePage();
    closeEditPage();
    setListing(null);
    localStorage.removeItem("listing-creation-steps");
    router.replace(previousPath || "/dashboard/lister/properties");
  }, [
    resetForm,
    closeCreatePage,
    closeEditPage,
    setListing,
    previousPath,
    router,
  ]);

  useEffect(() => {
    // when it's successful after clicking save and exit
    if (
      isSuccess &&
      (pathname?.includes("edit") || pathname?.includes("create"))
    ) {
      handleClearData();
    }
    if (pathname?.includes("create")) handleActiveSlide();
  }, [isSuccess, pathname, handleActiveSlide, handleClearData]);

  const handleListingEditStepsStorage = () => {
    setListingEditSteps((prevSteps) => {
      const updatedSteps = prevSteps.filter(
        (step) => step.listing !== listing?.id,
      );
      return [
        { listing: listing?.id as number, activeSlide: activeSlide },
        ...updatedSteps,
      ];
    });
    setListingCreationSteps({ activeSlide: 0 });
  };

  const handleSaveAndExit = () => {
    handleListingEditStepsStorage();
    addListing(
      getFormValues({
        ...values,
        owner_uid: user?.id,
        is_published: false,
        is_complete: false,
        id: listing?.id,
      } as unknown as typeof ListingDefaultValues),
    );
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4 className="w-fit">Create Listing</h4>
        <HeaderButtons
          onSaveAndExit={handleSaveAndExit}
          onCancel={handleClearData}
          lastSlide={lastSlide}
          isPending={isPending}
        />
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
