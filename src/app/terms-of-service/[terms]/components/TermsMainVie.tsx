import { useAssets } from "@/lib/custom-hooks/useAssets";
import TermItem from "./TermItem";

const TermsMainView = ({ data }: { data: any }) => {
  const { images } = useAssets();

  return (
    <section className="w-max-[1728px] w-full mx-auto lg:px-[30px] lg:mt-8">
      <div className="lg:rounded-2xl w-full bg-terms-bg bg-cover bg-center h-[502px] md:h-[503px] lg:h-[592px] flex items-center lg:px-[141px] md:px-[30px] px-4">
        {data && (
          <div>
            <h1 className="lg:text-[61px]  text-[#fff] text-[39px] mt-4 font-bold ">
              {data.title}
            </h1>
            <div className="border-b-[8px] border-[#DDB771] w-[60%]"></div>
          </div>
        )}
      </div>
      <div className="border-l-[8px] md:mx-[30px] border-[#DDB771] w-fit lg:my-10 my-8 px-2 bg-[#F1F1F1] ">
        {data && <p className="inline">{data.title}</p>}
      </div>
      {data && (
        <ul className="md:px-[30px]">
          {data.termsItem.map((item: any, index: number) => (
            <TermItem key={index} data={item} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TermsMainView;
