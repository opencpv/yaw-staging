"use client";

import { useHideDocumentScrollBar } from "@/lib/custom-hooks/useWindowEvents";
import { useModalFullscreenStore } from "@/store/modal/useModalStore";
import { useEffect } from "react";

const PropertyLayout = ({ children }: { children: React.ReactNode }) => {
  const hideWindowScrollbar = useModalFullscreenStore(
    (state) => state.hideWindowScrollbar,
  );

  useHideDocumentScrollBar(hideWindowScrollbar);

  return <>{children}</>;
};

export default PropertyLayout;
