"use client";
import { openSans } from "@/app/styles/font";
import Loader from "@/components/__shared/loader/Loader";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { LoginButtonProps } from "@/lib/typings";
import Image from "next/image";
import { useEffect, useState } from "react";

export const LoginButton = ({ icon, text, onClick }: LoginButtonProps) => {
  const { icons } = useAssets();
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
    switch (icon) {
      case "google":
        setSelectedIcon(icons.GoogleIcon);
        break;
      case "facebook":
        setSelectedIcon(icons.FacebookIcon);
        break;
      case "apple":
        setSelectedIcon(icons.AppleIcon);
        break;
      default:
        setSelectedIcon(icons.GoogleIcon);
        break;
    }
  }, [icons, icon]);
  return (
    <button
      className="lg:px-[30px] px-[15px] w-[384px] md:w-[437px] rounded-lg flex  items-center gap-[78px] bg-[#fff] --font-open-sans hover:opacity-90 transition-all duration-200"
      onClick={async () => {
        setLoader(true);
        try {
          onClick ? onClick() : null;
        } catch (error: any) {
          console.log(error.message);
        }
      }}
    >
      {loader ? (
        <div className="py-2 lg:py-[20px] relative flex justify-center w-full">
          <Loader />
        </div>
      ) : (
        <>
          <Image src={selectedIcon} alt={icon} height={41} width={41} />
          <p
            className={`${openSans.className} text-[#073B3A] text-base font-semibold py-5 lg:py-[30px]`}
          >
            {text}
          </p>
        </>
      )}
    </button>
  );
};
