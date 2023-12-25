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
        <div className="flex flex-col gap-5 max-w-[610px]">
          <p className="text-[1.25rem] lg:text-[1.5625rem] font-semibold">
            Block Users
          </p>
          <p className="text-shade-200">
            Once you block someone, that person can no longer send you
            messages.They may be able to rate and review you and you can still
            view their listings if any exist.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-[603px]">
        <div className="flex justify-between items-center">
          {" "}
          <p className="font-semibold text-[1.25rem]">Your Blocked List</p>
          {blockedUsers && (
            <Button className="h-[38px] px-5 py-2.5 bg-[#073B3A] rounded-lg text-white" onPress={() => setBlockedUsers(false)}>
              Unblock all
              <CaBlockingPadlock />
            </Button>
          )}
        </div>
        {blockedUsers && (
          <div className="flex flex-col gap-4">
            {mockData?.map((r, index) => (
              <BlockCard key={index} data={r} />
            ))}
          </div>
        )}
      </div>
      {!blockedUsers && (
        <div className="w-full items-center flex flex-col gap-8 justify-center bg-[#F7F7F7] h-full min-h-[495px]">
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
    <div className="w-full justify-between flex items-center gap-3 ] hover:bg-primary-300 px-5 cursor-pointer">
      <div className="flex gap-6 w-full items-center">
        <div className="w-full aspect-square relative max-w-[69px] rounded-full overflow-hidden">
          <Image fill alt="Persona image" src={data?.image} objectFit="cover" />
        </div>
        <p className="text-[#073B3A] font-semibold">{data?.name}</p>
      </div>
      <div>
        <Button className="px-5 py-2.5 h-[38px] bg-[#99B3B2] text-white text-[13px] rounded-lg">
          Unblock
        </Button>
      </div>
    </div>
  );
};
