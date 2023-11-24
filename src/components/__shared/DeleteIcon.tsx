import React from "react";
import Button from "./Button";
import { FiTrash2 } from "react-icons/fi";

type Props = {
  onOpen: () => void;
};

const DeleteIcon = ({ onOpen }: Props) => {
  return (
    <Button
      isIconOnly
      className="flex items-center justify-center w-full py-4 rounded-md bg-[#F1F1F1]"
      onClick={onOpen}
    >
      <FiTrash2 className="text-xl text-red-500" />
    </Button>
  );
};

export default DeleteIcon;
