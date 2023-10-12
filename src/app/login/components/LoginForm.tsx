"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { LoginButton } from "./LoginButton";
import { poppins400 } from "@/app/styles/font";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { icons } = useAssets();
  const router = useRouter();
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0">
        <button
          onClick={() => {
            router.push("/");
          }}
          className={`flex items-center px-8 py-8 lg:p-0 justify-center gap-4 outline-none ${poppins400}
          text-white hover:scale-[1.04]`}
        >
          <Image src={icons.ArrowIcon} alt="back icon" />
          <p className="text-lg ">Go back</p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <Image src={icons.Logo} alt="logo" className="mt-24 lg:m-0" />
        <div className="flex flex-col items-center justify-center w-full gap-6 px-4 md:mt-28 mt-9 lg:mt-44">
          <LoginButton text="Continue with Google" icon="google" />
          <LoginButton text="Continue with Facebook" icon="facebook" />
          <LoginButton text="Continue with Apple" icon="apple" />
          <LoginButton text="Continue with X" icon="twitter" />
        </div>
      </div>
    </div>
  );
};
