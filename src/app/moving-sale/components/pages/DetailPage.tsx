"use client";
import React, { Suspense, useEffect, useRef } from "react";
import ItemDetails from "../ItemDetails";
import ItemImages from "../ItemImages";
import ItemOwnerContact from "../ItemOwnerContact";
import ItemRelatedItems from "../ItemRelatedItems";
import { useFetchItemDetails } from "../../services";
import { Skeleton } from "@/components/__shared/ui/skeleton";
import { useLocalStorage } from "@uidotdev/usehooks";
import { updateItemViewCount } from "../../actions";
import { useItemPathStore } from "@/store/moving_sales/useMovingSalesStore";
import { Breadcrumb } from "@/components/__shared/ui/breadcrumb/breadcrumb";
import toast from "react-hot-toast";

type Props = {
  id: number;
};

const DetailPage = (props: Props) => {
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

  if (query.error) toast.error("Something went wrong while fetching data");

  return (
    <main className="wrapper text-shade-200">
      {query.isLoading ? (
        <div className="flex flex-col gap-10">
          <Skeleton>
            <div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</div>
          </Skeleton>
          <Skeleton className="w-full max-w-3xl">
            <div className="aspect-video" />
          </Skeleton>
          <Skeleton>
            <div>Lorem ipsum dolor sit amet.</div>
          </Skeleton>
        </div>
      ) : (
        <>
          <Breadcrumb
            link={previousPath ? previousPath : "/moving-sale"}
            page={query.data?.title || ""}
            className="mb-10"
          />
          {query?.data && <ItemImages query={query} />}
          <section className="grid gap-x-20 gap-y-10 lg:grid-cols-3">
            <ItemDetails query={query} />
            <ItemOwnerContact query={query} />
          </section>
          <Suspense>
            <ItemRelatedItems />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default DetailPage;
