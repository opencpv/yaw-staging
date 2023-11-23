import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import CaDelete from "./CaDelete";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import CaTickEdit from "./CaTickEdit";

type Props = {
  data: any;
};

export default function SavedSearchCard({ data }: Props) {
  const [edit, setEdit] = useState(false);
  return (
    <div className="w-full rounded-2xl border-[1px] border-shade-50 p-2 flex flex-col gap-8 hover:scale-[1.02] cursor-pointer">
      <div className="relative w-full aspect-[527/380] ">
        <Image
          src={"/svgs/saved-searches2card.png"}
          fill
          alt="No saved search"
        />
      </div>

      <div className="flex w-full justify-between gap-2">
        {!edit ? (
          <div className="flex flex-col gap-1 w-full">
            <p className="text-[1.5625rem] font-semibold">My Kasoa Search</p>
            <p className="text-[1rem]">Date Created</p>
          </div>
        ) : (
          <input
            className="rounded-[4px] border-[1px] border-[#E6E6E6] h-[52px] p-[0.93754rem] w-full"
            placeholder="My Kasoa Search "></input>
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
      <div className="flex justify-between items-center">
        <DeleteModal />
        <Link href="/">
          <div className="flex justify-between items-center">
            <p className="text-primary-500">View Search Results</p>
            <MdOutlineKeyboardArrowRight color="#073B3A" size="24px" />
          </div>
        </Link>
      </div>
    </div>
  );
}
