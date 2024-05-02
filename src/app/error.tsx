"use client";
import Navbar from "@/components/__shared/ui/Navbar";
import SomethingWentWrong from "../components/__shared/ui/states/SomethingWentWrong";
import Footer from "@/components/__shared/ui/footer/Footer";

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
