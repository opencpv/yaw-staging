import React, { useCallback, useEffect } from "react";
import Progress from "@/app/dashboard/components/shared/ui/Progress";
import {
  BeMyAgentDefaultValues,
  BeMyAgentStepsStore,
} from "@/store/dashboard/BeMyAgentStepsStore";
import { useFormikContext } from "formik";
import { useLocalStorage } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useAddAgentRequest } from "../../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import style from "../../index.module.css";
import { getFormValues } from "../../utils";
import HeaderButtons from "@/components/__shared/ui/modals/steps/HeaderButtons";

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
    previousPath,
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

  const handleClearData = useCallback(() => {
    resetForm({});
    onClose();
    onCloseEditPage();
    setAgentRequest(null);
    localStorage.removeItem("bma-creation-steps");
    router.replace(previousPath || "/dashboard/renter/my-agent/agent");
  }, [
    resetForm,
    onClose,
    onCloseEditPage,
    setAgentRequest,
    previousPath,
    router,
  ]);

  useEffect(() => {
    if (
      isSuccess &&
      (pathname?.includes("edit") || pathname?.includes("create"))
    ) {
      handleClearData();
    }
    if (pathname?.includes("create")) handleActiveSlide();
  }, [isSuccess, pathname, handleActiveSlide, handleClearData]);

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
