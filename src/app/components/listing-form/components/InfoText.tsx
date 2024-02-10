import { BiInfoCircle } from "react-icons/bi";

export default function InfoText({ content }: { content: string }) {
  return (
    <div className="xsm:flex-row flex w-full flex-col items-center justify-start gap-5 rounded-2xl bg-[#FEF8ED] p-4 font-[400] text-[#65969F]">
      <BiInfoCircle color="#DDB771" size={40} className="xsm:shrink-0" />
      <p>{content}</p>
    </div>
  );
}
