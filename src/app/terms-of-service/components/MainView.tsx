"use client";
import { useRouter } from "next/navigation";
import CaArrowBackLong from "../icons/CaArrowBackLong";
import RichTextRenderer from "@/app/components/RichTextRenderer";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const MainView = ({ data }: { data: any }) => {
  const router = useRouter();
  const { icons, images } = useAssets();

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5">
      <div className="flex basis-[50%] flex-col items-start justify-center gap-8 text-white max-w-[824px]">
        <div
          className="flex  cursor-pointer items-center justify-center gap-2"
          onClick={() => router.back()}
        >
          <CaArrowBackLong />
          <p className="font-semibold">Back</p>
        </div>

        <div className=" mt-4 flex flex-col  font-bold lg:leading-[5.3375rem] 
        leading-[3.4125rem] 
        text-[2.4375rem] lg:text-[3.8125rem] ">
          <p>{data.title}</p>
          <p>{data.subtitle}</p>
        </div>
        <div className="">
          <RichTextRenderer content={data.description[0]} />
        </div>
      </div>

      <div className="relative aspect-[304/273] md:aspect-[508/456] lg:aspect-[617/554] h-full w-full max-w-[304px] md:max-w-[508px] lg:max-w-[617px] grow-0">
        <Image
          src={images.TermsImage}
          alt="terms image"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MainView;
