"use client";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import ArrowLink from "./link/ArrowLink";

type Props = {
  activity: string;
  image: string;
  title: string;
  body: string;
  href: string;
};

const ManagePropertiesInfo = ({
  activity,
  image,
  title,
  body,
  href,
}: Props) => {
  return (
    <li className="relative min-h-fit max-w-[60rem] space-y-5 sm:h-[20rem] sm:space-y-0 md:h-[30rem]">
      <div className="relative rounded-xl h-[15rem] w-full sm:h-4/5 sm:w-9/12 md:h-[inherit]">
        <Image
          src={image}
          alt={activity.toLowerCase()}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <div className="bottom-[-10%] right-0 flex w-[95vw] -ml-3 items-center justify-center rounded-lg bg-primary-400 p-10 text-white sm:absolute sm:max-w-[30rem] sm:translate-x-0 md:bottom-[20%]">
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="font-[700] text-white">{title}</h2>
            <small className="inline-block">{body}</small>
          </div>
          <ArrowLink
            href={`${href}`}
            text="List your property"
            color="#D7D12D"
          />
        </div>
      </div>
    </li>
  );
};

export default ManagePropertiesInfo;
