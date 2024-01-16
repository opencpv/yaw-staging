import { useAssets } from "@/lib/custom-hooks/useAssets";
import Head from "next/head";
import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import { LoginFooter } from "./components/LoginFooter";

const Login = () => {
  const { images } = useAssets();

  return (
    <>
      <Head>
        <title>Login - RentRightGh</title>
      </Head>
      <main className="grid w-full h-[100svh] max-h-[100svh] overflow-y-auto hidden-scrollbar grid-cols-1 bg-darkGreenBg lg:grid-cols-2">
        <div className="hidden w-full min-h-screen lg:block lg:relative">
          <Image
            src={images.StockImage}
            alt="room"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative flex flex-col gap-10 items-center justify-between w-full h-full py-5 bg-plane-pattern px-5 lg:py-8">
          <LoginForm />
          <LoginFooter />
        </div>
      </main>
    </>
  );
};

export default Login;
