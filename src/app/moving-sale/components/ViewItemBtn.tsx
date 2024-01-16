import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { MdWindow } from "react-icons/md";

type Props = {
  className?: string;
};

const ViewItemBtn = (props: Props) => {
  return (
    <Button
      color="white"
      className={`absolute text-neutral-600 flex gap-3 h-14 w-fit px-3 ${props.className}`}
    >
      View all
      <MdWindow className="border p-2 rounded-sm text-4xl shrink-0" />
    </Button>
  );
};

export default ViewItemBtn;
