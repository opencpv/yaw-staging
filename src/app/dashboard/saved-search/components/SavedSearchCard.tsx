import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import CaDelete from "./CaDelete";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import CaTickEdit from "./CaTickEdit";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
  data: any;
};

export default function SavedSearchCard({ data }: Props) {
  const [edit, setEdit] = useState(false);
  const { images } = useAssets();

  return (
    <div className="flex w-full cursor-pointer flex-col gap-8 rounded-2xl border-[1px] border-shade-50 p-2 hover:scale-[1.02]">
      <div className="relative aspect-[527/380] w-full ">
        <Image src={images.StockImage} fill alt="No saved search" />
        {/* <div className="absolute inset-0 h-full w-full bg-white bg-opacity-40"></div> */}
        {/* <FaMagnifyingGlass
          size={48}
          className="absolute left-[50%] top-[40%]"
        /> */}
      </div>

      <div className="flex w-full justify-between gap-2">
        {!edit ? (
          <div className="flex w-full flex-col gap-1">
            <p className="text-[1.25rem] font-semibold lg:text-[1.5625rem]">
              My Kasoa Search
            </p>
            <p className="text-[1rem]">Date Created</p>
          </div>
        ) : (
          <input
            className="h-[52px] w-full rounded-[4px] border-[1px] border-[#E6E6E6] p-[0.93754rem]"
            placeholder="My Kasoa Search "
          ></input>
        )}
        <div className="flex flex-col items-center justify-center">
          {!edit ? (
            <Button className="bg-white" onClick={() => setEdit(true)}>
              <MdOutlineEdit size="34" />
            </Button>
          ) : (
            <Button className="bg-white" onClick={() => setEdit(false)}>
              <CaTickEdit />
            </Button>
          )}{" "}
          {!edit && <p className="font-semibold">01/11/23</p>}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <DeleteModal />
        <Link href="/">
          <div className="flex items-center justify-between">
            <p className="text-primary-500">View Search Results</p>
            <MdOutlineKeyboardArrowRight color="#073B3A" size="24px" />
          </div>
        </Link>
      </div>
    </div>
  );
}
