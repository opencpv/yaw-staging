import { RefObject, useEffect } from "react";

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
  block: "start" | "center" | "end" | "nearest" = "start"
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
