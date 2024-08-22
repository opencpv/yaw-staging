"use client";
import Loader from "@/components/__shared/ui/loader";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";

const RoleSwitcherOverlay = () => {
  const { currentRole } = useDashboardStore();

  return (
    <section className="fixed inset-0 z-50 flex h-screen max-h-screen w-screen items-center justify-center overflow-x-hidden bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-5">
        <Loader />
        <h4 className="text-primary-500">
          Setting up {currentRole}&apos;s dashboard{" "}
          <span className="animate-pulse">...</span>{" "}
        </h4>
      </div>
    </section>
  );
};

export default RoleSwitcherOverlay;
