"use client";

import { openSans } from "@/styles/font";
import { Button } from "@/components/ui/button";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import supabase from "@/lib/utils/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopProductCard from "./components/DesktopProductCard";
import MobileProductCard from "./components/MobileProductCard";
import Link from "next/link";

const Sell = () => {
  const [products, setproducts] = useState<any[]>([]);
  const [supabase, setsupabase] = useState<any>();
  const [id, setid] = useState<string>("");
  const { images } = useAssets();

  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    } else {
      setsupabase(supabase);
      supabase.auth
        .getUser(
          JSON.parse(localStorage.getItem("session") as string).access_token
        )
        .then((data) => setid(data.data.user?.id as string))
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      let { data: sell_items, error } = await supabase
        .from("sell_items")
        .select("*")
        .eq("user_id", id);

      if (!error) {
        setproducts(sell_items as any[]);
        console.log(sell_items);
      }
    };

    getProducts();
  }, [id]);

  const AddProduct = () => {
    return (
      <div className="flex justify-center lg:mt-[111px]">
        <div className="flex flex-col items-center">
          <Image
            src={images.Clipboard}
            alt="no products image"
            className="mb-8"
          />
          <p className="font-semibold mb-5">No items Added</p>
          <button className=" bg-[#073B3A] rounded-md text-white px-10 py-[15px]">
            Add New Product
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <main className={`    px-[32px] ${openSans.className}`}>
        <div className="mb-5 lg:mt-[32px]">
          <p className="text-[31px] font font-semibold">Products</p>
        </div>
        {/* product count */}
        {products.length > 0 ? (
          <p className="mb-6  md:">
            Showing {products.length} product{products.length > 1 ? "s" : null}
          </p>
        ) : null}
        {/* table :visible on desjtop only */}
        <div className="hidden lg:grid  lg:grid-cols-5  gap-y-[6px]">
          {/* header */}
          <p className="bg-[#396261] text-center py-4 text-white hidden lg:block ">
            Product
          </p>
          <p className="bg-[#396261] text-center py-4 text-white hidden lg:block ">
            Category
          </p>
          <p className="bg-[#396261] text-center py-4 text-white hidden lg:block ">
            Date Created
          </p>
          <p className="bg-[#396261] text-center py-4 text-white hidden lg:block ">
            Status
          </p>
          <p className="bg-[#396261] text-center py-4 text-white hidden lg:block ">
            Actions
          </p>
          {products.map((product, index) => (
            <>
              <DesktopProductCard data={product} key={index} />
            </>
          ))}
        </div>
        {/* table display in mobile and tablet view */}
        {products.map((product, index) => (
          <MobileProductCard data={product} key={`mobile-${index}`} />
        ))}
        {/* if product count is zero display this */}
        {products.length == 0 ? <AddProduct /> : null}
        <div className="flex justify-center lg:justify-end mt-8">
          <Link
            href="/dashboard/sell-products/add-new-product"
            className=" bg-[#073B3A] rounded-md text-white px-10 py-[15px]"
          >
            Add New Product
          </Link>
        </div>
      </main>
    </>
  );
};

export default Sell;
