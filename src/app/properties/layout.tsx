"use client";

import { useModalFullscreenStore } from "@/store/modal/useModalStore";
import { useEffect } from "react";

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  const hideWindowScrollbar = useModalFullscreenStore(
    (state) => state.hideWindowScrollbar
  );

  useEffect(() => {
    if (hideWindowScrollbar) {
      setTimeout(() => {
        document.body.classList.add(
          "max-h-screen",
          "overflow-y-hidden",
          "hidden-scrollbar"
        );
      }, 300);
    } else {
      setTimeout(() => {
        document.body.classList.remove(
          "max-h-screen",
          "overflow-y-hidden",
          "hidden-scrollbar"
        );
      }, 1000);
    }
  }, [hideWindowScrollbar]);

  return <>{children}</>;
};

export default PropertyLayout;
