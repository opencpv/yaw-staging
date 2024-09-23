"use client";
import Loader from "@/components/__shared/ui/loader";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { LoginButtonProps } from "@/lib/typings";
import Image from "next/image";
import { useEffect, useState } from "react";
import oauthSignIn from "../lib/oauthSignIn";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const LoginButton = ({ icon, text, className }: LoginButtonProps) => {
  const { icons } = useAssets();
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const pathname = usePathname();
  const [redirectURL, setRedirectURL] = useState<string>(
    process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL as string,
  );

  useEffect(() => {
    if (pathname !== "/login") {
      setRedirectURL(pathname as string);
    }
  }, [pathname]);

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

  const handleClick = async () => {
    setLoader(true);
    const { error } = await oauthSignIn(icon, redirectURL);
    if (error) {
      setLoader(false);
    }
  };

  return (
    <button
      className={cn(
        "flex h-fit w-full max-w-md items-center gap-5 truncate rounded-lg bg-white px-4 py-5 transition-all duration-200 hover:opacity-90 max-xxs:flex-col xsm:gap-x-16 xs:min-h-20 lg:px-8",
        className,
      )}
      onClick={handleClick}
    >
      {loader ? (
        <Loader position="default" size="sm" />
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
              className="size-[28px] xs:size-[41px]"
            />
          )}
        </>
      )}
      <p className={`font-semibold text-primary max-xs:text-center`}>{text}</p>
    </button>
  );
};
