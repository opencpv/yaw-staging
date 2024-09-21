import { cn } from "@/lib/utils";

type TagsData = {
  title: string;
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
      className={cn(
        "flex w-full items-center justify-center rounded-lg px-4 py-2 transition-all duration-1000 lg:py-4",
        {
          "bg-primary-50 focus:border-0 dark:bg-primary-50": active,
        },
      )}
    >
      <p
        className={cn("capitalize text-shade-300 transition-all", {
          "font-semibold": active,
        })}
      >
        {data?.title}
      </p>
    </div>
  );
}

export default AboutTagsTitle;
