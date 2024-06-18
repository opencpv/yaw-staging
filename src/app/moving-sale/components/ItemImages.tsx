import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import React from "react";
import { MdWindow } from "react-icons/md";
import { useDisclosure } from "@nextui-org/react";
import dynamic from "next/dynamic";

const ItemGalleryModal = dynamic(() => import("./ItemGalleryModal"));

type Props = {
  query: any;
};

const ItemImages = ({ query }: Props) => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ItemGalleryModal
        onOpenChange={onOpenChange}
        onClose={onClose}
        isOpen={isOpen}
        itemData={query.data}
      />
      <section className="relative mb-16 grid h-60 grid-cols-2 gap-2 md:h-[27rem]">
        {/* Main image */}
        <div className="relative col-span-2 xs:col-span-1">
          <Image
            src="/assets/images/about/young-couple.webp"
            alt=""
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-1 hidden w-full flex-wrap gap-2 xs:flex">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx + 1}
              className="relative min-w-full flex-1 even:hidden max-xl:min-w-[160px] md:even:block xl:min-w-[300px]"
            >
              <Image
                src="/assets/images/about/young-couple.webp"
                alt=""
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <Button
          color="white"
          className={`absolute bottom-2 right-2 flex h-14 w-fit gap-3 px-1 text-neutral-600 ssm:px-3 md:bottom-8 md:right-10`}
          onClick={onOpen}
        >
          <span className="max-ssm:hidden">View all</span>
          <MdWindow className="shrink-0 rounded-sm border p-2 text-4xl" />
        </Button>
      </section>
    </>
  );
};

export default ItemImages;
