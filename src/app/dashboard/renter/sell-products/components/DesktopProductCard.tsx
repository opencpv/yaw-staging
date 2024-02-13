import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import { formatDate } from "@/lib/utils/stringManipulation";
import Image from "next/image";
import CaDashEdit from "../../../components/icons/CaDashEdit";
import CaDashDelete from "../../../components/icons/CaDashDelete";
import ProductStatus from "./ProductStatus";
import DeleteProductButton from "./DeleteProductButton";

const DesktopProductCard = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex w-full gap-[10px] p-[10px]">
        <div className="relative  aspect-[5/3] w-[60%]">
          <Image
            src={data.img_url}
            alt="product image"
            className="rounded-md "
            fill
          />
        </div>

        <div className="">
          <p className="text-[16px] font-semibold">{data.product_name}</p>
          {data.condition == "NEW" ? (
            <p className=" mb-[10px] mt-[10px] w-full rounded-full  bg-[#54C38A] py-1 text-center text-[13px] capitalize text-white">
              {data.condition}
            </p>
          ) : (
            <p className=" mb-[10px] mt-[10px] w-full rounded-full  bg-[#54C38A] py-1 text-center text-[13px] capitalize  text-[#545454]">
              {data.condition}
            </p>
          )}
          <p className="text-[13px] font-bold text-[#8A8A8A]">
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
          <button className="cursor-pointer rounded-[8px] bg-secondary-50 p-4">
            <CaDashEdit />
          </button>
          <DeleteProductButton id={data.id} table="sell_items" />
        </div>
      </div>
    </>
  );
};

export default DesktopProductCard;
