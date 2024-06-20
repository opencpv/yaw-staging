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
          className="absolute bottom-2 right-2 flex h-fit w-fit gap-3 rounded-md px-3 py-1 text-neutral-600 shadow-md md:bottom-5 md:right-10"
          onClick={onOpen}
        >
          View all
          <MdWindow className="shrink-0" size={18} />
        </Button>
      </section>
    </>
  );
};

export default ItemImages;
