import { Button } from "@/components/__shared/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { MdOutlineArchive } from "react-icons/md";

type Props = {
  /**
   * Whether archived data is being shown.
   */
  showingArchived: boolean;
  className?: string;
  onClick?: () => void;
};

/**
 * Button to toggle between showing archived and active data.
 */
const ArchivedButton = (props: Props) => {
  return (
    <Button
      className={cn(
        "ml-auto flex justify-end bg-primary-50 text-primary max-lg:mt-20",
        {
          "bg-primary text-white": props.showingArchived,
        },
        props.className,
      )}
      title={
        props.showingArchived
          ? "Click to show all active data"
          : "Click to view all archived data"
      }
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
