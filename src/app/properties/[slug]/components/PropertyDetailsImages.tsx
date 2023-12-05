import AOSWrapper from "@/components/__shared/AOSWrapper";
import ReportIssue from "@/components/__shared/ReportIssue";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import PropertyGalleryModal from "./PropertyGalleryModal";

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
      <AOSWrapper animation="fade-up"  className="h-full mb-10">
        <div className="hidden h-full grid-cols-2 gap-3 cursor-pointer lg:grid" onClick={onOpen}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
            <div
              key={idx + 1}
              className={`relative property-details-img-group ${
                idx === 4 || idx === 5 ? "row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={images.StockImage}
                alt={props.images.propertyType}
                fill
                className="transition-all hover:scale-[1.02]"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        {/* Slider */}
        <div className="w-full cursor-pointer h-fit lg:hidden" onClick={onOpen}>
          <SliderWide navigation
            images={[1, 2, 3, 4, 5].map((image) => ({
              src: "/assets/images/Stock.jpg",
              name: "",
            }))}
          />
        </div>
        <ReportIssue className="mt-5" />
      </AOSWrapper>
    </>
  );
};

export default PropertyDetailsImages;
