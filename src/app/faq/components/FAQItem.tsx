"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/__shared/ui/accordion/accordion";

interface Props {
  title: string;
  text: string;
}

const FAQItem = ({ title, text }: Props) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{text}</AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
