import { BiInfoCircle } from "react-icons/bi";

export default function InfoText({ content }: { content: string }) {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center justify-start gap-5 rounded-2xl bg-[#FEF8ED] p-4 font-[400] text-[#65969F] xsm:flex-row">
      <BiInfoCircle color="#DDB771" size={40} className="xsm:shrink-0" />
      <p>{content}</p>
    </div>
  );
}
