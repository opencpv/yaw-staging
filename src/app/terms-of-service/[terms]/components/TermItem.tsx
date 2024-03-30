import RichTextRenderer from "@/app/components/RichTextRenderer";

const TermItem = ({ data, index }: { data: any; index: number }) => {
  const Bullet = () => (
    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#DDB771] text-base font-bold text-[#fff] lg:h-[100px] lg:w-[100px] lg:text-3xl 2xl:h-[120px] 2xl:w-[120px]">
      {index + 1 < 0 ? "" : <span>0</span>}
      {index + 1}
    </div>
  );

  const Title = () => (
    <h2 className="flex w-fit items-center justify-center font-bold text-[#11605E] lg:text-4xl">
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
        <div className="w-full lg:space-y-4">
          <Title />
          <div className="font-semibold text-shade-200 lg:text-xl">
            <Description />
          </div>
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-6 lg:hidden">
        <div className="flex justify-start gap-4">
          <Bullet />
          <Title />
        </div>

        <div className="w-full lg:space-y-4">
          <div className="text-[1.25rem] font-semibold text-shade-200">
            <Description />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default TermItem;
