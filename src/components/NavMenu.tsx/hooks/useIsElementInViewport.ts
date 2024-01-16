import { RefObject, useEffect, useState } from "react";

export const useIsElementInViewport = (
  elementRef: RefObject<HTMLElement>,
  parentRef: RefObject<HTMLElement>
) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const handleIsInViewport = () => {
      if (elementRef.current && parentRef.current) {
        const rect = elementRef.current.getBoundingClientRect();

        let viewportCheck =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= // TODO: investigate why .375 is deducted from the rect.bottom
                                  // and correct it if necessary
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

            // console.log(viewportCheck)
        setIsInViewport(viewportCheck);
      }
    };
    parentRef.current?.addEventListener("scroll", handleIsInViewport);
    window.addEventListener("resize", handleIsInViewport)
  }, [elementRef, parentRef]);

  return isInViewport;
};
