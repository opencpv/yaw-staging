import { useState } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { ItemPublicationStatus } from "./PublicationStatus";
import Toggle from "@/components/__shared/ui/Toggle";

interface Props {
  isAvailable: boolean;
  status: ItemPublicationStatus;
  data: any;
}
const ProductStatus = ({ isAvailable, data, status }: Props) => {
  const [value, setValue] = useState(isAvailable);

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
