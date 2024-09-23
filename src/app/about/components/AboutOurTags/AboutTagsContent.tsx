import { urlForImage } from "@/lib/utils/sanity/utils";
import Image from "next/image";

type TagsData = {
  title: string;
  description: string;
  icon: string;
};

type Props = {
  data: TagsData;
  active?: boolean;
};

function AboutTagsContent({ data, active }: Props) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-xl border-neutral-50 transition-all lg:border-0 lg:p-4 2xl:gap-8">
      <div className="border-1 flex h-[64px] w-full max-w-[64px] items-center justify-center overflow-hidden rounded-full border-[#E2E2E2] sm:h-[140px] sm:max-w-[140px]">
        <div className="relative aspect-square w-full max-w-[45px] cursor-pointer !duration-1000 hover:rotate-[360deg] sm:max-w-[90px]">
          <Image
            alt={`tag - ${data?.title}`}
            //@ts-ignore
            src={urlForImage(data.icon.customImageItem)?.url() as string}
            className="transition-all"
            objectFit="cover"
            objectPosition="center"
            fill
          />
        </div>
      </div>

      <h3 className="font-semibold capitalize text-shade-300">{data?.title}</h3>

      <p className={`pb-10 text-shade-300 ${active && "font-semibold"}`}>
        {data?.description}
      </p>
    </div>
  );
}

export default AboutTagsContent;
