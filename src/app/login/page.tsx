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
      <main className="hidden-scrollbar grid h-[100svh] max-h-[100svh] w-full grid-cols-1 overflow-y-auto bg-darkGreenBg lg:grid-cols-2">
        <div className="hidden min-h-screen w-full lg:relative lg:block">
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
