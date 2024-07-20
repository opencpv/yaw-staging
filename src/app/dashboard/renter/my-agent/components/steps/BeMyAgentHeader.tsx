import React, { useCallback, useEffect } from "react";
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
import capitalizeName from "@/lib/utils/stringManipulation";
import { useAppStore } from "@/store/dashboard/AppStore";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";

const BeMyAgentHeader = () => {
  const { user } = useAppStore();
  const router = useRouter();
  const pathname = usePathname();
  const { values, resetForm, setSubmitting } =
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

  const handleActiveSlide = useCallback(() => {
    setActiveSlide(BeMyAgentCreationSteps?.activeSlide ?? activeSlide);
  }, [
    setActiveSlide,
    activeSlide,
    BeMyAgentCreationSteps?.activeSlide,])

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
    if (pathname?.includes("create"))
    handleActiveSlide();
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
    lastSlide,
    setSubmitting,
    handleActiveSlide,
  ]);

  const handleCancel = () => {
    resetForm({});
      onClose();
      onCloseEditPage();
      setAgentRequest(null);
      localStorage.removeItem("bma-creation-steps");
      pathname?.includes("edit") &&
        router.replace("/dashboard/renter/my-agent/agent");
      pathname?.includes("create") && router.back();
  }

  const handleSaveAndExit = () => {

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
      evicted: values.evicted,
      convicted: values.convicted,
      has_pets: values.hasPets,
      has_vehicles: values.hasVehicles,
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
        <span className="flex gap-3 items-center">
          {/* For very small screens */}
        <Button
          isIconOnly
          color="white"
          greenHover
          radius="full"
          className="border px-3 py-3 rounded-full xsm:hidden"
          onClick={handleCancel}
        >
            <LiaTimesSolid />
        </Button>
        <Button
          color="white"
          greenHover
          radius="full"
          className="border px-5 max-xsm:hidden"
          onClick={handleCancel}
        >
            {lastSlide ? "Exit" : "Cancel"}
        </Button>
          <Button
          color="white"
          greenHover
          radius="full"
          className={cn("border px-5", { hidden: lastSlide})}
          isLoading={isPending}
          disabled={isError}
          onClick={handleSaveAndExit}
        >
          Save & Exit
        </Button>
        </span>
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
