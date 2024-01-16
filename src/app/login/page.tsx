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
      <main className="grid w-full min-h-screen grid-cols-1 bg-darkGreenBg lg:grid-cols-2">
        <div className="hidden w-full min-h-screen lg:block lg:relative">
          <Image
            src={images.StockImage}
            alt="bg"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative flex flex-col items-center justify-between w-full h-full py-5 bg-plane-pattern px-5 lg:py-8">
          <LoginForm />
          <LoginFooter />
        </div>
        {/* <div className="w-full col-span-2 ">
          <Footer />
        </div> */}
      </main>
    </>
  );
};

export default Login;
