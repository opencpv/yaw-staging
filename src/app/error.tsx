"use client";
import dynamic from "next/dynamic";

const SomethingWentWrong = dynamic(
  () => import("../components/__shared/ui/states/SomethingWentWrong"),
);
const Navbar = dynamic(() => import("../components/__shared/ui/Navbar"));
const Footer = dynamic(() => import("../components/__shared/ui/footer"));

function Page() {
  return (
    <>
      <Navbar />
      <SomethingWentWrong />
      <Footer />
    </>
  );
}

export default Page;
