"use client";

import { LoginButton } from "./LoginButton";
import { useRouter } from "next/navigation";
import Logo from "@/components/__shared/Logo";
import ButtonMenu from "@/components/__shared/ui/button/ButtonMenu";
import { useEffect } from "react";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useUserData } from "@/lib/custom-hooks/database/useUserData";

export const LoginForm = () => {
  const router = useRouter();
  const { user } = useAppStore();

  useUserData();

  useEffect(() => {
    if (user) {
      router.back();
    }
  }, [user, router]);

  return (
    <>
      <div className="relative flex w-full justify-center">
        <ButtonMenu className="absolute left-1.5 top-0 justify-self-start" />
        <Logo size="md" className="mt-14 sm:mt-0" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <LoginButton text="Continue with Google" icon="google" />
        <LoginButton text="Continue with Facebook" icon="facebook" />
        <LoginButton text="Continue with Apple" icon="apple" />
      </div>
    </>
  );
};
