"use client";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { Select } from "@/components/__shared/ui/form/select";
import { UserRole } from "../../types";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import capitalizeName from "@/lib/utils/stringManipulation";

const Switch = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { currentRole, setCurrentRole, setIsSwitchingRole } =
    useDashboardStore();

  const handleRoleSwitch = (value: string) => {
    const role = value.toUpperCase();
    const path = value.toLowerCase();
    setCurrentRole(role as UserRole);
    setIsSwitchingRole(true);
    router.replace(`/dashboard/${path}/overview`);
  };

  return (
    <div
      className={cn(
        "gap-2 text-primary-500 ssm:text-white md:gap-5",
        className,
      )}
    >
      <Select
        options={["Renter", "Lister"]}
        value={capitalizeName(currentRole)}
        variant="ghost"
        classNames={{ trigger: "w-[90px]" }}
        color="primary"
        onValueChange={handleRoleSwitch}
      />
    </div>
  );
};

export default Switch;
