import legal from "@/enum/about/legal";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));

export const metadata: Metadata = {
  title: {
    template: `%s | Moving Sale - ${legal.websiteName}`,
    default: "Moving Sale",
  },
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
