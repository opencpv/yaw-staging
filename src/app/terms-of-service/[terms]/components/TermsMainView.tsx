import TermItem from "./TermItem";

const TermsMainView = ({ data }: { data: any }) => {
  return (
    <section className="w-full lg:px-[30px]">
      <div
        className="flex h-96 min-h-96 items-center justify-center
      bg-[url('/assets/images/terms/t2-mobile.png')]
      bg-cover bg-center bg-no-repeat px-4 max-lg:-mx-5 md:bg-[url('/assets/images/terms/t2.png')] md:px-[30px] lg:w-full lg:rounded-2xl lg:pl-[100px] "
      >
        {data && (
          <div className="flex w-full grow-0 basis-[70%] items-center justify-center">
            <div className="flex grow-0 basis-[90%] flex-col items-start justify-center">
              <h1 className=" mt-4 whitespace-nowrap capitalize text-white">
                {data.title}
              </h1>
              <div className="mt-1 w-full max-w-[40%] border-b-[4px] border-accent-50 md:border-b-[8px] lg:mt-4"></div>
            </div>
          </div>
        )}
      </div>
      {/* EC: Please use border-accent instead of border-[rgb(221,183,113)]
       * Please address similar instances */}
      <div className="my-8 w-fit border-l-[8px] border-[rgb(221,183,113)] bg-secondary-50 px-4  py-2 text-xl capitalize text-shade-200 lg:my-10 lg:ml-5 2xl:text-2xl">
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
