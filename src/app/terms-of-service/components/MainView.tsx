"use client";
import { useRouter } from "next/navigation";
import CaArrowBackLong from "../icons/CaArrowBackLong";
import RichTextRenderer from "@/components/__shared/RichTextRenderer";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import styles from "../index.module.css";

const MainView = ({ data }: { data: any }) => {
  const router = useRouter();
  const { icons, images } = useAssets();
  const words = data.subtitle.split(" ");

  return (
    <div className="flex  w-full flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center gap-6 lg:max-w-[60vw] 2xl:gap-12">
        <div className="mb-4 flex w-full flex-col items-center ">
          <h1 className="leading-tight">{data.title}</h1>
          <h1 className="leading-tight text-white">{data.subtitle}</h1>
        </div>
        <div
          className={`${styles.termsMain} break-words text-xl 2xl:font-semibold`}
        >
          <RichTextRenderer content={data.description[0]} />
        </div>
      </div>
    </div>
  );
};

export default MainView;
