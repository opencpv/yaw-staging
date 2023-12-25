"use client";

import { useModalFullscreenStore } from "@/store/modal/useModalStore";
import { useEffect } from "react";

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  const hideWindowScrollbar = useModalFullscreenStore(
    (state) => state.hideWindowScrollbar
  );

  useEffect(() => {
    if (hideWindowScrollbar) {
      document.body.classList.add("hidden-scrollbar");
    } else document.body.classList.remove("hidden-scrollbar");
  }, [hideWindowScrollbar]);

  return <>{children}</>;
};

export default PropertyLayout;
