import { useAssets } from "@/lib/custom-hooks/useAssets";
import TermItem from "./TermItem";

const TermsMainView = ({ data }: { data: any }) => {
  const { images } = useAssets();

  return (
    <section className=" w-full  lg:px-[30px] lg:mt-8">
      <div className="lg:rounded-2xl w-full bg-terms-bg bg-cover bg-center h-[70vh] max-h-[592px] flex items-center lg:pl-[100px] md:px-[30px] px-4">
        {data && (
          <div>
            <h1 className="lg:text-[3.8125rem]  text-[#fff] text-[39px] mt-4 font-bold ">
              {data.title}
            </h1>
            <div className="border-b-[8px] border-[#DDB771] w-full max-w-[60%]"></div>
          </div>
        )}
      </div>
      <div className="border-l-[8px] border-[rgb(221,183,113)] w-fit lg:my-10 my-8 bg-[#F1F1F1]  text-shade-200 font-semibold ml-5 text-31 px-4 py-2">
        {data && <p className="inline">{data.title}</p>}
      </div>
      {data && (
        <ul className="">
          {data.termsItem.map((item: any, index: number) => (
            <TermItem key={index} data={item} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TermsMainView;
