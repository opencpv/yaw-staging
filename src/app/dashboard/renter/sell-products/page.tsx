"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import supabase from "@/lib/utils/supabaseClient";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopProductCard from "../../components/shared/sell-products/DesktopProductCard";
import MobileProductCard from "../../components/shared/sell-products/MobileProductCard";
import Link from "next/link";
import Button from "@/components/__shared/ui/button/Button";
import {
  Table,
  TableBody,
  TableBodyRow,
  TableBodyRowGroup,
  TableHeader,
  TableHeaderRow,
  TableSm,
} from "../../components/shared/table/Table";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";

const Sell = () => {
  // const [products, setproducts] = useState<any[]>([]);
  // const [supabase, setsupabase] = useState<any>();
  // const [id, setid] = useState<string>("");

  let products: any[] = [
    {
      id: "1",
      product: "Dining Table",
      category: "Furniture",
      condition: "used",
      img_url: "/assets/images/about/young-couple.webp",
      price: 10000,
      isAvailable: true,
    },
    {
      id: "2",
      product: "Couch",
      category: "Furniture",
      condition: "used",
      img_url: "/assets/images/about/young-couple.webp",
      price: 10000,
      isAvailable: false,
    },
    {
      id: "3",
      product: "Wardrobe",
      category: "Furniture",
      condition: "new",
      img_url: "/assets/images/about/young-couple.webp",
      price: 10000,
      isAvailable: false,
    },
  ];

  // !!! Temporarily commented out

  // useEffect(() => {
  //   const supabase = createClientComponentClient<Database>();
  //   if (!supabase) {
  //     redirect("/");
  //   } else {
  //     setsupabase(supabase);
  //     supabase.auth
  //       .getUser(
  //         JSON.parse(localStorage.getItem("session") as string).access_token,
  //       )
  //       .then((data) => setid(data.data.user?.id as string))
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  // }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     let { data: sell_items, error } = await supabase
  //       .from("sell_items")
  //       .select("*")
  //       .eq("user_id", id);

  //     if (!error) {
  //       setproducts(sell_items as any[]);
  //       console.log(sell_items);
  //     }
  //   };

  //   getProducts();
  // }, [id, supabase]);

  return (
    <>
      <main>
        <section className="mb-6">
          <h2>Products</h2>
          {/* product count */}
          {products.length > 0 ? (
            <small className="inline-block text-sm capitalize">
              Showing {products.length} product
              {products.length > 1 ? "s" : null}
            </small>
          ) : null}
        </section>

        {/* table display in desktop view */}
        <Table>
          <TableHeaderRow className="grid-cols-6" gap="2rem">
            <TableHeader className="col-span-2">Product</TableHeader>
            <TableHeader className="col-span-1">Category</TableHeader>
            <TableHeader className="col-span-1">Date created</TableHeader>
            <TableHeader className="col-span-1">Status</TableHeader>
            <TableHeader className="col-span-1">Actions</TableHeader>
          </TableHeaderRow>
          <TableBodyRowGroup>
            {/* if product count is zero display this */}
            {products.length === 0 ? (
              <TableBodyRow className="grid-cols-6">
                <TableBody className="col-span-6">
                  <AddProduct />
                </TableBody>
              </TableBodyRow>
            ) : null}

            {products?.map((product, index) => (
              <>
                <DesktopProductCard data={product} key={index} />
              </>
            ))}
          </TableBodyRowGroup>
        </Table>

        {/* table display in mobile and tablet view */}
        <TableSm className="mx-auto mb-10 mt-3 w-fit">
          {products?.map((product, index) => (
            <MobileProductCard data={product} key={`mobile-${index}`} />
          ))}
        </TableSm>
      </main>
    </>
  );
};

export default Sell;

const AddProduct = () => {
  const { currentRole } = useDashboardStore();
  const { images } = useAssets();
  return (
    <div className="flex justify-center lg:mt-20">
      <div className="flex flex-col items-center gap-6">
        <Image
          src={images.Clipboard}
          alt="clipboard"
          width={250}
          className="w-[150px] sm:w-[250px]"
        />
        <p className="text-2xl font-semibold text-neutral-600">No item Added</p>
        <Button
          href={`/dashboard/${currentRole}/sell-products/add-new-product`}
          color="primary"
        >
          Add New Product
        </Button>
      </div>
    </div>
  );
};
