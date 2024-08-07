"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useDisclosure } from "@nextui-org/react";
import PropertyGalleryModal from "./PropertyGalleryModal";
import { ListingInterface } from "../../../../interfaces";
import { useIntersectionObserver } from "@/lib/utils/intersectionObserver";
import Image from "next/image";
import images from "@/enum/temp/images";

type Props = {
  images: string[];
};

const PropertyDetailsImages = (props: Props) => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section>
      <PropertyGalleryModal
        onOpenChange={onOpenChange}
        onClose={onClose}
        isOpen={isOpen}
      />
      <section className="grid md:grid-cols-4 gap-5">
        <div className="relative col-span-3 aspect-video w-full">
          <Image
            src={images[0]}
            alt=""
            fill
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="grid gap-5 max-md:hidden">
          <div className="relative w-full">
            <Image
              src={images[1]}
              alt=""
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="relative w-full">
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
