import { redirect } from "next/navigation";
import Logo from "@/components/__shared/ui/logo/logo";
import { createClient } from "@/lib/utils/supabase/auth/server";
import dynamic from "next/dynamic";
const MenuButton = dynamic(() => import("@/app/login/components/MenuButton"));
const LoginButton = dynamic(() =>
  import("./LoginButton").then((mod) => mod.LoginButton),
);

export const LoginForm = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/dashboard");
  } else
    return (
      <>
        <div className="relative flex w-full justify-center">
          <MenuButton className="absolute right-1.5 top-0 justify-self-start" />
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
