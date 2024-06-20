import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import React from "react";
import { FaPlus } from "react-icons/fa6";

type Props = {};

const AddItemButton = (props: Props) => {
  const { currentRole } = useDashboardStore();
  const floatButtonRef = React.useRef<HTMLSpanElement>(null);
  const [isButtonInViewport, setIsButtonInViewport] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const rect = floatButtonRef.current?.getBoundingClientRect() as DOMRect;
      setIsButtonInViewport(
        rect?.top >= 0 &&
          rect?.left >= 0 &&
          rect?.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect?.right <=
            (window.innerWidth || document.documentElement.clientWidth),
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Button
        href={`/dashboard/${currentRole}/sell-products/add-new-product`}
        color="primary"
        className={`${
          isButtonInViewport ? "whitespace-nowrap max-xs:hidden" : "hidden"
        }`}
      >
        Add Item
      </Button>
      <span ref={floatButtonRef} className="max-xs:hidden">
        <Button
          href={`/dashboard/${currentRole}/sell-products/add-new-product`}
          color="primary"
          className={cn(
            "fixed bottom-12 right-5 z-10 h-[4.5rem] rounded-3xl shadow-lg transition-all",
            {
              "pointer-events-none opacity-0": isButtonInViewport,
            },
          )}
        >
          <FaPlus size={20} />
        </Button>
      </span>
      <Button
        href={`/dashboard/${currentRole}/sell-products/add-new-product`}
        color="primary"
        className={cn(
          "fixed bottom-12 right-5 z-10 h-[4.5rem] rounded-3xl shadow-lg transition-all xs:hidden",
        )}
      >
        <FaPlus size={20} />
      </Button>
    </>
  );
};

export default AddItemButton;
