import AOSWrapper from "@/components/__shared/AOSWrapper";
import ReportIssue from "@/components/__shared/ReportIssue";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import PropertyGalleryModal from "./PropertyGalleryModal";
import { ListingInterface } from "../../../../../interfaces";

type Props = {
  images: ListingInterface;
};

const PropertyDetailsImages = (props: Props) => {
  const { images } = useAssets();
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <PropertyGalleryModal
        onOpenChange={onOpenChange}
        onClose={onClose}
        isOpen={isOpen}
      />
      <section className="fade-in-bottom mb-10 h-full max-h-[150rem]">
        <div
          className="hidden h-full cursor-pointer grid-cols-2 gap-3 lg:grid"
          onClick={onOpen}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
            <div
              key={idx + 1}
              className={`property-details-img-group relative ${
                idx === 4 || idx === 5 ? "row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={images.StockImage}
                alt={props.images.propertyName as string}
                fill
                className="transition-all hover:scale-[1.02]"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        {/* Slider */}
        <div className="h-fit w-full cursor-pointer lg:hidden">
          <SliderWide
            pagination
            navigation
            onClick={onOpen}
            images={[1, 2, 3, 4, 5].map((image) => ({
              src: "/assets/images/Stock.jpg",
              name: "",
              href: "",
            }))}
          />
        </div>
        <ReportIssue className="mt-5" />
      </section>
    </>
  );
};

export default PropertyDetailsImages;
