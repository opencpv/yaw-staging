import { Button } from "@nextui-org/react";
import styles from '../index.module.css'

type Props = {
  variant: "coming-soon" | "white";
  content: string;
};

function TLPTags({ variant, content }: Props) {
  const options: any = {
    "coming-soon": ` !text-white text-20 leading-[1.75rem] font-semibold ${styles.coming_soon}`,
    white:
      "bg-[#FFFFFF29]  text-[#F4C86A] text-[1rem] font-semibold text-[#0B6E4F] leading-[1.4rem] bg-white",
  };
  return (
    <Button
      className={`${options[variant]} px-4 py-2 capitalize rounded-2xl w-fit `}>
      {content}
    </Button>
  );
}

export default TLPTags;
