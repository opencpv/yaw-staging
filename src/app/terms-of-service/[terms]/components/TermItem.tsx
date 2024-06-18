import RichTextRenderer from "@/components/__shared/RichTextRenderer";

const TermItem = ({ data, index }: { data: any; index: number }) => {
  const Bullet = () => (
    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-accent text-base font-bold text-[#fff] lg:h-[90px] lg:w-[90px] lg:text-3xl 2xl:h-[120px] 2xl:w-[120px]">
      {index + 1 < 0 ? "" : <span>0</span>}
      {index + 1}
    </div>
  );

  const Title = () => (
    <h2 className="flex w-fit items-center justify-center font-bold text-primary text-2xl sm:text-3xl 2xl:text-4xl">
      {data.termsArray.title}
    </h2>
  );

  const Description = () => (
    <RichTextRenderer content={data.termsArray.description} />
  );

  return (
    <>
      <div className="mb-14 hidden gap-4 lg:flex lg:gap-5">
        <Bullet />
        <div className="w-full space-y-3 2xl:space-y-4">
          <Title />
          <div className="2xl:font-semibold text-shade-200 2xl:text-xl">
            <Description />
          </div>
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-4 lg:hidden">
        <div className="flex justify-start gap-4">
          <Bullet />
          <Title />
        </div>

        <div className="w-full ">
          <div className="text-base text-shade-200">
            <Description />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default TermItem;
