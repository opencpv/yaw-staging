type TagsData = {
  name: string;
  description: string;
  image: string;
};

type Props = {
  data: TagsData;
  active?: boolean;
};

function AboutTagsTitle({ data, active }: Props) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg px-4 py-2 lg:py-4  transition-all duration-1000
        ${
        active && "bg-[#E7EFEF] focus:border-0 dark:bg-[#E7EFEF]"
      } `}
    >
      <p
        className={`text-base capitalize text-neutral-300 md:text-lg 2xl:text-2xl transition-all ${
          active && "font-semibold"
        } `}
      >
        {data?.name}
      </p>
    </div>
  );
}

export default AboutTagsTitle;
