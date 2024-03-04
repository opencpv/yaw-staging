const ProductCondition = ({ condition }: { condition: "new" | "used" }) => {
  return (
    <>
      {condition === "new" ? (
        <p className="w-full rounded-xl bg-[#54C38A] px-8 py-1 text-center text-xs capitalize text-white">
          {condition}
        </p>
      ) : (
        <p className="rounded-xl bg-[#FFE3B0] px-8 py-1 text-xs capitalize text-primary-500">
          {condition}
        </p>
      )}
    </>
  );
};

export default ProductCondition;
