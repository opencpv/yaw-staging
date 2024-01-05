import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { formatDate } from "@/lib/utils/stringManipulation";
import Image from "next/image";
import CaDashEdit from "../../components/icons/CaDashEdit";
import CaDashDelete from "../../components/icons/CaDashDelete";
import ProductStatus from "./ProductStatus";
import DeleteProductButton from "./DeleteProductButton";

const DesktopProductCard = ({ data }: { data: any }) => {
  return (
    <>
      <div className="w-full flex gap-[10px] p-[10px]">
        <div className="relative  w-[60%] aspect-[5/3]">
          <Image
            src={data.img_url}
            alt="product image"
            className="rounded-md "
            fill
          />
        </div>

        <div className="">
          <p className="font-semibold text-[16px]">{data.product_name}</p>
          {data.condition == "NEW" ? (
            <p className=" capitalize text-center bg-[#54C38A] w-full  rounded-full py-1 mt-[10px] text-[13px] text-white mb-[10px]">
              {data.condition}
            </p>
          ) : (
            <p className=" capitalize text-center bg-[#54C38A] w-full  rounded-full py-1 mt-[10px] text-[13px] text-[#545454]  mb-[10px]">
              {data.condition}
            </p>
          )}
          <p className="font-bold text-[13px] text-[#8A8A8A]">
            GHS {data.price}
          </p>
        </div>
      </div>
      <div className="flex h-[100%] items-center justify-center font-semibold">
        <p>{data.category}</p>{" "}
      </div>
      <div className="flex h-[100%] items-center justify-center ">
        <div className="text-center">
          <p className="font-semibold">{formatDate(data.created_at)}</p>
          <p className="text-[#B0B0B0]">
            {calculateDaysSinceCreation(data.created_at)} days ago
          </p>
        </div>
      </div>

      <div className="flex h-full  items-center justify-center">
        <ProductStatus isAvailalbe={data.available} id={data.id} />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex gap-2">
          <button className="p-4 rounded-[8px] bg-[#F1F1F1] cursor-pointer">
            <CaDashEdit />
          </button>
          <DeleteProductButton id={data.id} table="sell_items" />
        </div>
      </div>
    </>
  );
};

export default DesktopProductCard;
