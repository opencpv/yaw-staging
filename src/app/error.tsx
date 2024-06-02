"use client";
import dynamic from "next/dynamic";
// import Navbar from "@/components/__shared/ui/Navbar";
// import SomethingWentWrong from "../components/__shared/ui/states/SomethingWentWrong";
// import Footer from "@/components/__shared/ui/footer/Footer";

const SomethingWentWrong = dynamic(
  () => import("../components/__shared/ui/states/SomethingWentWrong"),
);
const Navbar = dynamic(() => import("../components/__shared/ui/Navbar"));
const Footer = dynamic(() => import("../components/__shared/ui/footer/Footer"));

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
