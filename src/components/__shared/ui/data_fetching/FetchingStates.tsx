import Spinner from "@/app/dashboard/components/shared/Spinner";
import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import FetchErrorMessage from "./FetchErrorMessage";

type Props = {
  error: PostgrestError | undefined | Error | null;
  data: Record<string, unknown>[] | undefined | any[] | any | null;
  /** When data is re-fetching */
  isValidating?: boolean;
  isLoading?: boolean;
  isLoadingComponent?: React.ReactNode;
  isFetchingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  emptyStateComponent?: React.ReactNode;
};

const FetchingStates = ({
  isLoading,
  isValidating,
  error,
  data,
  isLoadingComponent,
  isFetchingComponent,
  errorComponent,
  emptyStateComponent,
}: Props) => {
  return (
    <>
      {isLoading
        ? isLoading && (isLoadingComponent || <Spinner />)
        : error
          ? errorComponent ?? <FetchErrorMessage />
          : isValidating && (isLoadingComponent || <Spinner />)}
      {isValidating === false &&
        !error &&
        data?.length === 0 &&
        emptyStateComponent}
    </>
  );
};

export default FetchingStates;
