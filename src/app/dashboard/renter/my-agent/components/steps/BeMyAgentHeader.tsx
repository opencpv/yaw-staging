import React, { useEffect } from "react";
import Progress from "../../../../components/shared/Progress";
import Button from "@/components/__shared/ui/button/Button";
import {
  BeMyAgentDefaultValues,
  BeMyAgentStepsStore,
} from "@/store/dashboard/BeMyAgentStepsStore";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useAddAgentRequest } from "../../services";
import { views as BeMyAgentViews } from "./BeMyAgentForm";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useAppStore } from "@/store/dashboard/AppStore";

const BeMyAgentHeader = () => {
  const { user } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();
  const { values, resetForm } =
    useFormikContext<typeof BeMyAgentDefaultValues>();

  const [BeMyAgentCreationSteps] = useLocalStorage<{
    activeSlide: number;
  }>("bma-creation-steps");

  const {
    firstSlide,
    lastSlide,
    progressValue,
    setActiveSlide,
    activeSlide,
    onClose,
    onCloseEditPage,
    setAgentRequest,
    agentRequest,
  } = BeMyAgentStepsStore();

  const {
    mutate: addAgentRequest,
    isError,
    isPending,
    isSuccess,
  } = useAddAgentRequest();

  useEffect(() => {
    if (isSuccess) {
      resetForm({});
      onClose();
      onCloseEditPage();
      setAgentRequest(null);
      localStorage.removeItem("bma-creation-steps");
      pathname?.includes("edit") &&
        router.replace("/dashboard/renter/my-agent/agent");
      pathname?.includes("create") && router.back();
    }
    if (pathname?.includes("edit")) {
      setActiveSlide(BeMyAgentViews.length - 1);
    } else if (pathname?.includes("edit") !== true)
      setActiveSlide(BeMyAgentCreationSteps?.activeSlide ?? activeSlide);
    else {
      setActiveSlide(0);
    }
  }, [
    isSuccess,
    onClose,
    onCloseEditPage,
    pathname,
    setActiveSlide,
    setAgentRequest,
    router,
    resetForm,
    agentRequest?.id,
    //BTFTKEditSteps,
    //BTFTKCreationSteps?.activeSlide,
  ]); // commented out to prevent maxiumum depth

  const handleSaveAndExit = () => {
    const evicted = values.evicted === "Yes" ? true : false;
    const convicted = values.convicted === "Yes" ? true : false;
    const hasPets = values.hasPets === "Yes" ? true : false;
    const hasVehicles = values.hasVehicles === "Yes" ? true : false;

    addAgentRequest({
      search_title: values.searchTitle,
      location: values.location,
      min_beds: values.bedMinimum,
      max_beds: values.bedMaximum,
      min_price: values.priceRangeMinimum,
      max_price: values.priceRangeMaximum,
      min_bathrooms: values.bathroomMinimum,
      max_bathrooms: values.bathroomMaximum,
      property_type: values.preferredType,
      email: values.email,
      phone: values.whatsApp,
      preferred_contact_method: capitalizeName(values.preferredMethodOfContact),
      features: values.requiredFeatures,
      move_in_date: values.moveInDate,
      moving_reason: values.purposeForMoving,
      country: values.country,
      city: values.city,
      employer: values.employer,
      employment_status: values.employmentStatus,
      employer_country: values.employerCountry,
      min_lease: values.leaseTermMinimum,
      max_lease: values.leaseTermMaximum,
      preferred_payment_option: values.paymentOption,
      title: values.title,
      first_name: values.firstName,
      last_name: values.lastName,
      evicted: evicted,
      convicted: convicted,
      has_pets: hasPets,
      has_vehicles: hasVehicles,
      current_address_1: values.currentAddress1,
      current_address_2: values.currentAddress2,
      job_title: values.jobTitle,
      monthly_income: values.monthlyIncome,
      monthly_income_currency: values.monthlyIncomeCurrency,
      marital_status: values.maritalStatus,
      tenants: values.tenants,
      age: values.age,
      renter_id: user?.id,
      id: agentRequest?.id,
      matched_properties: null,
    });
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4>Be My Agent</h4>
        <Button
          color="white"
          greenHover
          radius="full"
          className="border px-5"
          isLoading={isPending}
          disabled={isError}
          onClick={handleSaveAndExit}
        >
          Save & Exit
        </Button>
      </div>

      <div className="mt-0 w-full">
        <Progress
          value={progressValue as number}
          firstSlide={firstSlide}
          lastSlide={lastSlide}
          shouldShowMotivationMessage={
            pathname?.includes("edit") || agentRequest?.id ? false : true
          }
        />
      </div>
    </section>
  );
};

export default BeMyAgentHeader;
