"use client";
import Image from "next/image";
import Button from "@/components/__shared/ui/button/Button";
import { HiChevronRight } from "react-icons/hi";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";

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
    <li className="group grid items-center gap-10 sm:grid-cols-2">
      <FramerWrapper className="relative aspect-video group-even:sm:order-2">
        <Image
          src={image}
          alt={activity}
          fill
          className="rounded-xl object-cover"
        />
      </FramerWrapper>
      <div className="flex max-w-xl flex-col gap-4 text-primary group-even:sm:order-1">
        <h3 className="font-bold">{title}</h3>
        <p>{body}</p>
        <Button
          variant="ghost"
          color="accent"
          href="/about#QePYkSphjGkugQ=="
          className="font-medium sm:text-lg"
        >
          List your property <HiChevronRight size={24} />
        </Button>
      </div>
    </li>
  );

  return <></>;
};

export default ManagePropertiesInfo;
