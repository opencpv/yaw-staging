import { useAssets } from "@/lib/custom-hooks/useAssets";
import TermItem from "./TermItem";

const TermsMainView = ({ data }: { data: any }) => {
  const { images } = useAssets();

  return (
    <section className=" w-full  lg:mt-6 lg:px-[30px]">
      <div className="flex h-[70vh] max-h-[592px] w-full items-center bg-terms-bg bg-cover bg-center px-4 md:px-[30px] lg:rounded-2xl lg:pl-[100px]">
        {data && (
          <div>
            <h1 className="mt-4  text-4xl font-bold text-[#fff] lg:text-[3.8125rem] ">
              {data.title}
            </h1>
            <div className="w-full max-w-[70%] mt-1 lg:mt-4 border-b-[8px] border-[#DDB771]"></div>
          </div>
        )}
      </div>
      <div className=" my-8 ml-5 w-fit border-l-[8px] border-[rgb(221,183,113)] bg-[#F1F1F1]  px-4 py-2 text-25 lg:text-31 font-semibold text-shade-200 lg:my-10 leading-[2.1875rem] lg:leading-[2.7125rem]">
        {data && <p className="inline">{data.title}</p>}
      </div>
      {data && (
        <ul className="px-5 lg:px-0">
          {data.termsItem.map((item: any, index: number) => (
            <TermItem key={index} data={item} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TermsMainView;
