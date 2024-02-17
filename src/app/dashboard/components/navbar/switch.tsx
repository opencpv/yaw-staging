"use client";
import capitalizeName, { LowerCase } from "@/lib/utils/stringManipulation";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { IoIosArrowDown } from "react-icons/io";
import Select from "../Select";
import { UserRole } from "../../types";
import { useRouter } from "next/navigation";

const Switch = () => {
  const router = useRouter();
  const { currentRole, setCurrentRole, setIsSwitchingRole } =
    useDashboardStore();

  const handleRoleSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSwitchingRole(true);
    setCurrentRole(e.target.value as UserRole);

    if (currentRole === "lister") router.push("/dashboard/renter/overview");
    else if (currentRole === "renter")
      router.push("/dashboard/lister/overview");
  };

  return (
    <button className="gap-2 text-white md:gap-5">
      <Select
        options={["Renter", "Lister"]}
        value={currentRole}
        className="mx-0 w-32"
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
