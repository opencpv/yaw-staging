import { BiInfoCircle } from "react-icons/bi";

export default function InfoText({ content }: { content: string }) {
  return (
    <div className="flex items-center justify-start gap-5 bg-[#FEF8ED] rounded-2xl text-[#65969F] font-[400] w-full p-4">
      <BiInfoCircle color="#DDB771" size="44" />
      <p>{content}</p>
    </div>
  );
}
