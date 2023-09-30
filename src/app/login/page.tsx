import { useAssets } from "@/lib/custom-hooks/useAssets";
import Head from "next/head";
import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import { LoginFooter } from "./components/LoginFooter";
import Footer from "../components/Footer";

const Login = () => {
  const { images } = useAssets();

  return (
    <>
      <Head>
        <title>Login - RentRightGh</title>
      </Head>
      <main className="w-full  bg-darkGreenBg grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block lg:relative w-full md:h-[100vh]">
          <Image
            src={images.StockImage}
            alt="bg"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="w-full relative md:h-[100vh] bg-plane-pattern lg:px-[39.5px] lg:py-[58px]">
          <LoginForm />
          <div className="  mt-[265px] md:mt-[127px] lg:mt-[110px] md:bottom-[69px]  left-0 w-full">
            <LoginFooter />
          </div>
        </div>
        <div className="w-full col-span-2 ">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Login;
