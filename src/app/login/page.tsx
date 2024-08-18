import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
const LoginForm = dynamic(() =>
  import("./components/LoginForm").then((mod) => mod.LoginForm),
);
import { LoginFooter } from "./components/LoginFooter";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to RentRightGH",
};

const Login = () => {
  const { images } = useAssets();

  return (
    <>
      <main className="hidden-scrollbar grid min-h-dvh w-full grid-cols-1 overflow-y-auto bg-primary-500 lg:grid-cols-2">
        <div className="hidden min-h-svh w-full lg:relative lg:block">
          <Image
            src={images.StockImage}
            alt="room"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-between gap-10 bg-plane-pattern px-5 py-5 lg:py-8">
          <LoginForm />
          <LoginFooter />
        </div>
      </main>
    </>
  );
};

export default Login;
