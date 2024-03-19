"use client";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { IoIosArrowDown } from "react-icons/io";
import Select from "../shared/ui/Select";
import { UserRole } from "../../types";
import { useRouter } from "next/navigation";

const Switch = () => {
  const router = useRouter();
  const { currentRole, setCurrentRole, setIsSwitchingRole } =
    useDashboardStore();

  const handleRoleSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e || !e.target) {
      console.error("e or e.target is null in Switch.handleRoleSwitch");
      return;
    }
    const selectedRole = e.target.value as UserRole;
    if (selectedRole === currentRole) {
      router.push(`/dashboard/${currentRole}/overview`);
    }
    setCurrentRole(selectedRole);
    setIsSwitchingRole(true);
    if (!router) {
      console.error("router is null in Switch.handleRoleSwitch");
      return;
    }
    router.push(`/dashboard/${selectedRole}/overview`);
  };

  return (
    <button className="gap-2 text-white md:gap-5">
      <Select
        options={["Renter", "Lister"]}
        value={currentRole}
        className="mx-0 w-32 hover:bg-transparent"
        variant="ghost"
        color="primary"
        selectorIcon={<IoIosArrowDown />}
        selectorIconClassName="text-white"
        handleSelectionChange={handleRoleSwitch}
      />
    </button>
  );
};

export default Switch;
