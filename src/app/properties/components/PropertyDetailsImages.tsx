"use client";
import { useDisclosure } from "@nextui-org/react";
import PropertyGalleryModal from "./PropertyGalleryModal";
import Image from "next/image";
import images from "@/enum/temp/images";

type Props = {
  images: string[];
};

const PropertyDetailsImages = (props: Props) => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

  return (
    <section>
      <PropertyGalleryModal
        onOpenChange={onOpenChange}
        onClose={onClose}
        isOpen={isOpen}
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
