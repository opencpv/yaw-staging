"use client";
import { openSans } from "@/styles/font";
import Loader from "@/components/__shared/loader/Loader";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { LoginButtonProps } from "@/lib/typings";
import Image from "next/image";
import { useEffect, useState } from "react";
import oauthSignIn from "../lib/oauthSignIn";

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
      case "twitter":
        setSelectedIcon(icons.XIcon);
        break;
      default:
        setSelectedIcon(icons.GoogleIcon);
        break;
    }
  }, [icons, icon]);

  return (
    <button
      className="lg:px-8 px-4 w-full max-w-md rounded-lg flex items-center h-20 gap-5 xs:gap-16 bg-[#fff] --font-open-sans hover:opacity-90 transition-all duration-200"
      onClick={async () => {
        setLoader(true);
        const { data, error } = await oauthSignIn(
          icon,
          process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL
        );
        if (error) {
          setLoader(false);
        }
      }}
    >
      {loader ? (
        <div className="py-2 lg:py-[20px] relative flex justify-center w-full">
          <Loader />
        </div>
      ) : (
        <>
          {selectedIcon && (
            <Image
              src={selectedIcon}
              placeholder="blur"
              blurDataURL="LQD90Y]^NGo%{2wiG9W,MtEp9#Rh"
              alt={icon}
              height={41}
              width={41}
            />
          )}
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
