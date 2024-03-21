import { useAssets } from "@/lib/custom-hooks/useAssets";
import TermItem from "./TermItem";

const TermsMainView = ({ data }: { data: any }) => {
  const { images } = useAssets();

  return (
    <section className="w-full lg:px-[30px]">
      <div className="flex h-96 min-h-96 items-center bg-terms-bg bg-cover bg-center px-4 max-lg:-mx-5 md:px-[30px] lg:w-full lg:rounded-2xl lg:pl-[100px]">
        {data && (
          <div>
            <h1 className="mt-4 text-white">{data.title}</h1>
            <div className="mt-1 w-full max-w-[70%] border-b-[8px] border-[#DDB771] lg:mt-4"></div>
          </div>
        )}
      </div>
      <div className="my-8 ml-5 w-fit border-l-[8px] border-[rgb(221,183,113)] bg-secondary-50  px-4 py-2 text-shade-200 lg:my-10">
        {data && <h3 className="inline">{data.title}</h3>}
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
