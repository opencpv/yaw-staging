import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { IoArchiveOutline } from "react-icons/io5";

type Props = {};

const Archived = (props: Props) => {
  return (
    <Button
      variant="ghost"
      className="ml-auto mt-5"
      title="Click to view all archived data"
    >
      Archived <IoArchiveOutline />
    </Button>
  );
};

export default Archived;
