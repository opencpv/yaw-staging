"use client";
import Button from "@/components/__shared/ui/button/Button";
import { useDashboardMenuStore } from "@/store/navmenu/useDashboardMenuStore";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const PaginationMenuItem = ({ icon, label, href }: Props) => {
  const pathname = usePathname();
  const { setIsOpen } = useDashboardMenuStore();

  return (
    <Button
      href={href}
      className={`min-h-[4rem] max-w-full justify-start rounded-xl px-5 py-2 sm:min-h-[6rem] sm:justify-center sm:px-10 sm:py-5 ${
        pathname?.includes(href)
          ? "bg-primary-400 text-white"
          : "border border-[#B0B0B0] text-[#B0B0B0]"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div className="flex flex-row  gap-3 sm:flex-col sm:items-center ">
        <div className="shrink-0 text-3xl font-light">{icon}</div>
        <h3 className="capitalize">{label}</h3>
      </div>
    </Button>
  );
};

export default PaginationMenuItem;
