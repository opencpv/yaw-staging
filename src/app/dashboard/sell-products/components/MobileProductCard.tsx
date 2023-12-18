import Image from "next/image";
import ProductStatus from "./ProductStatus";
import { formatDate } from "@/lib/utils/stringManipulation";
import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import CaDashEdit from "../../components/icons/CaDashEdit";
import CaDashDelete from "../../components/icons/CaDashDelete";
import DeleteProductButton from "./DeleteProductButton";

const MobileProductCard = ({ data }: { data: any }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-y-2 mb-6 divide-solid divide-y rounded-md lg:hidden border-2 border-[#396261] py-[32px] px-[24px]">
      <p className="font-bold col-span-2">Product</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-8 gap-[10px] p-[10px]">
        <div className="relative md:col-span-5   aspect-[5/3]">
          <Image
            src={data.img_url}
            alt="product image"
            className="rounded-md "
            fill
          />
        </div>
        <div className="md:col-span-3 ">
          <p className="font-semibold text-[16px] text-center md:text-left">
            {data.product_name}
          </p>
          {data.condition == "NEW" ? (
            <p className=" capitalize text-center bg-[#54C38A] w-fit px-10 mx-auto md:mx-0  rounded-full py-1 mt-[10px] text-[13px] text-white mb-[10px]">
              {data.condition}
            </p>
          ) : (
            <p className=" capitalize text-center bg-[#FFE3B0]  w-fit px-10 mx-auto  md:mx-0 rounded-full py-1 mt-[10px] text-[13px] text-[#545454]  mb-[10px]">
              {data.condition}
            </p>
          )}
          <p className="font-bold text-[13px] text-[#8A8A8A] text-center md:text-left">
            GHS {data.price}
          </p>
        </div>
      </div>
      <div className="flex h-full  items-center justify-center">
        <ProductStatus
          width={"w-[130px]"}
          isAvailalbe={data.available}
          id={data.id}
        />
      </div>
      <div className="col-span-2 py-4 grid grid-cols-2 align-middle place-items-center">
        <p className="font-bold">Category</p>
        <p className="text-[13px] text-center">{data.category}</p>
      </div>
      <div className="col-span-2 grid grid-cols-2  py-4 align-middle  place-items-center ">
        <p className="font-bold">Date Created</p>
        <div className="text-center w-full">
          <p className="font-semibold">{formatDate(data.created_at)}</p>
          <p className="text-[#B0B0B0]">
            {calculateDaysSinceCreation(data.created_at)} days ago
          </p>
        </div>
      </div>
      <div className="col-span-2 gap-2 grid grid-cols-2  py-4 align-middle ">
        <button className="p-4 rounded-[8px] bg-[#F1F1F1] cursor-pointer w-full flex justify-center">
          <CaDashEdit />
        </button>
        <DeleteProductButton id={data.id} table="sell_items" />
      </div>
    </div>
  );
};

export default MobileProductCard;
