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
    // if (!e || !e.target) {
    //   console.error("e or e.target is null in Switch.handleRoleSwitch");
    //   return;
    // }
    // const selectedRole = e.target.value as UserRole;
    // if (selectedRole !== ("" as UserRole)) {
    //   setCurrentRole(selectedRole);
    //   setIsSwitchingRole(true);
    // }
    // if (selectedRole !== ("" as UserRole)) {
    //   router.replace(`/dashboard/${selectedRole}/overview`); // For reason it doesn't work in the first if block
    // }
    // if (!router) {
    //   console.error("router is null in Switch.handleRoleSwitch");
    //   return;
    // }
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
