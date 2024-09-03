import Image from "next/image";
import React from "react";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import dynamic from "next/dynamic";
const GalleryModalBtn = dynamic(
  () => import("@/components/__shared/ui/button/gallery-modal-btn/gallery-modal-button"),
);
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
            src={
              query.data.primary_image ||
              "/assets/images/about/young-couple.webp"
            }
            alt=""
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-1 hidden w-full flex-wrap gap-2 xs:flex">
          {query.data.images.map((imageUrl: string, idx: number) => (
            <div
              key={idx + 1}
              className="relative min-w-full flex-1 even:hidden max-xl:min-w-[160px] md:even:block xl:min-w-[300px]"
            >
              <Image
                src={imageUrl}
                alt=""
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <GalleryModalBtn onClick={onOpen} />
      </section>
    </>
  );
};

export default ItemImages;
