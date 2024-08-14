import capitalizeName, { getArticle } from "@/lib/utils/stringManipulation";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const ListingModal = dynamic(() => import("./steps/ListingModal")); 

type Props = {
  variant: "property" | "item";
};

const ItemEmptyState = (props: Props) => {
  const router = useRouter();
  const handleCreate = () => {
    if (props.variant === "property")
      router.push(`/dashboard/lister/overview/create`);
    else router.push(`/dashboard/lister/sell-products/add-new-product`);
  };

  return (
    <>
      {props.variant === "property" ? (
        <ListingModal
          className="scale-hover flex w-full flex-col items-center gap-5"
          onClick={handleCreate}
        >
          <div className="flex flex-col items-center">
            <p>You have no active {props.variant}</p>
            <p className="text-base text-shade-300">
              Click here to create {getArticle(props.variant)}
            </p>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <FaPlus />
            Add {capitalizeName(props.variant)}
          </div>
        </ListingModal>
      ) : (
        <button
          className="scale-hover w-full flex flex-col items-center gap-5"
          onClick={handleCreate}
        >
          <div className="flex flex-col items-center">
            <p>You have no active {props.variant}</p>
            <p className="text-base text-shade-300">
              Click here to create {getArticle(props.variant)}
            </p>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <FaPlus />
            Add {capitalizeName(props.variant)}
          </div>
        </button>
      )}
    </>
  );
};

export default ItemEmptyState;
