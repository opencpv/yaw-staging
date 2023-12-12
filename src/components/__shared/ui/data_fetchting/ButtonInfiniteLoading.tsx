import React from "react";
import Button from "../../Button";

type Props = {
  isLoading: boolean;
  loadMore: (() => void) | null;
  isValidating: boolean;
  data: Record<string, unknown>[] | undefined;
  noDataMessage: string;
};

const ButtonInfiniteLoading = ({
  isValidating,
  loadMore,
  isLoading,
  data,
  noDataMessage,
}: Props) => {
  return (
    <>
      {isLoading ? null : (
        <Button
          onClick={() => loadMore && loadMore()}
          color="accent"
          className={`${
            isLoading || (data?.length === 0 && "hidden")
          } rounded-xl font-[600] p-2 px-5`}
          disabled={loadMore === null ? true : false}
        >
          {isValidating && loadMore
            ? "Loading More..."
            : loadMore
            ? "Load More"
            : `${noDataMessage}`}
        </Button>
      )}
    </>
  );
};

export default ButtonInfiniteLoading;
