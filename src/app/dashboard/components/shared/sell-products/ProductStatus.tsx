import { useContext, useState } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { ItemPublicationStatus } from "./PublicationStatus";
import Toggle from "@/components/__shared/ui/Toggle";
import { ItemContext } from "@/app/dashboard/contexts/ItemContext";

interface Props {
  isAvailable: boolean;
  status: ItemPublicationStatus;
}
const ProductStatus = ({ isAvailable, status }: Props) => {
  const [value, setValue] = useState(isAvailable);

  const item = useContext(ItemContext)?.item;

  const handleSelectionChange = async (value: boolean) => {
    setValue(value);
    // const { data, error } = await supabase
    //   .from("sell_items")
    //   .update({ avaliable: value })
    //   .eq("id", id)
    //   .select();
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
