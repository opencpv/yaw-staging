import { Button } from "@nextui-org/react";

type Props = {
  variant: "coming-soon" | "light-gray";
  content: string
};

function TLPTags({ variant, content }: Props) {
  const options: any = {
    "coming-soon": "bg-[#17441E] !text-white text-20 font-semibold",
    "light-gray": "bg-[#FFFFFF29]  text-[#F4C86A]",
  };
  return (
    <Button className={`${options[variant]} px-4 py-2 rounded-2xl w-fit`}>{content}</Button>
  );
}

export default TLPTags;
