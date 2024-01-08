import { useEffect } from "react";

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
