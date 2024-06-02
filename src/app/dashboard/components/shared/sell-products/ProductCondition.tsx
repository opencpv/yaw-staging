import { cn } from "@/lib/utils";

export type ItemCondition = "New" | "Used" | "Used-like New";
const ProductCondition = ({ condition }: { condition: ItemCondition }) => {
  return (
    <>
      <p
        className={cn(
          "w-full rounded-xl px-8 py-1 text-center text-xs font-semibold capitalize ",
          {
            "bg-success-bg text-success":
              condition === "New" || condition === "Used-like New",
            "bg-warning-bg text-warning/50": condition === "Used",
          },
        )}
      >
        {condition}
      </p>
    </>
  );
};

export default ProductCondition;
