import Image, { StaticImageData } from "next/image";

const SlideItem = ({ image }: { image: StaticImageData }) => (
  <div className="relative lg:mx-10  lg:w-[772px] lg:max-w-[772px] md:max-w-[679px] aspect-[679/527] lg:aspect-[772/599] ">
    <Image src={image} alt="slide image" fill className="rounded-2xl" />
  </div>
);

export default SlideItem;
