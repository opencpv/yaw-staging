import { openSans } from "@/lib/utils/fonts";

const BreadCrumb = ({ link }: { link: string }) => {
  return (
    <p
      className={`px-[39px] md:px-[47px] lg:px-[51px] mb-[63px] md:mb-[81px] lg:mb-[100px] text-[20px] text-[#9E9E9E] ${openSans.className}`}
    >
      Home <span className="text-[#000] text-[25px]">{link}</span>
    </p>
  );
};

export default BreadCrumb;
