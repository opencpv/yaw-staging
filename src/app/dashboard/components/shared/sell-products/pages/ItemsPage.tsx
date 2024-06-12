"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopProductCard from "../DesktopProductCard";
import MobileProductCard from "../MobileProductCard";
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
} from "../../table/Table";
import { useDashboardStore } from "@/store/dashboard/dashboardStore";
import { cn } from "@/lib/utils";
import Archived from "../../table/Archived";
import CallOut from "@/components/__shared/ui/CallOut";
import { IoIosArrowDown } from "react-icons/io";
import Select from "../../ui/Select";
import SelectMobile from "../../ui/SelectMobile";
import { FaPlus } from "react-icons/fa6";
import AddItemButton from "../AddItemButton";

let items = [
  {
    id: 1,
    title: "Dining Table",
    category: "Furniture",
    condition: "Used",
    images: ["/assets/images/about/young-couple.webp"],
    price: 10000,
    is_available: false,
    status: "Suspended",
  },
  {
    id: 2,
    title: "Couch",
    category: "Furniture",
    condition: "Used",
    images: ["/assets/images/about/young-couple.webp"],
    price: 10000,
    is_available: true,
    status: "Active",
  },
  {
    id: 3,
    title: "Wardrobe",
    category: "Furniture",
    condition: "New",
    images: ["/assets/images/about/young-couple.webp"],
    price: 10000,
    is_available: false,
    status: "Archived",
  },
  {
    id: 4,
    title: "Mifi",
    category: "Electronics",
    condition: "Used-like New",
    images: ["/assets/images/about/young-couple.webp"],
    price: 10000,
    is_available: false,
    status: "Inactive",
  },
];

const ItemsPage = () => {
  // const [products, setproducts] = useState<any[]>([]);
  // const [supabase, setsupabase] = useState<any>();
  // const [id, setid] = useState<string>("");

  const { currentRole } = useDashboardStore();
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);

  // useEffect(() => {
  // if (!supabase) {
  //     redirect("/");
  //   } else {
  //     setsupabase(supabase);
  //     supabase.auth
  //       .getUser(
  //         JSON.parse(localStorage.getItem("session") as string).access_token,
  //       )
  //       .then((data) => setid(data.data.user?.id as string))
  //       .catch((err) => {
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
  //     }
  //   };

  //   getProducts();
  // }, [id, supabase]);

  return (
    <main className="bg-shade">
      <div className="wrapper pb-40">
        <section className="mb-6 flex flex-col gap-5">
          <div className="order-2 flex items-center justify-between gap-5 lg:order-1">
            <h2>Items</h2>
            <Button
              href={`/dashboard/${currentRole}/sell-products/add-new-product`}
              color="primary"
              className="max-lg:hidden"
            >
              Add Item
            </Button>
          </div>
          <CallOut
            title="Important Notice !!"
            content="You will receive messages in your inbox on the platform whenever there is an interested buyer for your product"
            className="order-1 lg:order-2"
          />
          {items?.length > 0 ? (
            <small className="order-3 inline-block capitalize">
              Showing {items.length} {items.length > 1 ? "Items" : "Item"}
            </small>
          ) : null}
          <div className="order-4 flex justify-end gap-5 xs:justify-between lg:hidden">
            <AddItemButton />
            <div className="flex flex-wrap items-center justify-end gap-5">
              <SelectMobile
                name="Status"
                options={["Active", "Archived", "Inactive", "Suspended"]}
                placeholder="Status"
                value={status as string}
                onValueChange={(value) => setStatus(value)}
              />
              <SelectMobile
                name="Date"
                options={["Last 30 days", "Last 7 days", "Last 24 hours"]}
                placeholder="Date"
                value={date as string}
                onValueChange={(value) => setDate(value)}
              />
            </div>
          </div>
        </section>

        {/* DESKTOP VIEW */}
        <div className="flex flex-col gap-8">
          <Table
            className={cn({
              "min-h-[35rem]": items?.length > 3,
            })}
          >
            <TableHeaderRow className="grid-cols-7" gap="2rem">
              <TableHeader className="col-span-2">Item</TableHeader>
              <TableHeader className="col-span-1">Category</TableHeader>
              <TableHeader className="col-span-1">Created on</TableHeader>
              <TableHeader className="col-span-1">Available</TableHeader>
              <TableHeader className="col-span-1">Status</TableHeader>
              <TableHeader className="col-span-1">Actions</TableHeader>
            </TableHeaderRow>
            <TableBodyRowGroup>
              {/* Empty state */}
              {items.length === 0 ? (
                <TableBodyRow className="grid-cols-6">
                  <TableBody className="col-span-6">
                    <AddItem />
                  </TableBody>
                </TableBodyRow>
              ) : null}

              {items?.map((item) => (
                <DesktopProductCard data={item as Item} key={item.id} />
              ))}
            </TableBodyRowGroup>
          </Table>

          {/* MOBILE VIEW */}
          <TableSm>
            {items?.map((item) => (
              <MobileProductCard
                data={item as Item}
                key={`mobile-${item.id}`}
              />
            ))}
          </TableSm>
        </div>
        <Archived />
      </div>
    </main>
  );
};

export default ItemsPage;

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
