import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";

const AboutBanner = ({ data }: { data: any }) => {
  const { images } = useAssets();
  return (
    // <div className="w-full lg:pr-[171px] mt-[120px] bg-about-bg bg-cover bg-center">
    //   <div className="w-full  lg:px-[64px] lg:pt-[38px] pb-[25px] md:px-[30px] px-4   ">
    //     <div className="grid justify-items-center  md:mr-[85px] lg:grid-cols-3 grid-cols-1">
    //       <div className="col-span-2">
    //         <p className="lg:text-[49px] mt-[38px] text-[39px] font-bold text-[#fff]">
    //           {data.title}
    //         </p>
    //         <p className="text-[25px] mt-8 lg:mt-[46px]  text-[#fff]">
    //           {data.description}
    //         </p>
    //       </div>
    //       <div className="flex-none relative lg:w-[615px]  lg:h-[606px] md:w-[332px] md:h-[244px] w-[332px] h-[244px] ">
    //         <Image src={images.AboutImage} alt="banner image" fill />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full  mt-[120px] bg-about-bg bg-cover bg-center">
      <div className="w full h-fit mt-0 grid lg:grid-cols-2 grid-cols-1 md:px-[30px] lg:px-[64px] px-4">
        <div>
          <p className="lg:text-[49px]  pt-[38px] text-[39px] font-bold text-[#fff]">
            {data.title}
          </p>
          <p className="text-[25px] mt-8 lg:mt-[46px]  text-[#fff]">
            {data.description}
          </p>
        </div>
        <div className="relative   lg:h-[606px]  md:h-[244px]  h-[244px] ">
          <Image src={images.AboutImage} alt="banner image" fill />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
