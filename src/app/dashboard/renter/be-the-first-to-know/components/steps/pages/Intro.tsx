import styles from "../../../index.module.css";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

const Intro = () => {
  const { images } = useAssets();

  const data = [
    {
      number: 1,
      title: "Tell us about your dream place",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      image: {
        src: images.CoupleStirringIntoSpace,
        alt: "Couple stirring into space",
      },
    },
    {
      number: 2,
      title: "Receive notifications",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      image: {
        src: images.YellowNotification,
        alt: "Yellow notification background",
      },
    },
    {
      number: 3,
      title: "View matches",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      image: {
        src: images.LadyStirringAtPhone,
        alt: "Lady stirring at phone",
      },
    },
  ];

  return (
    <>
      <h2 className={`${styles.title}`}>
        Put RentRight to work for you. Let our AI engine match you with your
        dream place.
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
      <div className="order-1 grid h-20 w-20 place-items-center rounded-full p-3 shadow-card md:order-1">
        <h3 className="text-2xl font-normal">0{number}</h3>
      </div>
      <div className="order-3 flex-1 space-y-4 md:order-2">
        <h3>{title}</h3>
        <p className="text-shade-300">{description}</p>
      </div>
      <div className="relative order-2 aspect-video w-full ssm:w-[450px] md:order-3 md:ml-20 md:w-[308px]">
        <Image src={image.src} alt={image.alt} className="rounded-3xl" fill />
      </div>
    </div>
  );
};
