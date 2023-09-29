"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { LoginButton } from "./LoginButton";
import { poppins400 } from "@/app/styles/font";
import supabase from "@/lib/utils/supabaseClient";
import { Provider } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { icons } = useAssets();

  const handleLogin = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: "http://localhost:3000/dashboard/settings",
      },
    });

    return { data, error };
  };
  const router = useRouter()
  return (
    <div className="w-full relative">
      <div className="absolute top-0 left-0">
        <button
        onClick={router.back}
          className={`flex items-center px-[30px] py-[30px] lg:p-0 justify-center gap-4 outline-none ${poppins400}
          text-white hover:scale-[1.04]`}
        >
          <Image src={icons.ArrowIcon} alt="back icon" />
          <p className="text-lg ">Go back</p>
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Image src={icons.Logo} alt="logo" className="mt-[30px] lg:m-0" />
        <div className="md:mt-[110px]  mt-[36px] lg:mt-[170px] flex flex-col gap-6 w-full justify-center items-center">
          <LoginButton
            text="Continue with Google"
            icon="google"
            onClick={async () => {
              const { data, error } = await handleLogin("google");
            }}
          />
          <LoginButton
            text="Continue with Facebook"
            icon="facebook"
            onClick={async () => {
              const { data, error } = await handleLogin("facebook");
            }}
          />
          <LoginButton text="Continue with Apple" icon="apple" />
        </div>
      </div>
    </div>
  );
};
