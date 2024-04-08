import React from "react";
import Button from "../button/Button";

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
          } rounded-xl p-2 px-5 font-[600]`}
          disabled={loadMore === null ? true : false}
          isLoading={isValidating && loadMore ? true : false}
        >
          {loadMore ? "Load More" : `${noDataMessage}`}
        </Button>
      )}
    </>
  );
};

export default ButtonInfiniteLoading;
