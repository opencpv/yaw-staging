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
      className="flex min-h-fit w-full max-w-md flex-col items-center gap-5 rounded-lg bg-[#fff] px-4 py-5 transition-all duration-200 hover:opacity-90 min-[310px]:flex-row min-[350px]:gap-x-16 lg:px-8"
      onClick={async () => {
        setLoader(true);
        const { data, error } = await oauthSignIn(
          icon,
          process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL,
        );
        if (error) {
          setLoader(false);
        }
      }}
    >
      {loader ? (
        <div className="relative flex w-full justify-center py-2 lg:py-5">
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
            className={`flex-1 text-center text-lg font-semibold text-[#073B3A] min-[310px]:text-start`}
          >
            {text}
          </p>
        </>
      )}
    </button>
  );
};
