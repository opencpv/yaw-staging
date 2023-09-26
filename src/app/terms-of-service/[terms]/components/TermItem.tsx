import RichTextRenderer from "@/app/components/RichTextRenderer";
import { useEffect } from "react";

const TermItem = ({ data, index }: { data: any; index: number }) => {
  const Bullet = () => (
    <p className="lg:w-[120px]  lg:h-[120px] w-[50px] h-[50px] lg:text-[31px] text-base font-bold flex flex-none items-center justify-center rounded-full bg-[#DDB771] text-[#fff]">
      {index + 1 < 0 ? "" : <span>0</span>}
      {index + 1}
    </p>
  );

  const Title = () => (
    <h2 className="text-[#073B3A] w-fit lg:mb-5 lg:text-[39px] text-xl font-bold flex items-center justify-center  ">
      {data.termsArray.title}
    </h2>
  );

  const Description = () => (
    <RichTextRenderer content={data.termsArray.description[0]} />
  );

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <li className="hidden lg:flex lg:gap-5 gap-4 mb-8">
        <Bullet />
        <div>
          <Title />
          <Description />
        </div>
      </li>
      <li className="lg:hidden gap-4 mb-8">
        <div className="flex gap-4 mb-6">
          <Bullet />
          <Title />
        </div>
        <Description />
      </li>
    </>
  );
};

export default TermItem;
