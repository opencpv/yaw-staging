import RichTextRenderer from "@/app/components/RichTextRenderer";

const TermItem = ({ data, index }: { data: any; index: number }) => {
  const Bullet = () => (
    <div className="lg:text-31 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#DDB771] text-base font-bold text-[#fff] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px]">
      {index + 1 < 0 ? "" : <span>0</span>}
      {index + 1}
    </div>
  );

  const Title = () => (
    <h2 className="text-20 lg:text-39 lg:leading-[54.6px] flex w-fit items-center justify-center font-bold text-[#073B3A] ">
      {data.termsArray.title}
    </h2>
  );

  const Description = () => (
    <RichTextRenderer content={data.termsArray.description[0]} />
  );

  return (
    <>
      <div className="mb-8 hidden gap-4 lg:flex lg:gap-5">
        <Bullet />
        <div className="w-full">
          <Title />
          <div className="lg:text-[1.25rem] font-semibold text-shade-200">
            <Description />
          </div>{" "}
        </div>
      </div>
      <div className="flex  flex-col gap-6 lg:hidden mb-6">
        <div className="items-cener flex justify-start gap-4">
          <Bullet />
          <Title />
        </div>

        <div className="w-full">
          <div className="text-[1.25rem] font-semibold text-shade-200">
            <Description />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default TermItem;
