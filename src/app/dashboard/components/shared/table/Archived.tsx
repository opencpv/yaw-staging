import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import React from "react";
import { MdOutlineArchive } from "react-icons/md";

type Props = {
  showingArchived: boolean;
  className?: string;
  onClick?: () => void;
};

const ArchivedButton = (props: Props) => {
  return (
    <Button
      className={cn(
        "ml-auto justify-end bg-primary/10 text-primary/80 max-lg:mt-20",
        {
          "bg-primary text-white": props.showingArchived,
        },
        props.className,
      )}
      fit
      title={props.showingArchived ? "Click to show all active data" : "Click to view all archived data"}
      onClick={props.onClick}
    >
      {props.showingArchived ? "Show Active" : "Archived"}{" "}
      <MdOutlineArchive
        className={cn({
          "jello-horizontal": props.showingArchived,
        })}
        size={20}
      />
    </Button>
  );
};

export default ArchivedButton;
