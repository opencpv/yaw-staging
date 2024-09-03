import React from "react";
import { Button } from "../button/Button";
import { cn } from "@/lib/utils";

type Props = {
  isLoading: boolean;
  loadMore: (() => void) | null;
  isValidating: boolean;
  data: Record<string, unknown>[] | undefined;
};

const ButtonInfiniteLoading = ({
  isValidating,
  loadMore,
  isLoading,
  data,
}: Props) => {
  return (
    <div className="mt-10 flex items-center justify-center">
      {isLoading ? null : (
        <Button
          onClick={() => loadMore && loadMore()}
          variant="accent"
          className={cn({
            hidden: isLoading || data?.length === 0 || !loadMore,
          })}
          disabled={loadMore === null ? true : false}
          isLoading={isValidating ? true : false}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default ButtonInfiniteLoading;
