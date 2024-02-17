import { Button } from "@nextui-org/react";
import Image from "next/image";
import CaBlockingPadlock from "./icons/CaBlockingPadlock";
import { useState } from "react";
import CaBlockingBlock from "./icons/CaBlockingBlock";

const mockData = [
  {
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Awuraba",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Awuraba",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Awuraba",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Awuraba",
  },
];
export default function Blocking() {
  const [blockedUsers, setBlockedUsers] = useState(true);
  return (
    <div className="flex flex-col gap-5">
      <div className="border-b-2 border-[#E0E4EC] py-6">
        <div className="flex max-w-[610px] flex-col gap-5">
          <p className="text-[1.25rem] font-semibold lg:text-[1.5625rem]">
            Block Users
          </p>
          <p className="text-shade-200">
            Once you block someone, that person can no longer send you
            messages.They may be able to rate and review you and you can still
            view their listings if any exist.
          </p>
        </div>
      </div>
      <div className="flex max-w-[603px] flex-col gap-8">
        <div className="flex items-center justify-between">
          {" "}
          <p className="text-[1.25rem] font-semibold">Your Blocked List</p>
          {blockedUsers && (
            <Button
              className="h-[38px] rounded-lg bg-[#073B3A] px-5 py-2.5 text-white"
              onPress={() => setBlockedUsers(false)}
            >
              Unblock all
              <CaBlockingPadlock />
            </Button>
          )}
        </div>
        {blockedUsers && (
          <div className="flex flex-col gap-4">
            {mockData?.map((r, index) => <BlockCard key={index} data={r} />)}
          </div>
        )}
      </div>
      {!blockedUsers && (
        <div className="flex h-full min-h-[495px] w-full flex-col items-center justify-center gap-8 bg-[#F7F7F7]">
          <CaBlockingBlock />
          <p className="text-[1.25rem] font-semibold text-shade-200">
            You have no blocked users
          </p>
        </div>
      )}
    </div>
  );
}

type BProps = {
  data: any;
};
const BlockCard = ({ data }: BProps) => {
  return (
    <div className="] flex w-full cursor-pointer items-center justify-between gap-3 px-5 hover:bg-primary-300">
      <div className="flex w-full items-center gap-6">
        <div className="relative aspect-square w-full max-w-[69px] overflow-hidden rounded-full">
          <Image fill alt="Persona image" src={data?.image} objectFit="cover" />
        </div>
        <p className="font-semibold text-[#073B3A]">{data?.name}</p>
      </div>
      <div>
        <Button className="h-[38px] rounded-lg bg-secondary-400 px-5 py-2.5 text-[13px] text-white">
          Unblock
        </Button>
      </div>
    </div>
  );
};
