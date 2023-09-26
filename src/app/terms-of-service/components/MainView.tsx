import RichTextRenderer from "@/app/components/RichTextRenderer";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import Link from "next/link";
import { string } from "yup";

const MainView = ({ data }: { data: any }) => {
  const { icons, images } = useAssets();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-[#fff] ">
      <div>
        <Link href={"/"} className="flex gap-[5px] lg:mb-[90.28px] md:mb-8">
          <Image src={icons.ArrowIcon} alt="back button" />
          <p className="text-[#fff] font-semibold text-base">Go Back</p>
        </Link>
        <h1 className="lg:text-[61px] text-[39px] mt-4 font-bold">
          {data.title}
        </h1>
        <h1 className="lg:text-[61px] text-[39px]  font-bold">
          {data.subtitle}
        </h1>
        <div className="mt-8 ">
          <RichTextRenderer content={data.description[0]} />
        </div>
      </div>
      <div className="lg:h-full md:h-[456px] h-[274px] w-full relative lg:pl-[227px] pt-8 mb-[77px] md:mb-[52px] lg:mb-[0px]  ">
        <div className="relative h-full w-full ">
          <Image
            src={images.TermsImage}
            alt="terms image"
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MainView;
