"use client";
import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";
import dynamic from "next/dynamic";
import { LinkButton } from "@/components/__shared/ui/button/Button";
const FramerWrapper = dynamic(
  () => import("@/components/__shared/hoc/framer-wrapper"),
);

type Props = {
  activity: string;
  image: string;
  title: string;
  body: string;
};

const ManagePropertiesInfo = ({ activity, image, title, body }: Props) => {
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
        <LinkButton
          color="accent"
          variant="link"
          size="fit"
          href="/about#QePYkSphjGkugQ=="
        >
          List your property <HiChevronRight size={24} />
        </LinkButton>
      </div>
    </li>
  );

  return <></>;
};

export default ManagePropertiesInfo;
