import React from "react";
import Button from "./Button";
import { MdWindow } from "react-icons/md";

type Props = {
  onClick: () => void;
};

const GalleryModalBtn = (props: Props) => {
  return (
    <Button
      color="white"
      className="absolute bottom-2 right-2 xs:bottom-5 flex h-fit w-fit gap-3 rounded-lg px-6 py-1.5 text-shade-200 shadow-md max-md:scale-80 md:right-10"
      onClick={props.onClick}
    >
      View All
      <MdWindow className="shrink-0 text-primary" size={32} />
    </Button>
  );
};

export default GalleryModalBtn;
