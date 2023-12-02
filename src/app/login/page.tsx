import { useAssets } from "@/lib/custom-hooks/useAssets";
import Head from "next/head";
import Image from "next/image";
import { LoginForm } from "./components/LoginForm";
import { LoginFooter } from "./components/LoginFooter";
import Footer from "@/components/__shared/Footer";

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
        <div className="relative flex flex-col justify-between w-full h-full py-5 bg-plane-pattern lg:px-8 lg:py-8">
          <LoginForm />
          <div className="mt-auto">
            <LoginFooter />
          </div>
        </div>
        {/* <div className="w-full col-span-2 ">
          <Footer />
        </div> */}
      </main>
    </>
  );
};

export default Login;
