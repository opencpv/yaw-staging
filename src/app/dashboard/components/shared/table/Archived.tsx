import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { IoArchiveOutline } from "react-icons/io5";

type Props = {
  clickHandler?: () => void;
};

const Archived = (props: Props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Button
      onClick={() => {
        setToggle(!toggle);
        if (props.clickHandler) {
          props.clickHandler();
        }
      }}
      variant="default"
      className={cn(
        "float-right ml-auto mt-5 ",
        toggle ? "bg-primary text-white" : "bg-primary-50 text-[#609493]",
      )}
      title="Click to view all archived data"
    >
      Archived <IoArchiveOutline color={toggle ? "#fff" : "#609493"} />
    </Button>
  );
};

export default Archived;
