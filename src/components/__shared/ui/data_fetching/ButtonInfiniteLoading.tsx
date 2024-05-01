import React from "react";
import Button from "../button/Button";
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
    <>
      {isLoading ? null : (
        <Button
          onClick={() => loadMore && loadMore()}
          color="accent"
          className={cn("rounded-xl p-2 px-5 font-semibold", {
            hidden: isLoading || data?.length === 0 || !loadMore,
          })}
          disabled={loadMore === null ? true : false}
          isLoading={isValidating ? true : false}
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default ButtonInfiniteLoading;
