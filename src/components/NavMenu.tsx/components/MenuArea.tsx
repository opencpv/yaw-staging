import React from "react";
import { MobileMenu } from "../MobileMenu";
import { DesktopMenu } from "../DesktopMenu";
import { AiFillCloseCircle } from "react-icons/ai";
import Logo from "@/components/__shared/Logo";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

const MenuArea = (props: any) => {
  const { setToggle } = useMenuStore();

  return (
    <div className={"flex flex-col "}>
      <div className="flex flex-col lg:gap-10">
        <div className={"flex-flex-col px-8"}>
          <div
            className={
              "flex w-full flex-row items-center justify-between pt-8 "
            }
          >
            <div
              className="relative aspect-[106/86]
            h-full max-h-[86px] w-full
            max-w-[106px]
          2xl:aspect-[150/122] 2xl:max-h-[122px] 2xl:max-w-[150px]
          "
            >
              <Logo size="lg" />
            </div>
            <button className="relative transition-transform duration-300 hover:rotate-[360deg] lg:right-10">
              <AiFillCloseCircle
                onClick={() => setToggle(false)}
                color="white"
                size={40}
              />
            </button>
          </div>
        </div>
        <div className={"mt-10"}>
          <MobileMenu
            className={"flex lg:hidden "}
            // toggleMenu={props?.toggleMenu}
          />
          <DesktopMenu
            className={"hidden lg:flex"}
            // toggleMenu={props?.toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuArea;
