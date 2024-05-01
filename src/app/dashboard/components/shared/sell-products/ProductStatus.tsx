import { useState } from "react";
import Select from "../ui/Select";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { ItemPublicationStatus } from "./PublicationStatus";

interface Props {
  isAvailable: boolean;
  publicationStatus: ItemPublicationStatus;
  id: number;
  width?: string;
}
const ProductStatus = ({
  isAvailable,
  width,
  id,
  publicationStatus,
}: Props) => {
  const [value, setValue] = useState<"available" | "sold">(
    isAvailable ? "available" : "sold",
  );

  const handleSelectionChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setValue(e.target.value as "available" | "sold");
    const value: boolean = e.target.value == "available" ? true : false;

    const { data, error } = await supabase
      .from("sell_items")
      .update({ avaliable: value })
      .eq("id", id)
      .select();
  };
  return (
    <div className="flex w-full flex-wrap items-center gap-3">
      <Select
        color="primary"
        options={["Available", "Sold"]}
        disabled={
          publicationStatus === "suspended" || publicationStatus === "archived"
        }
        value={value}
        selectorIconClassName="text-neutral-800"
        handleSelectionChange={handleSelectionChange}
        className="lg:max-xl:w-40"
      />
    </div>
  );
};

export default ProductStatus;
