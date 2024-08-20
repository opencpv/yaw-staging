import React, { useCallback, useEffect } from "react";
import Progress from "@/app/dashboard/components/shared/ui/Progress";
import Button from "@/components/__shared/ui/button/Button";
import {
  BeMyAgentDefaultValues,
  BeMyAgentStepsStore,
} from "@/store/dashboard/BeMyAgentStepsStore";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useAddAgentRequest } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { LiaTimesSolid } from "react-icons/lia";
import { cn } from "@/lib/utils";
import style from "../../index.module.css";
import { getFormValues } from "../../utils";

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
  }, [setActiveSlide, activeSlide, BeMyAgentCreationSteps?.activeSlide]);

  useEffect(() => {
    if (
      isSuccess &&
      (pathname?.includes("edit") || pathname?.includes("create"))
    ) {
      resetForm({});
      onClose();
      onCloseEditPage();
      setAgentRequest(null);
      localStorage.removeItem("bma-creation-steps");
      pathname?.includes("edit") &&
        router.replace("/dashboard/renter/my-agent/agent");
      pathname?.includes("create") && router.back();
    }
    if (pathname?.includes("create")) handleActiveSlide();
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
  };

  const handleSaveAndExit = () => {
    addAgentRequest(
      getFormValues({
        ...values,
        renter_id: user?.id,
        id: agentRequest?.id,
        matched_properties: null,
      } as unknown as typeof BeMyAgentDefaultValues),
    );
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-5">
        <h4 className={style.formTitle}>Be My Agent</h4>
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
            className="border px-5 max-xsm:hidden"
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
