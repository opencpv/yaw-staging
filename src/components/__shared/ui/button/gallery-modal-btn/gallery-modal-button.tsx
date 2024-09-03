import React from "react";
import { Button } from "../Button";
import { MdWindow } from "react-icons/md";

type Props = {
  onClick: () => void;
};

const GalleryModalBtn = (props: Props) => {
  return (
    <Button
      variant="white"
      className="max-md:scale-80 absolute bottom-2 right-2 shadow-md xs:bottom-5 md:right-10"
      onClick={props.onClick}
      size={"sm"}
    >
      View All
      <MdWindow className="shrink-0 text-primary" size={32} />
    </Button>
  );
};

export default GalleryModalBtn;
