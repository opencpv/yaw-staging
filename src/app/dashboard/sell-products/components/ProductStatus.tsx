import { useState } from "react";
import Select from "../../components/Select";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import Button from "../../components/Button";
import supabase from "@/lib/utils/supabaseClient";

interface Props {
  isAvailalbe: boolean;
  width?: string;
  id: number;
}
const ProductStatus = ({ isAvailalbe, width, id }: Props) => {
  const [value, setValue] = useState<"available" | "sold">(
    isAvailalbe ? "available" : "sold"
  );

  const handleSelectionChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
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
    <div className="w-fit">
      <Select
        options={["available", "sold"]}
        value={value}
        handleSelectionChange={handleSelectionChange}
        width={width}
      />
      {isAvailalbe ? (
        <div className="flex items-center justify-center gap-2 text-xs font-[600] mt-3">
          Still Available?
          <Button
            isIconOnly
            className="p-1 bg-white border-0 rounded-md shadow-large"
          >
            <FaRegCheckCircle className="text-xl text-green-500" />
          </Button>
          <Button
            isIconOnly
            className="p-1 bg-white border-0 rounded-md shadow-large"
          >
            <FaRegTimesCircle
              className="text-xl text-red-500"
              onClick={() => setValue("sold")}
            />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductStatus;
