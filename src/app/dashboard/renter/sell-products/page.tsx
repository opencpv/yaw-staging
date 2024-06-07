"use client";

import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import DesktopProductCard from "../../components/shared/sell-products/DesktopProductCard";
import MobileProductCard from "../../components/shared/sell-products/MobileProductCard";
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
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useQuery } from "@tanstack/react-query";
import { useCurrentUserId } from "@/lib/custom-hooks/useCurrentUserId";
import LoadingIndicator from "@/components/LoadingIndicator";
import { useState } from "react";
import { Product } from "@/lib/typings";

const Sell = () => {
  const supabaseClient = createClient();
  const id = useCurrentUserId();
  const { currentRole } = useDashboardStore();

  const [products, setProducts] = useState<Product[]>([]);
  const { isLoading, isFetching, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      if (!id) return;
      const { data: listings } = await supabaseClient
        .from("products")
        .select("*")
        .eq("seller", id)
        .eq("is_deleted", false);

      setProducts(listings as Product[]);
    },
    enabled: !!id,
  });

  return (
    <>
      <main>
        <section className="mb-6 space-y-5">
          <h2>Items</h2>
          {/* product count */}
          {products!.length > 0 ? (
            <small className="inline-block text-sm capitalize">
              Showing {products!.length}{" "}
              {products!.length > 1 ? "Items" : "Item"}
            </small>
          ) : null}
        </section>

        {/* table display in desktop view */}
        <div className="flex flex-col gap-8">
          <Table
            className={cn("mb-8", {
              "min-h-[35rem]": products!.length > 3,
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
              <>
                {isLoading ? (
                  <div className="w-full">
                    <LoadingIndicator />
                  </div>
                ) : (
                  <>
                    {products!.length === 0 ? (
                      <TableBodyRow className="grid-cols-6">
                        <TableBody className="col-span-6">
                          <AddItem />
                        </TableBody>
                      </TableBodyRow>
                    ) : null}
                  </>
                )}
              </>

              {products?.map((product, index) => (
                <>
                  {!product.is_deleted && product.status !== "archived" && (
                    <DesktopProductCard
                      data={product}
                      key={index}
                      refetch={refetch}
                    />
                  )}
                </>
              ))}
            </TableBodyRowGroup>
          </Table>

          {/* table display in mobile and tablet view */}
          <TableSm>
            {products?.map((product, index) => (
              <>
                {!product.is_deleted && product.status !== "archived" && (
                  <MobileProductCard
                    data={product}
                    key={`mobile-${index}`}
                    refetch={refetch}
                  />
                )}
              </>
            ))}
          </TableSm>
          <Button
            href={`/dashboard/${currentRole}/sell-products/add-new-product`}
            color="accent"
            className="bottom-10 right-5 z-30 max-lg:fixed max-lg:shadow-lg lg:self-end"
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
