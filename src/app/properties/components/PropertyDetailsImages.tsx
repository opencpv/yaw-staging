"use client";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import Image from "next/image";
import images from "@/enum/temp/images";
import dynamic from "next/dynamic";
const GalleryModalBtn = dynamic(
  () => import("@/components/__shared/ui/button/GalleryModalBtn"),
);
const PropertyGalleryModal = dynamic(() => import("./PropertyGalleryModal"));

type Props = {
  listing: Property;
};

const PropertyDetailsImages = ({ listing }: Props) => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

  return (
    <section>
      <PropertyGalleryModal
        onOpenChange={onOpenChange}
        onClose={onClose}
        isOpen={isOpen}
        itemData={listing}
      />
      <section className="grid gap-5 md:grid-cols-4">
        {/* banner image */}
        <div className="fade-in relative col-span-3 aspect-video w-full">
          <Image
            src={images[0]}
            alt=""
            fill
            className="rounded-3xl object-cover"
          />
          <GalleryModalBtn onClick={onOpen} />
        </div>
        <div className="fade-in grid gap-5 max-md:hidden">
          <div className="relative w-full">
            <Image
              src={images[1]}
              alt=""
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div
            className="fade-in relative w-full"
            style={{ animationDelay: "0.5s" }}
          >
            <Image
              src={images[2]}
              alt=""
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PropertyDetailsImages;
