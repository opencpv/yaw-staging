//@ts-nocheck

import {
  useInfiniteOffsetPaginationQuery,
  useOffsetInfiniteScrollQuery,
  useQuery,
  useSubscriptionQuery,
} from "@supabase-cache-helpers/postgrest-swr";
import supabase from "../utils/supabaseClient";

type FetchTableType = {
  tableName: string;
  pageSize?: number;
  order?: { column: string; ascending: boolean };
  select?: string;
  eq?: { column: string; match: string };
  or?: string;
  revalidateOnReconnect?: boolean;
  revalidateOnFocus?: boolean;
  revalidateIfStale?: boolean;
};

const useFetchTable = ({
  tableName,
  order,
  select,
  eq,
  or,
  revalidateIfStale,
  revalidateOnFocus,
  revalidateOnReconnect,
}: FetchTableType) => {
  let query = supabase
    .from(tableName)
    .select(select ? select : "id", { count: "exact" });
  // .order(order.column, { ascending: order.ascending });

  if (eq) query.eq(eq.column, eq.match);
  if (or) query.or(or);
  if (order) query.order(order.column, { ascending: order.ascending });

  const { isValidating, count, data, error, isLoading } = useQuery(query, {
    revalidateOnReconnect: revalidateOnReconnect ? revalidateOnReconnect : true,
    revalidateOnFocus: revalidateOnFocus ? revalidateOnFocus : true,
    revalidateIfStale: revalidateIfStale ? revalidateIfStale : true,
  });

  return {
    data,
    count,
    isValidating,
    error,
    isLoading,
  };
};

const useFetchTableWithPagination = ({
  tableName,
  pageSize,
  order,
  select,
  eq,
  or,
  revalidateIfStale,
  revalidateOnFocus,
  revalidateOnReconnect,
}: FetchTableType) => {
  let query = supabase
    .from(tableName)
    .select(select ? select : "id")
    .order(order.column, { ascending: order.ascending });

  if (eq) query.eq(eq.column, eq.match);
  if (or) query.or(or);

  const {
    currentPage,
    nextPage,
    previousPage,
    isValidating,
    error,
    isLoading,
  } = useInfiniteOffsetPaginationQuery(query, {
    pageSize,
    revalidateOnReconnect: revalidateOnReconnect ? revalidateOnReconnect : true,
    revalidateOnFocus: revalidateOnFocus ? revalidateOnFocus : true,
    revalidateIfStale: revalidateIfStale ? revalidateIfStale : true,
  });

  return {
    currentPage,
    nextPage,
    previousPage,
    isValidating,
    error,
    isLoading,
  };
};

const useFetchTableWithInfiniteScroll = ({
  tableName,
  pageSize,
  order,
  select,
  eq,
  or,
  revalidateIfStale,
  revalidateOnFocus,
  revalidateOnReconnect,
}: FetchTableType) => {
  let query = supabase
    .from(tableName)
    .select(select ? select : "id")
    .order(order.column, { ascending: order.ascending });

  if (eq) query.eq(eq.column, eq.match);
  if (or) query.or(or);

  const { data, loadMore, isLoading, isValidating, error } =
    useOffsetInfiniteScrollQuery(query, {
      pageSize,
      revalidateOnReconnect: revalidateOnReconnect
        ? revalidateOnReconnect
        : true,
      revalidateOnFocus: revalidateOnFocus ? revalidateOnFocus : true,
      revalidateIfStale: revalidateIfStale ? revalidateIfStale : true,
    });

  return { data, loadMore, isLoading, isValidating, error };
};

const useRealTimeSubscription = ({
  channelName,
  tableName,
  event,
  payload,
}: {
  channelName: string;
  tableName: string;
  payload: () => void;
  event?: string;
}) => {
  const { status, channel } = useSubscriptionQuery(
    supabase,
    channelName,
    {
      event: event ? event : "*",
      table: tableName,
      schema: "public",
    },
    ["id"],
    { callback: () => payload() }
  );

  return { status, channel };
};

export {
  useFetchTable,
  useFetchTableWithPagination,
  useFetchTableWithInfiniteScroll,
  useRealTimeSubscription,
};
