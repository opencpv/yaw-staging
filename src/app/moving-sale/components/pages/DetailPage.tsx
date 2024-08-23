"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import ItemDetails from "../ItemDetails";
import ItemImages from "../ItemImages";
import ItemOwnerContact from "../ItemOwnerContact";
import ItemRelatedItems from "../ItemRelatedItems";
import { useFetchItemDetails } from "../../services";
// import { Skeleton } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { updateItemViewCount } from "../../actions";
import { useItemPathStore } from "@/store/moving_sales/useMovingSalesStore";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/__shared/ui/breadcrumb";

type Props = {
  id: number;
};

const DetailPage = (props: Props) => {
  const router = useRouter();
  const { previousPath } = useItemPathStore();
  const query = useFetchItemDetails({ itemId: props.id });
  const [itemViewCount, setItemViewCount] = useLocalStorage<{
    itemIds: number[];
  }>("item_view_count", { itemIds: [] });

  const hasUpdatedView = useRef(false);
  useEffect(() => {
    const shouldUpdateView = !itemViewCount.itemIds.includes(props.id);
    if (shouldUpdateView && !hasUpdatedView.current) {
      const newItemIds = [...itemViewCount.itemIds, props.id];
      setItemViewCount({ itemIds: newItemIds });
      updateItemViewCount(props.id);
      hasUpdatedView.current = true;
    }
  }, [itemViewCount.itemIds, props.id, setItemViewCount]);

  return (
    <main className="wrapper text-shade-200">
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={previousPath ? previousPath : "/moving-sale"}>
              Shop
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {query.isLoading ? (
                // <Skeleton className="h-[20px] w-[200px]" />
                <></>
              ) : (
                <>{query.data?.title}</>
              )}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {query?.data && <ItemImages query={query} />}
      <section className="grid gap-x-20 gap-y-10 lg:grid-cols-3">
        <ItemDetails query={query} />
        <ItemOwnerContact query={query} />
      </section>
      <Suspense>
        <ItemRelatedItems />
      </Suspense>
    </main>
  );
};

export default DetailPage;
