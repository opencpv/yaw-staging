"use client";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import React, { useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import ItemDetails from "../ItemDetails";
import ItemImages from "../ItemImages";
import ItemOwnerContact from "../ItemOwnerContact";
import ItemRelatedItems from "../ItemRelatedItems";
import { useFetchItemDetails } from "../../services";
import { Skeleton } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { updateItemViewCount } from "../../actions";
import { useItemPathStore } from "@/store/moving_sales/useMovingSalesStore";
import { useRouter } from "next/navigation";

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
      <div className="mb-5 flex items-center gap-2">
        <BreadCrumbPreLink
          label="Shop"
          onClick={() =>
            previousPath
              ? router.push(previousPath)
              : router.push("/moving-sale")
          }
        />
        <FaChevronRight className="text-shade-200" />
        {query.isLoading ? (
          <Skeleton className="h-[20px] w-[200px]" />
        ) : (
          <p className="font-[600] text-neutral-800">{query.data?.title}</p>
        )}
      </div>
      <ItemImages query={query} />
      <section className="mb-20 grid gap-x-20 gap-y-10 lg:grid-cols-3">
        {/* Grid col */}
        <ItemDetails query={query} />
        {/* Grid col */}
        <ItemOwnerContact query={query} />
      </section>
      <ItemRelatedItems />
    </main>
  );
};

export default DetailPage;
