import RichTextRenderer from "@/app/components/RichTextRenderer";

const TermItem = ({ data, index }: { data: any; index: number }) => {
  const Bullet = () => (
    <div className="lg:text-31 shrink-0 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#DDB771] text-base font-bold text-[#fff] lg:h-[120px] lg:w-[120px]">
      {index + 1 < 0 ? "" : <span>0</span>}
      {index + 1}
    </div>
  );

  const Title = () => (
    <h2 className="lg:text-31 flex w-fit items-center justify-center text-xl font-bold text-[#073B3A] lg:mb-5  ">
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
          <div className="text-[1.25rem] font-semibold text-shade-200">
            <Description />
          </div>{" "}
        </div>
      </div>

    </>
  );
};

export default TermItem;
