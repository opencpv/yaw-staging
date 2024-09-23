"use client";
import Loader from "@/components/__shared/ui/loader";
import capitalizeName, {
  caseInsensitiveCompare,
} from "@/lib/utils/stringManipulation";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";

const RoleSwitcherOverlay = () => {
  const { currentRole } = useDashboardStore();

  return (
    <section className="fixed inset-0 z-50 grid h-screen max-h-screen w-screen place-items-center overflow-x-hidden bg-white/50 p-10 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-5">
        <Loader />
        <h4 className="text-primary-500">
          Switching to{" "}
          <span className="font-semibold">{capitalizeName(currentRole)}</span>{" "}
          mode
          <span className="animate-pulse">... </span> Hang tight as we prepare
          your new{" "}
          {caseInsensitiveCompare(currentRole, "lister")
            ? "tools!"
            : "dashboard!"}
        </h4>
      </div>
    </section>
  );
};

export default RoleSwitcherOverlay;
