import { useIntersectionObserver as useIntOb } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [intersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const [ref, entry] = useIntOb({ threshold: 0, ...options });

  useEffect(() => {
    // !intersecting && entry?.isIntersecting && setIntersecting(true);
    if (entry?.isIntersecting) {
      setIntersecting(true);
      setHasIntersected(true);
    } else setIntersecting(false);
  }, [entry?.isIntersecting, intersecting]);

  return { ref, entry, isIntersecting: intersecting, hasIntersected };
};
