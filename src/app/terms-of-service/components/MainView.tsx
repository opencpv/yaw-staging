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
    <div className="flex h-full w-full flex-col items-center justify-between  pt-8 lg:pt-16">
      <div className="flex  w-full flex-col items-start justify-center gap-8 text-white">
        <div
          className="flex  cursor-pointer items-center justify-center gap-2"
          onClick={() => router.back()}
        >
          <CaArrowBackLong />
          <p className="font-semibold">Go Back</p>
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-between gap-4  pt-8 lg:flex-row lg:items-center lg:pt-0">
        <div className="flex  shrink-0 basis-[60%] flex-col items-start justify-center gap-4 text-white">
          <div
            className=" mb-4 flex flex-col  text-[2.4375rem] font-bold 
            leading-[3.4125rem] 
            lg:text-[3.8125rem] lg:leading-[5.3375rem] "
          >
            <p>{data.title}</p>
            <p>{data.subtitle}</p>
          </div>
          <div className="max-w-[824px]">
            <RichTextRenderer content={data.description[0]} />
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative aspect-[304/273] h-full w-full max-w-[304px] grow-0 md:aspect-[508/456] md:max-w-[508px] lg:aspect-[617/554] lg:max-w-[617px] ">
            <Image
              src={images.TermsImage}
              alt="terms image"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
