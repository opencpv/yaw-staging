import Spinner from "@/app/dashboard/components/shared/Spinner";
import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import FetchErrorMessage from "./FetchErrorMessage";

type Props = {
  error: PostgrestError | undefined | Error | null;
  /** When data is re-fetching */
  data: Record<string, unknown>[] | undefined | any[] | any | null;
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
        ? isLoadingComponent
        : error
          ? errorComponent ?? <FetchErrorMessage />
          : isValidating && <Spinner />}
      {isValidating === false &&
        !error &&
        data?.length === 0 &&
        emptyStateComponent}
    </>
  );
};

export default FetchingStates;
