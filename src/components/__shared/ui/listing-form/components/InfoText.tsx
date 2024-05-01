import { cn } from "@/lib/utils";
import { BiInfoCircle } from "react-icons/bi";

export default function InfoText({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-3xl flex-col items-center justify-start gap-5 rounded-2xl bg-[#FEF8ED] p-4 font-[400] text-[#65969F] xsm:flex-row",
        className,
      )}
    >
      <BiInfoCircle color="#DDB771" size={40} className="xsm:shrink-0" />
      <p>{content}</p>
    </div>
  );
}
