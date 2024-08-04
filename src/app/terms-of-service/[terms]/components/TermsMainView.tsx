import TermItem from "./TermItem";

const TermsMainView = ({ data }: { data: any }) => {
  return (
    <section className="w-full lg:px-[30px]">
      <div className="flex h-96 min-h-96 items-center md:bg-[url('/assets/images/terms/t2.png')]
      bg-[url('/assets/images/terms/t2-mobile.png')]
      bg-cover bg-no-repeat bg-center px-4 max-lg:-mx-5 md:px-[30px] lg:w-full lg:rounded-2xl lg:pl-[100px] justify-center "
      
      >
        {data && (
          <div className="flex items-center justify-center basis-[70%] grow-0 w-full">
            <div className="basis-[90%] grow-0 flex flex-col items-start justify-center">
              <h1 className=" mt-4 text-white capitalize whitespace-nowrap">{data.title}</h1>
              <div className="mt-1 w-full max-w-[40%] border-b-[4px] md:border-b-[8px] border-accent-50 lg:mt-4"></div>
            </div>
          </div>
        )}
      </div>
      <div className="my-8 lg:ml-5 w-fit border-l-[8px] border-[rgb(221,183,113)] bg-secondary-50  px-4 py-2 text-shade-200 lg:my-10 capitalize text-xl 2xl:text-2xl">
        {data && <h3 className="inline">{data.title}</h3>}
      </div>
      {data && (
        <ul>
          {data.termsItem.map((item: any, index: number) => (
            <TermItem key={index} data={item} index={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TermsMainView;
