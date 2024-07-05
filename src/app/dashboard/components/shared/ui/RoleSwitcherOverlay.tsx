"use client";
import Loader from "@/components/__shared/ui/loader/Loader";
import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import React, { useEffect, useRef, useState } from "react";
import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";

type Props = {};

const RoleSwitcherOverlay = (props: Props) => {
  const { isSwitchingRole, currentRole, setIsSwitchingRole } =
    useDashboardStore();
  const [showButton, setShowButton] = useState(false);

  const handleCancel = () => {
    setIsSwitchingRole(false);
  };

  useEffect(() => {
    if (isSwitchingRole) {
      setTimeout(() => {
        setShowButton(true);
      }, 5000);
    }
  }, [isSwitchingRole]);

  return (
    <section className="fixed inset-0 z-50 flex h-screen max-h-screen w-screen items-center justify-center overflow-x-hidden bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-5">
        <Loader />
        <h4 className="text-primary-500">
          Getting {currentRole}&apos;s dashboard{" "}
          <span className="animate-pulse">...</span>{" "}
        </h4>
        {/* <Button
          variant="outline"
          color="black"
          radius="full"
          className={`transition-opacity duration-300 ${
            showButton
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={handleCancel}
        >
          Cancel
        </Button> */}
      </div>
    </section>
  );
};

export default RoleSwitcherOverlay;
