import Navbar from "@/components/__shared/ui/Navbar";
import React from "react";
import CartView from "./components/CartView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "", // tentative
};

const CartPage = () => {
  return (
    <>
      <Navbar />
      <main className="wrapper">
        <CartView />
      </main>
    </>
  );
};

export default CartPage;
