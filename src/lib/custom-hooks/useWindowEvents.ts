import React, { RefObject, useEffect, useState } from "react";

export const useHashChangeScroll = (amount = 200) => {
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo({
        top: window.scrollY - amount,
        behavior: "smooth",
      });
    };

    scrollTop();

    window.addEventListener("hashchange", scrollTop);

    return () => {
      window.removeEventListener("hashchange", scrollTop);
    };
  }, [amount]);
};

export const useScrollIntoView = (
  refElement: RefObject<HTMLElement>,
  block: "start" | "center" | "end" | "nearest" = "start",
) => {
  useEffect(() => {
    if (refElement.current) {
      refElement.current.scrollIntoView({
        block: block,
        inline: "nearest",
        behavior: "smooth",
      });
    }
  }, [refElement, block]);
};

export const useHideDocumentScrollBar = (state: boolean) => {
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        document.body.classList.add(
          "max-h-screen",
          "overflow-y-hidden",
          "hidden-scrollbar",
        );
      }, 300);
    } else {
      setTimeout(() => {
        document.body.classList.remove(
          "max-h-screen",
          "overflow-y-hidden",
          "hidden-scrollbar",
        );
      }, 1000);
    }
  }, [state]);
};

export const useScrollBoundingClient = (
  // !! discontinued temporarily
  childRef: React.RefObject<HTMLElement>,
  parentRef?: React.RefObject<HTMLElement>,
) => {
  const [hide, setHide] = useState(false);

  const handleScroll = () => {
    if (parentRef?.current && childRef.current) {
      parentRef.current.addEventListener("scroll", () => {
        const menuRect = parentRef.current?.getBoundingClientRect();
        const bottomLinksRect = childRef.current?.getBoundingClientRect();

        if (menuRect && bottomLinksRect) {
          if (menuRect?.bottom + 50 >= bottomLinksRect?.top) {
            setHide(true);
          }
        }
      });
    } else if (childRef?.current) {
      // use window as parent
    }
  };

  if (parentRef?.current) {
    parentRef.current.addEventListener("scroll", handleScroll);
  }

  return { hide };
};
