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
import { cn } from "@/lib/utils";

const Sell = () => {
  // const [products, setproducts] = useState<any[]>([]);
  // const [supabase, setsupabase] = useState<any>();
  // const [id, setid] = useState<string>("");

  const { currentRole } = useDashboardStore();

  let items: any[] = [
    {
      id: "1",
      product: "Dining Table",
      category: "Furniture",
      condition: "used",
      img_url: "/assets/images/about/young-couple.webp",
      price: 10000,
      is_available: true,
      item_publication_status: "suspended",
    },
    {
      id: "2",
      product: "Couch",
      category: "Furniture",
      condition: "used",
      img_url: "/assets/images/about/young-couple.webp",
      price: 10000,
      is_available: true,
      item_publication_status: "active",
    },
    {
      id: "3",
      product: "Wardrobe",
      category: "Furniture",
      condition: "new",
      img_url: "/assets/images/about/young-couple.webp",
      price: 10000,
      is_available: false,
      item_publication_status: "archived",
    },
    {
      id: "4",
      product: "Mifi",
      category: "Electronics",
      condition: "used",
      img_url: "/assets/images/about/young-couple.webp",
      price: 10000,
      is_available: false,
      item_publication_status: "inactive",
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
        <section className="mb-6 space-y-5">
          <h2>Items</h2>
          {/* product count */}
          {items?.length > 0 ? (
            <small className="inline-block text-sm capitalize">
              Showing {items.length} {items.length > 1 ? "Items" : "Item"}
            </small>
          ) : null}
        </section>

        {/* table display in desktop view */}
        <div className="flex flex-col gap-8">
          <Table
            className={cn("mb-8", {
              "min-h-[35rem]": items?.length > 3,
            })}
          >
            <TableHeaderRow className="grid-cols-6" gap="2rem">
              <TableHeader className="col-span-2">Item</TableHeader>
              <TableHeader className="col-span-1">Date created</TableHeader>
              <TableHeader className="col-span-1">Status</TableHeader>
              <TableHeader className="col-span-1">Publication</TableHeader>
              <TableHeader className="col-span-1">Actions</TableHeader>
            </TableHeaderRow>
            <TableBodyRowGroup>
              {/* if product count is zero display this */}
              {items.length === 0 ? (
                <TableBodyRow className="grid-cols-6">
                  <TableBody className="col-span-6">
                    <AddItem />
                  </TableBody>
                </TableBodyRow>
              ) : null}

              {items?.map((product, index) => (
                <>
                  <DesktopProductCard
                    // status={
                    //   index === 1
                    //     ? ""
                    //     : index === 3
                    //       ? "inactive"
                    //       : index === 0
                    //         ? "suspended"
                    //         : "archived"
                    // }
                    data={product}
                    key={index}
                  />
                </>
              ))}
            </TableBodyRowGroup>
          </Table>
          {/* table display in mobile and tablet view */}
          <TableSm>
            {items?.map((product, index) => (
              <MobileProductCard data={product} key={`mobile-${index}`} />
            ))}
          </TableSm>
          <Button
            href={`/dashboard/${currentRole}/sell-products/add-new-product`}
            color="accent"
            className="bottom-10 right-10 z-30 max-lg:fixed max-lg:shadow-lg lg:self-end"
          >
            Add New Item
          </Button>
        </div>
      </main>
    </>
  );
};

export default Sell;

const AddItem = () => {
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
          Add New Item
        </Button>
      </div>
    </div>
  );
};
