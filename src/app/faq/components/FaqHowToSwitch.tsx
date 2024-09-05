"use client";
import { Tabs } from "@/components/__shared/ui/tabs/tabs";
import { caseInsensitiveCompare } from "@/lib/utils/stringManipulation";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const FaqHowToSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(
    pathname === "/faq" ? "FAQ" : "How To",
  );

  const handleTabClick = (tab: string) => {
    setActivePage(tab);
    router.push(caseInsensitiveCompare(tab, "faq") ? "/faq" : "/how-to", {
      scroll: false,
    });
  };

  return (
    <div className="my-8 w-fit rounded-xl border p-3">
      <Tabs
        options={["FAQ", "How To"]}
        selectedKey={activePage}
        onSelectionChange={handleTabClick}
        variant="rounded"
        size="md"
      />
    </div>
  );
};

export default FaqHowToSwitch;
