import Image from "next/image";
import ProductStatus from "./ProductStatus";
import { formatDate } from "@/lib/utils/stringManipulation";
import calculateDaysSinceCreation from "@/lib/utils/calculateDaysSinceCreation";
import CaDashEdit from "../../../components/icons/CaDashEdit";
import CaDashDelete from "../../../components/icons/CaDashDelete";
import DeleteProductButton from "./DeleteProductButton";

const MobileProductCard = ({ data }: { data: any }) => {
  return (
    <div className="mb-6 grid w-full grid-cols-2 gap-y-2 divide-y divide-solid rounded-md border-2 border-[#396261] px-[24px] py-[32px] lg:hidden">
      <p className="col-span-2 font-bold">Product</p>
      <div className="grid w-full grid-cols-1 gap-[10px] p-[10px] md:grid-cols-8">
        <div className="relative aspect-[5/3]   md:col-span-5">
          <Image
            src={data.img_url}
            alt="product image"
            className="rounded-md "
            fill
          />
        </div>
        <div className="md:col-span-3 ">
          <p className="text-center text-[16px] font-semibold md:text-left">
            {data.product_name}
          </p>
          {data.condition == "NEW" ? (
            <p className=" mx-auto mb-[10px] mt-[10px] w-fit rounded-full bg-[#54C38A] px-10  py-1 text-center text-[13px] capitalize text-white md:mx-0">
              {data.condition}
            </p>
          ) : (
            <p className=" mx-auto mb-[10px] mt-[10px]  w-fit rounded-full bg-[#FFE3B0]  px-10 py-1 text-center text-[13px] capitalize text-[#545454]  md:mx-0">
              {data.condition}
            </p>
          )}
          <p className="text-center text-[13px] font-bold text-[#8A8A8A] md:text-left">
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
      <div className="col-span-2 grid grid-cols-2 place-items-center py-4 align-middle">
        <p className="font-bold">Category</p>
        <p className="text-center text-[13px]">{data.category}</p>
      </div>
      <div className="col-span-2 grid grid-cols-2  place-items-center py-4  align-middle ">
        <p className="font-bold">Date Created</p>
        <div className="w-full text-center">
          <p className="font-semibold">{formatDate(data.created_at)}</p>
          <p className="text-[#B0B0B0]">
            {calculateDaysSinceCreation(data.created_at)} days ago
          </p>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-2  py-4 align-middle ">
        <button className="flex w-full cursor-pointer justify-center rounded-[8px] bg-secondary-50 p-4">
          <CaDashEdit />
        </button>
        <DeleteProductButton id={data.id} table="sell_items" />
      </div>
    </div>
  );
};

export default MobileProductCard;
