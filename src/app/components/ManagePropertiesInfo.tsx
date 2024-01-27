"use client";
import Image from "next/image";
import ArrowLink from "./link/ArrowLink";
import AOSWrapper from "@/components/__shared/AOSWrapper";

type Props = {
  activity: string;
  image: string;
  title: string;
  body: string;
  href: string;
  position?: "left" | "right";
};

const ManagePropertiesInfo = ({
  activity,
  image,
  title,
  body,
  href,
  position,
}: Props) => {
  if (position === "right")
    return (
      <li className="relative min-h-fit max-w-[60rem] space-y-5 sm:ml-auto sm:h-[20rem] sm:space-y-0 md:h-[30rem]">
        <div className="relative h-[15rem] w-full rounded-xl sm:h-4/5 sm:w-9/12 sm:translate-x-[33%] md:h-[inherit]">
          <Image
            src={image}
            alt={activity.toLowerCase()}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>
        <div className="bottom-[-10%] left-0 -ml-3 flex w-[95vw] items-center justify-center rounded-lg bg-primary-400 p-10 text-white sm:absolute sm:max-w-[30rem] sm:translate-x-[9%] md:bottom-[20%]">
          <div className="space-y-10">
            <div className="space-y-3">
              <AOSWrapper animation="zoom-in" duration="1500">
                <h2 className="text-2xl font-[700] text-white">{title}</h2>
              </AOSWrapper>
              <AOSWrapper animation="fade-up">
                <p className="line-clamp-3">{body}</p>
              </AOSWrapper>
            </div>
            <ArrowLink
              href={`${href}`}
              text="Manage your property"
              color="#D7D12D"
            />
          </div>
        </div>
      </li>
    );
  else
    return (
      <li className="relative min-h-fit max-w-[60rem] space-y-5 sm:h-[20rem] sm:space-y-0 md:h-[30rem]">
        <div className="relative h-[15rem] w-full rounded-xl sm:h-4/5 sm:w-9/12 md:h-[inherit]">
          <Image
            src={image}
            alt={activity.toLowerCase()}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>
        <div className="bottom-[-10%] right-0 -ml-3 flex w-[95vw] items-center justify-center rounded-lg bg-primary-400 p-10 text-white sm:absolute sm:max-w-[30rem] sm:translate-x-0 md:bottom-[20%]">
          <div className="space-y-10">
            <div className="space-y-3">
              <AOSWrapper animation="zoom-in" duration="1500">
                <h2 className="text-2xl font-[700] text-white">{title}</h2>
              </AOSWrapper>
              <AOSWrapper animation="fade-up">
                <p className="line-clamp-3">{body}</p>
              </AOSWrapper>
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
