import Navbar from "@/components/__shared/Navbar";
import Footer from "@/components/__shared/footer/Footer";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const MovingSalesLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MovingSalesLayout;
