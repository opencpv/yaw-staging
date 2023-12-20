"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import BillingForm from "./components/BillingForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CaBackArrow from "../components/icons/CaBackArrow";
import useCartStore from "@/store/cart/useCartStore";
import CaCartItem from "../components/icons/CaCartItem";
import { CartProp } from "../../../interfaces";
import { openSans } from "@/styles/font";
import { boolean } from "yup";
import { useState } from "react";
import CaNormalArrowDown from "../components/icons/CaNormalArrowDown";
import CaNormalArrowUp from "../components/icons/CaNormalArrowUp";

const Checkout = () => {
  const { icons } = useAssets();
  const router = useRouter();
  const { items, getTotalPrice } = useCartStore();
  const [toggle, settoggle] = useState<boolean>(false);
  const CartItem = ({
    item,
    item_index,
  }: {
    item: CartProp;
    item_index: number;
  }) => {
    return (
      <div className="w-full border-[1px] rounded-md py-5 px-3 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center h-20 w-20 bg-[#027F7C] rounded-md">
              <CaCartItem />
            </div>
            <div>
              <p className="font-semibold mb-2">{item.name}</p>
              <p className="text-[#8A8A8A] mb-2">GHS {item.cost}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="">Qty</p>
            <p className=" bg-[#F1F1F1]  rounded-full py-2 px-8">
              {item.quantity}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <main
        className={`${openSans.className} lg:px-16 px-4 py-4 grid grid-cols-1 lg:grid-cols-2 gap-x-[141px]`}
      >
        <div className="py-12">
          <div className="block lg:hidden lg:bg-[#D9D9D9]  lg:px-[60px] py-[49px] ">
            <button
              onClick={() => {
                router.push("/cart");
              }}
              className={`flex items-center py-8 lg:p-0 justify-center gap-4 outline-none mb-8 lg:mb-[63px]
          text-[#DDB771] hover:scale-[1.04]`}
            >
              <CaBackArrow />
              <p className="text-lg ">Cart</p>
            </button>
            <div className="flex justify-between pb-1 border-b-2  items-center">
              <h2 className="font-semibold text-[20px] ">Order Summary</h2>
              <button
                onClick={() => {
                  settoggle(!toggle);
                }}
              >
                {toggle ? <CaNormalArrowUp /> : <CaNormalArrowDown />}
              </button>
            </div>
            {toggle && (
              <div className=" mt-8">
                <div className=" mb-16">
                  {items.map((item, index) => (
                    <CartItem item={item} key={index} item_index={index} />
                  ))}
                </div>
                <div className="flex justify-between items-center font-semibold mb-4 bg-[#F5F5F5] px-4 py-3">
                  <p className="">Subtotal</p>
                  <p className="text-[20px]">GHS {getTotalPrice(items)}</p>
                </div>
                <div className="flex justify-between items-center font-semibold mb-4 bg-[#F5F5F5] px-4 py-3">
                  <p className="">Tax</p>
                  <p className="text-[20px]">GHS 00.00</p>
                </div>
                <div className="flex justify-between items-center font-semibold mb-4 bg-[#F5F5F5] px-4 py-3">
                  <p className="">Total</p>
                  <p className="text-[20px] lg:text-[25px]">
                    GHS {getTotalPrice(items)}
                  </p>
                </div>
              </div>
            )}
          </div>
          <h1 className="font-semibold text-[20px] pb-1 border-b-2 mb-9">
            Billing Information
          </h1>
          <BillingForm />
        </div>
        <div className="hidden lg:block lg:bg-[#D9D9D9] px-4 lg:px-[60px] py-[49px] ">
          <button
            onClick={() => {
              router.push("/cart");
            }}
            className={`flex items-center px-8 py-8 lg:p-0 justify-center gap-4 outline-none mb-8 lg:mb-[63px]
          text-[#DDB771] hover:scale-[1.04]`}
          >
            <CaBackArrow />
            <p className="text-lg ">Cart</p>
          </button>
          <h2 className="font-semibold text-[20px] pb-1 border-b-2 mb-9">
            Order Summary
          </h2>
          <div className=" mb-16">
            {items.map((item, index) => (
              <CartItem item={item} key={index} item_index={index} />
            ))}
          </div>
          <div className="flex justify-between items-center font-semibold mb-4 bg-[#F5F5F5] px-4 py-3">
            <p className="">Subtotal</p>
            <p className="text-[20px]">GHS {getTotalPrice(items)}</p>
          </div>
          <div className="flex justify-between items-center font-semibold mb-4 bg-[#F5F5F5] px-4 py-3">
            <p className="">Tax</p>
            <p className="text-[20px]">GHS 00.00</p>
          </div>
          <div className="flex justify-between items-center font-semibold mb-4 bg-[#F5F5F5] px-4 py-3">
            <p className="">Total</p>
            <p className="text-[20px] lg:text-[25px]">
              GHS {getTotalPrice(items)}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
