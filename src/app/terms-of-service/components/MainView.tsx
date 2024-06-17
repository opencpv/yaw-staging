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
      <div className="flex lg:max-w-[60vw] flex-col gap-6 2xl:gap-12 items-center">
        <div className="mb-4 flex flex-col items-center w-full ">
          <h1 className="leading-tight">{data.title}</h1>
          <h1 className="leading-tight text-white">
            {words.length >= 3 ? (
              <>
                {words.slice(0, 2).join(" ")}{" "}
                <span className="text-[#F4C86A]">{words[2]}</span>
                {words.slice(3).length > 0 && " " + words.slice(3).join(" ")}
              </>
            ) : (
              data.subtitle
            )}
          </h1>
        </div>
        <div className={`${styles.termsMain} text-xl break-words 2xl:font-semibold`}>
          <RichTextRenderer content={data.description[0]} />
        </div>
      </div>
    </div>
  );
};

export default MainView;
