import React from 'react'
import { MobileMenu } from '../MobileMenu'
import { DesktopMenu } from '../DesktopMenu'
import { AiFillCloseCircle } from 'react-icons/ai'
import Logo from '@/components/__shared/Logo'

const MenuArea = (props: any) => {
  return (
    <div className={"flex-col flex "}>
    <div className="flex flex-col lg:gap-10">
      <div className={"flex-flex-col px-8"}>
        <div
          className={
            "flex flex-row items-center justify-between pt-8  w-full "
          }
        >
          <div
            className="w-full relative
            max-w-[106px] max-h-[86px] aspect-[106/86]
            2xl:max-w-[150px]
          2xl:max-h-[122px] h-full 2xl:aspect-[150/122]
          "
          >
            <Logo size="lg" />
          </div>
          <button className="relative duration-300 lg:right-10 hover:rotate-[360deg]">
            <AiFillCloseCircle
              onClick={props.onClick}
              color="white"
              size={40}
            />
          </button>
        </div>
      </div>
      <div className={"mt-10"}>
        <MobileMenu
          className={"flex lg:hidden "}
          toggleMenu={props?.toggleMenu}
        />
        <DesktopMenu
          className={"hidden lg:flex"}
          toggleMenu={props?.toggleMenu}
        />
      </div>
    </div>
  </div>
  )
}

export default MenuArea