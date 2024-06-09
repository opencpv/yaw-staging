import { useState } from "react";
import Select from "../ui/Select";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { ItemPublicationStatus } from "./PublicationStatus";
import { toast } from "react-toastify";
import { ProductStatusProp } from "@/lib/typings";

interface Props {
  isAvailable: boolean;
  publicationStatus: ItemPublicationStatus;
  id: number;
  width?: string;
  refetch: () => void;
}
const ProductStatus = ({
  isAvailable,
  width,
  id,
  publicationStatus,
  refetch,
}: Props) => {
  const [value, setValue] = useState<"available" | "unavailable">(
    isAvailable ? "available" : "unavailable",
  );

  const handleSelectionChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setValue(e.target.value as "available" | "unavailable");

    const value: boolean = e.target.value == "available" ? true : false;
    const updateObject: {
      is_available?: boolean;
      status?: ProductStatusProp;
      inactive_date?: string | null;
    } = {};
    updateObject.is_available = value;
    updateObject.status = value ? "active" : "inactive";
    updateObject.inactive_date = value ? null : new Date().toISOString();
    const { data, error } = await supabase
      .from("products")
      .update({ ...updateObject })
      .eq("id", id)
      .select();
    refetch();
    if (!error) {
      toast.success("Status updated successfully", {
        toastId: "toast",
        autoClose: 2000,
      });
    }
  };
  return (
    <div className="flex w-full flex-wrap items-center gap-3">
      <Select
        color="primary"
        options={["Available", "Unavailable"]}
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
