import styles from "../../../index.module.css";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Bullet from "@/components/__shared/ui/modals/steps/Bullet";

const data = [
  {
    number: 1,
    title: "Tell us about your place",
    description:
      "Provide essential details, such as its location and its maxiumum guest capacity.",
    image: {
      src: "/assets/images/leaseform/lease-form-1.png",
      alt: "Interior Design",
    },
  },
  {
    number: 2,
    title: "Set it apart and make it exceptional",
    description:
      "Add 10 images, a title and a description, and rest assured, we're here to support you in every step of the way.",
    image: {
      src: "/assets/images/leaseform/lease-form-2.jpeg",
      alt: "House with pool",
    },
  },
  {
    number: 3,
    title: "Finish up and publish",
    description: "Publish your listing.",
    image: {
      src: "/assets/images/leaseform/lease-form-3.jpeg",
      alt: "House with family outside",
    },
  },
];

const Intro = () => {
  return (
    <>
      <h2 className={`${styles.title}`}>
        Listing on RentRight is straightforward.
      </h2>
      <div className="flex flex-col">
        {data.map((item) => (
          <HeadsUp key={item.number} {...item} />
        ))}
      </div>
    </>
  );
};

export default Intro;

type Props = {
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
  number: number;
};
const HeadsUp = ({ image, title, description, number }: Props) => {
  return (
    <div className="flex flex-col gap-5 border-b p-4 pt-8 last:border-b-0 md:flex-row md:items-center">
      <Bullet number={number} className="order-1 md:order-1" />
      <div className="order-3 flex-1 space-y-4 md:order-2">
        <h3>{title}</h3>
        <p className="text-shade-300">{description}</p>
      </div>
      <div
        className="fade-in-left relative order-2 aspect-video w-full ssm:w-[450px] md:order-3 md:ml-20 md:w-[308px]"
        style={{ animationDelay: `0.${number + 2}s` }}
      >
        <Image src={image.src} alt={image.alt} className="rounded-3xl" fill />
      </div>
    </div>
  );
};
