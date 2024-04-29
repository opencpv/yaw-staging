import Navbar from "@/components/__shared/ui/Navbar";
import Footer from "@/components/__shared/ui/footer/Footer";
import React from "react";
import Landing from "./components/Landing";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <main>
        <Landing />
      </main>
      <Footer />
    </>
  );
};

export default page;
