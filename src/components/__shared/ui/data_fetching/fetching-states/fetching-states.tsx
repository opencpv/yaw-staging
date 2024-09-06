import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import FetchErrorMessage from "../fetch-error-message/fetch-error-message";
import Loader from "../../loader";

type Props = {
  error: PostgrestError | undefined | Error | null;
  data: Record<string, unknown>[] | undefined | any[] | any | null;
  /** When data is re-fetching */
  isValidating?: boolean;
  isLoading?: boolean;
  isLoadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  emptyStateComponent?: React.ReactNode;
};

const FetchingStates = ({
  isLoading,
  isValidating,
  error,
  data,
  isLoadingComponent,
  errorComponent,
  emptyStateComponent,
}: Props) => {
  return (
    <>
      {isLoading
        ? isLoadingComponent || (
            <Loader position="center" className="flex w-full justify-center" />
          )
        : error
          ? errorComponent || <FetchErrorMessage />
          : isValidating &&
            (isLoadingComponent || (
              <Loader
                position="center"
                className="flex w-full justify-center"
              />
            ))}
      {!isLoading && !error && data?.length === 0 && emptyStateComponent}
    </>
  );
};

export default FetchingStates;
