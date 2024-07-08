"use client";
import { useRouter } from "next/navigation";
import CaArrowBackLong from "../icons/CaArrowBackLong"; // EC: Please remove unused imports. Address similar instances.
import RichTextRenderer from "@/components/__shared/RichTextRenderer";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import styles from "../index.module.css";

const MainView = ({ data }: { data: any }) => {
  const router = useRouter();
  const { icons, images } = useAssets();
  {
    /* EC: Please remove unused initializations. Address similar instances */
  }
  const words = data.subtitle.split(" ");

  return (
    <div className="flex  w-full flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center gap-6 lg:max-w-[60vw] 2xl:gap-12">
        {" "}
        {/* EC: Please avoid viewport width (vw)
         * unless there is a specific use case. */}
        <div className="mb-4 flex w-full flex-col items-center ">
          <h1 className="leading-tight">{data.title}</h1>
          <h1 className="leading-tight text-white">{data.subtitle}</h1>{" "}
          {/* EC: You may want to use <h2> since it's a subtitle.
           * You can override the default font-size of <h2>. e.g <h2 className="text-4xl"
           * It is for semantic purposes
           * Please address similar instances
           * */}
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
