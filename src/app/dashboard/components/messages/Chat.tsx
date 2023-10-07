import Image from "next/image";
import React from "react";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="grid items-start grid-cols-8 gap-6 pt-8 pb-2 first:pt-2 border-b min-h-[3.5rem] cursor-default hover:scale-[1.02] transition-all">
      <div className="flex items-center col-span-7 gap-5">
        <div className="relative w-16 h-16 rounded-full">
          <Image
            src="/assets/images/dashboard-navbar.png"
            alt=""
            className=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col justify-between w-6/12 h-full col-span-9">
          <h4 className="text-primary-500 font-[700] ">Mary Jane</h4>
          <p className="leading-[3] truncate text-neutral-800">
            Lorem ipsum dolor, sit amet consectetur
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-1 p-3 text-sm text-white rounded-full w-7 h-7 justify-self-end bg-neutral-600">
        1
      </div>
    </div>
  );
};

export default Chat;
