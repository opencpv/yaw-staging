"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { LoginButton } from "./LoginButton";
import { useRouter } from "next/navigation";
import Logo from "@/components/__shared/Logo";
import ButtonMenu from "@/components/__shared/ui/button/ButtonMenu";


export const LoginForm = () => {
  
  return (
    <>
      <div className="relative flex justify-center w-full">
        <ButtonMenu className="absolute top-0 justify-self-start left-1.5" />
        <Logo size="md" className="mt-14 sm:mt-0" />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-6">
        <LoginButton text="Continue with Google" icon="google" />
        <LoginButton text="Continue with Facebook" icon="facebook" />
        <LoginButton text="Continue with Apple" icon="apple" />
      </div>
    </>
  );
};
