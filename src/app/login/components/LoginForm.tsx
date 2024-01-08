"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { LoginButton } from "./LoginButton";
import { poppins400 } from "@/styles/font";
import { useRouter } from "next/navigation";
import Logo from "@/components/__shared/Logo";

export const LoginForm = () => {
  const { icons } = useAssets();
  const router = useRouter();
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0">
        <button
          onClick={() => {
            router.back();
          }}
          className={`flex items-center px-8 py-8 lg:p-0 justify-center gap-4 outline-none ${poppins400}
          text-white hover:scale-[1.04]`}
        >
          <Image src={icons.ArrowIcon} alt="back icon" />
          <p className="text-lg ">Go back</p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <Logo size="md" />
        <div className="flex flex-col items-center justify-center w-full gap-6 px-4 mt-16 mb-auto lg:mt-24">
          <LoginButton text="Continue with Google" icon="google" />
          {/*<LoginButton text="Continue with Facebook" icon="facebook" />*/}
          {/*<LoginButton text="Continue with Apple" icon="apple" />*/}
        </div>
      </div>
    </div>
  );
};
