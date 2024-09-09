import Image, { StaticImageData } from "next/image";

const SlideItem = ({ image }: { image: StaticImageData | string }) => (
  <div className="relative aspect-[679/527]  md:max-w-[679px] lg:mx-10 lg:aspect-[772/599] lg:w-[772px] lg:max-w-[772px] ">
    <Image src={image} alt="slide image" fill className="rounded-2xl" />
  </div>
);

export default SlideItem;
