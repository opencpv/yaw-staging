import Image from "next/image";

type TagsData = {
  name: string;
  description: string;
  image: string;
};

type Props = {
  data: TagsData;
  active?: boolean;
};

function AboutTagsContent({ data, active }: Props) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-xl border-neutral-50 transition-all lg:border-0 lg:p-4 2xl:gap-8">
      <div className="flex h-[64px] w-full max-w-[64px] items-center justify-center overflow-hidden rounded-xl border-1 border-[#E2E2E2] sm:h-[120px] sm:max-w-[192px]">
        <div className="relative aspect-square w-full max-w-[45px] cursor-pointer !duration-1000 hover:rotate-[360deg]  sm:max-w-[90px]">
          <Image
            alt={`tag - ${data?.name}`}
            // src={'/assets/images/Stock.jpg'}
            src={data?.image}
            className="transition-all"
            objectFit="cover"
            objectPosition="center"
            fill
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold capitalize text-shade-300 lg:text-3xl">
        {data?.name}
      </h3>

      <p
        className={`max-w-[1040px] pb-10 text-base capitalize leading-loose  tracking-[-0.2px]
        text-shade-300 sm:text-lg ${active && "font-semibold"} `}
      >
        {data?.description}
      </p>
    </div>
  );
}

export default AboutTagsContent;
