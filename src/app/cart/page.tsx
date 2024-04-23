"use client";
import Navbar from "@/components/__shared/ui/Navbar";
import React, { useMemo } from "react";
import CartView from "./components/CartView";

const CartPage = () => {
  return (
    <>
      <main>
        <Navbar />
        <CartView />
      </main>
    </>
  );
};

export default CartPage;
