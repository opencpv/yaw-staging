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
      className={`min-h-[6rem] rounded-xl px-10 py-5 ${
        pathname?.includes(href)
          ? "bg-primary-400 text-white"
          : "border border-[#B0B0B0] text-[#B0B0B0]"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="shrink-0 text-3xl font-light">{icon}</div>
        <h3 className="capitalize">{label}</h3>
      </div>
    </Button>
  );
};

export default PaginationMenuItem;
