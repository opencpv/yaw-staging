import { useContext, useState } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { ItemPublicationStatus } from "./PublicationStatus";
import Toggle from "@/components/__shared/ui/Toggle";
import { ItemContext } from "@/app/dashboard/contexts/ItemContext";
import { ProductStatusProp } from "@/lib/typings";
import { toast } from "react-hot-toast";

interface Props {
  isAvailable: boolean;
  status: ItemPublicationStatus;
  id: number;
  refetch: () => void;
}
const ProductStatus = ({ isAvailable, status, id, refetch }: Props) => {
  const [value, setValue] = useState(isAvailable);

  const item = useContext(ItemContext)?.item;

  const handleSelectionChange = async (value: boolean) => {
    setValue(value);
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
      toast.success("Status updated successfully");
    }
  };
  return (
    <Toggle
      color="primary"
      isSelected={value}
      disabled={status === "Suspended"}
      title={status === "Suspended" ? "Suspended" : undefined}
      onValueChange={handleSelectionChange}
    />
  );
};

export default ProductStatus;
