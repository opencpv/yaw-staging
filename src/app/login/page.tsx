import { useAssets } from "@/lib/custom-hooks/useAssets";
import Head from "next/head";
import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import { Footer } from "./components/Footer";

const Login = () => {
  const { images } = useAssets();
  return (
    <>
      <Head>
        <title>Login - RentRightGh</title>
      </Head>
      <main className="w-full h-[100vh] bg-darkGreenBg grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block lg:relative w-full h-[100vh]">
          <Image
            src={images.StockImage}
            alt="bg"
            fill
            objectPosition="center"
            objectFit="cover"
          />
        </div>
        <div className="w-full relative h-[100vh] bg-plane-pattern lg:px-[39.5px] lg:py-[58px]">
          <LoginForm />
          <div className="absolute bottom-[69px] left-0 w-full">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
