import { LoginButton } from "./LoginButton";
import { redirect } from "next/navigation";
import Logo from "@/components/__shared/ui/Logo";
import MenuButton from "@/app/login/components/MenuButton";
import { createClient } from "@/lib/utils/supabase/auth/server";

export const LoginForm = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  const id = data.user?.id;

  const { data: blockedUser, error: blockingError } = await supabase
    .from("banned_users")
    .select("*")
    .eq("user", id);
  // console.log(blocking);
  // protected route

  const LoginPage = () => (
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
  if (blockedUser) {
    const blockedUserData: {
      id: number;
      created_at: string;
      user: string;
      banned: boolean;
    } = blockedUser[0];
    if (blockedUserData.banned) {
      redirect("/banned");
    } else {
      if (data?.user) {
        redirect("/dashboard");
      } else return <LoginPage />;
    }
  } else if (data?.user) {
    redirect("/dashboard");
  } else return <LoginPage />;
};
