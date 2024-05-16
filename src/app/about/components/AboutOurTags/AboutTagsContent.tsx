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
    <div className="transition-all flex flex-col gap-5 2xl:gap-8 rounded-xl lg:border-1 border-neutral-50 lg:p-4 w-full">

      <div className="flex h-[64px] sm:h-[120px] w-full max-w-[64px] sm:max-w-[192px] items-center justify-center rounded-xl border-1 border-[#E2E2E2]">

        <div className="relative aspect-square w-full max-w-[24px] sm:max-w-[41px] hover:rotate-[180deg] !duration-1000  cursor-pointer">

          <Image
            alt={`tag - ${data?.name}`}
            src={data?.image}
            className="transition-all"
            objectFit="cover"
            objectPosition="center"
            fill
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-neutral-300 lg:text-3xl capitalize">
        {data?.name}
      </h3>

      <p
        className={`text-base sm:text-lg capitalize text-neutral-300 max-w-[1040px]  pb-10
        leading-loose tracking-[-0.2px] ${
          active && "font-semibold"
        } `}
      >
        {data?.description}
      </p>
    </div>
  );
}

export default AboutTagsContent;
