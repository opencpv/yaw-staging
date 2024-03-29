import Spinner from "@/app/dashboard/components/shared/Spinner";
import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import FetchErrorMessage from "./FetchErrorMessage";

type Props = {
  isLoading: boolean;
  error: PostgrestError | undefined | Error | null;
  isValidating: boolean;
  data: Record<string, unknown>[] | undefined | any[] | any | null;
  isLoadingComponent: React.ReactNode;
  errorComponent?: React.ReactNode;
  noDataMessageComponent?: React.ReactNode;
};

const FetchingStates = ({
  isLoading,
  isValidating,
  error,
  data,
  isLoadingComponent,
  errorComponent,
  noDataMessageComponent,
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
        noDataMessageComponent}
    </>
  );
};

export default FetchingStates;
