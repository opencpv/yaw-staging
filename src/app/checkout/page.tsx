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
      <div className="mb-6 w-full rounded-md border-[1px] px-3 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-md bg-[#027F7C]">
              <CaCartItem />
            </div>
            <div>
              <p className="mb-2 font-semibold">{item.name}</p>
              <p className="mb-2 text-[#8A8A8A]">GHS {item.cost}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="">Qty</p>
            <p className=" rounded-full  bg-[#F1F1F1] px-8 py-2">
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
        className={`grid grid-cols-1 gap-x-[141px] px-4 py-4 lg:grid-cols-2 lg:px-16`}
      >
        <div className="py-12">
          <div className="block py-[49px] lg:hidden  lg:bg-[#D9D9D9] lg:px-[60px] ">
            <button
              onClick={() => {
                router.push("/cart");
              }}
              className={`mb-8 flex items-center justify-center gap-4 py-8 text-[#DDB771] outline-none hover:scale-[1.04]
          lg:mb-[63px] lg:p-0`}
            >
              <CaBackArrow />
              <p className="text-lg ">Cart</p>
            </button>
            <div className="flex items-center justify-between border-b-2  pb-1">
              <h2 className="text-[20px] font-semibold ">Order Summary</h2>
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
                <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-4 py-3 font-semibold">
                  <p className="">Subtotal</p>
                  <p className="text-[20px]">GHS {getTotalPrice(items)}</p>
                </div>
                <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-4 py-3 font-semibold">
                  <p className="">Tax</p>
                  <p className="text-[20px]">GHS 00.00</p>
                </div>
                <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-4 py-3 font-semibold">
                  <p className="">Total</p>
                  <p className="text-[20px] lg:text-[25px]">
                    GHS {getTotalPrice(items)}
                  </p>
                </div>
              </div>
            )}
          </div>
          <h1 className="mb-9 border-b-2 pb-1 text-[20px] font-semibold">
            Billing Information
          </h1>
          <BillingForm />
        </div>
        <div className="hidden px-4 py-[49px] lg:block lg:bg-[#D9D9D9] lg:px-[60px] ">
          <button
            onClick={() => {
              router.push("/cart");
            }}
            className={`mb-8 flex items-center justify-center gap-4 px-8 py-8 text-[#DDB771] outline-none hover:scale-[1.04]
          lg:mb-[63px] lg:p-0`}
          >
            <CaBackArrow />
            <p className="text-lg ">Cart</p>
          </button>
          <h2 className="mb-9 border-b-2 pb-1 text-[20px] font-semibold">
            Order Summary
          </h2>
          <div className=" mb-16">
            {items.map((item, index) => (
              <CartItem item={item} key={index} item_index={index} />
            ))}
          </div>
          <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-4 py-3 font-semibold">
            <p className="">Subtotal</p>
            <p className="text-[20px]">GHS {getTotalPrice(items)}</p>
          </div>
          <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-4 py-3 font-semibold">
            <p className="">Tax</p>
            <p className="text-[20px]">GHS 00.00</p>
          </div>
          <div className="mb-4 flex items-center justify-between bg-[#F5F5F5] px-4 py-3 font-semibold">
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
