"use client";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { IoIosArrowDown } from "react-icons/io";

const Switch = () => {
  const { currentRole, setCurrentRole } = useDashboardStore();
  return (
    <button className="flex items-center gap-2 text-[#fff] md:gap-5">
      <div>{capitalizeName(currentRole)}</div>{" "}
      {/* TODO: implement switch appropriately*/}
      <IoIosArrowDown />
    </button>
  );
};

export default Switch;
