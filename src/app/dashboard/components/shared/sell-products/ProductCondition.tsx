import { cn } from "@/lib/utils";

const ProductCondition = ({
  condition,
}: {
  condition: "new" | "used" | "used-like new";
}) => {
  return (
    <>
      <p
        className={cn(
          "w-full rounded-xl px-8 py-1 text-center text-xs font-semibold capitalize ",
          {
            "bg-success-bg text-success":
              condition === "new" || condition === "used-like new",
            "bg-warning-bg text-warning/50": condition === "used",
          },
        )}
      >
        {condition}
      </p>
    </>
  );
};

export default ProductCondition;
