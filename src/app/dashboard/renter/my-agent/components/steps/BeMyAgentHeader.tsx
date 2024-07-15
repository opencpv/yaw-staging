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
import { useAppStore } from "@/store/dashboard/AppStore";
import { useAddAgentRequest } from "../../services";
import { views as BeMyAgentViews } from "./BeMyAgentForm";

const BeMyAgentHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAppStore();
  const { values, resetForm } =
    useFormikContext<typeof BeMyAgentDefaultValues>();

  const [BeMyAgentCreationSteps, setBeMyAgentCreationSteps] = useLocalStorage<{
    activeSlide: number;
  }>("bma-creation-steps");

  const [BeMyAgentEditSteps, setBeMyAgentEditSteps] = useLocalStorage<
    { agentRequest: number; activeSlide: number }[]
  >("bma-edit-steps", []);

  const {
    firstSlide,
    lastSlide,
    progressValue,
    setActiveSlide,
    activeSlide,
    shouldShowMotivationMessage,
    setShouldShowMotivationMessage,
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
    } else if (!pathname?.includes("edit"))
      setActiveSlide(BeMyAgentCreationSteps?.activeSlide ?? 0);
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
  ]); // commented out to prevent infinite loop

  const handleBeMyAgentEditStepsStorage = () => {
    setBeMyAgentEditSteps((prevSteps) => {
      const updatedSteps = prevSteps.filter(
        (step) => step.agentRequest !== agentRequest?.id,
      );
      return [
        { agentRequest: agentRequest?.id as number, activeSlide: activeSlide },
        ...updatedSteps,
      ];
    });
    setBeMyAgentCreationSteps({ activeSlide: 0 });
  };

  const handleSaveAndExit = () => {
    handleBeMyAgentEditStepsStorage();
    const evicted = values.evicted === "Yes" ? true : false;
    const convicted = values.convicted === "Yes" ? true : false;
    const hasPets = values.hasPets === "Yes" ? true : false;
    const hasVehicles = values.hasVehicles === "Yes" ? true : false;
    addAgentRequest({
      search_title: values.searchTitle,
      location: values.location,
      max_beds: Number(values.bedMaximum),
      min_beds: Number(values.bedMinimum),
      max_price: Number(values.priceRangeMaximum),
      min_price: Number(values.priceRangeMinimum),
      property_type: values.preferredType,
      max_bathrooms: Number(values.bathroomMaximum),
      min_bathrooms: Number(values.bathroomMinimum),
      email: values.email,
      phone: values.whatsApp,
      preferred_contact_method: values.preferredMethodOfContact,
      features: values.requiredFeatures,
      move_in_date: values.moveInDate,
      moving_reason: values.purposeForMoving,
      city: values.city,
      country: values.country,
      employer: values.employer,
      employment_status: values.employmentStatus,
      employer_country: values.employerCountry,
      min_lease: Number(values.leaseTermMinimum),
      max_lease: Number(values.leaseTermMaximum),
      preferred_payment_option: values.paymentOption,
      first_name: values.firstName,
      last_name: values.lastName,
      evicted: evicted,
      convicted: convicted,
      has_pets: hasPets,
      has_vehicles: hasVehicles,
      current_address_1: values.currentAddress1,
      current_address_2: values.currentAddress2,
      title: values.title,
      job_title: values.jobTitle,
      monthly_income: values.monthlyIncome,
      monthly_income_currency: values.monthlyIncomeCurrency,
      marital_status: values.maritalStatus,
      tenants: values.tenants,
      age: values.age,
      id: agentRequest?.id,
      renter_id: user?.id,
      is_active: false,
      matched_properties: null,
    });

    pathname?.includes("edit") &&
      router.replace("/dashboard/renter/my-agent/agent");
    pathname?.includes("create") && router.back();
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
          shouldShowMotivationMessage={shouldShowMotivationMessage}
          setShouldShowMotivationMessage={setShouldShowMotivationMessage}
        />
      </div>
    </section>
  );
};

export default BeMyAgentHeader;
