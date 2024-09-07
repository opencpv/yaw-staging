import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "@/components/__shared/ui/logo";
import { useMenuStore } from "@/store/navmenu/useMenuStore";
import dynamic from "next/dynamic";
import { Button } from "../../button";
const MobileMenu = dynamic(() =>
  import("../MobileMenu").then((mod) => mod.MobileMenu),
);
const DesktopMenu = dynamic(() =>
  import("../DesktopMenu").then((mod) => mod.DesktopMenu),
);

const MenuArea = (props: any) => {
  const { setToggle } = useMenuStore();

  return (
    <div className={"flex flex-col"}>
      <div className="flex flex-col lg:gap-10">
        <div className={"flex-flex-col px-8"}>
          <div
            className={"flex w-full flex-row items-center justify-between pt-8"}
          >
            <div className="relative aspect-[106/86] h-full max-h-[86px] w-full max-w-[106px] 2xl:aspect-[150/122] 2xl:max-h-[122px] 2xl:max-w-[150px]">
              <Logo size="lg" />
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="relative transition-transform duration-300 hover:rotate-[360deg] lg:right-10"
              onClick={() => setToggle(false)}
            >
              <AiFillCloseCircle color="white" size={40} />
            </Button>
          </div>
        </div>
        <div className={"mt-10"}>
          <MobileMenu />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
};

export default MenuArea;
