import React from "react";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function ActionButton(props: Props) {
  return (
    <Button
      className={`h-10 w-full gap-2 rounded-2xl bg-secondary-500 font-semibold text-shade-200 hover:bg-primary-200 hover:text-white lg:h-14`}
      title={props.title}
    >
      {props.children}
    </Button>
  );
}
