import Navbar from "@/components/__shared/Navbar";
import Footer from "@/components/__shared/footer/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Moving Sale",
  description:
    "Find great deals on moving supplies, furniture, and household items. Browse a wide selection of items from sellers. Move sale prices, descriptions, and contact information at one place.", // tentative
};

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
