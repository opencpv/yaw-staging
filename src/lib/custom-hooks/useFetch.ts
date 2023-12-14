// @ts-nocheck
import {
  useInfiniteOffsetPaginationQuery,
  useInsertMutation,
  useOffsetInfiniteScrollQuery,
  useQuery,
  useSubscriptionQuery,
} from "@supabase-cache-helpers/postgrest-swr";
import supabase from "../utils/supabaseClient";
import { useState } from "react";

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

type FetchTableRealtimeType = {
  tableName: string;
  order?: { column: string; ascending: boolean };
  select?: string;
  eq?: { column: string; match: string };
  or?: string;
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
    revalidateOnReconnect:
      revalidateOnReconnect === true ? revalidateOnReconnect : false,
    revalidateOnFocus: revalidateOnFocus === true ? revalidateOnFocus : false,
    revalidateIfStale: revalidateIfStale === true ? revalidateIfStale : false,
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

  const [totalCount, setTotalCount] = useState<number | null>(null);

  const getCount = async () => {
    let query = supabase
      .from(tableName)
      .select("*", { count: "exact", head: true });
    if (eq) query.eq(eq.column, eq.match);
    if (or) query.or(or);

    let { count } = await query;
    setTotalCount(count);
  };

  getCount();

  const {
    currentPage,
    nextPage,
    previousPage,
    isValidating,
    error,
    isLoading,
  } = useInfiniteOffsetPaginationQuery(query, {
    pageSize,
    revalidateOnReconnect:
      revalidateOnReconnect === true ? revalidateOnReconnect : false,
    revalidateOnFocus: revalidateOnFocus === true ? revalidateOnFocus : false,
    revalidateIfStale: revalidateIfStale === true ? revalidateIfStale : false,
  });

  return {
    currentPage,
    nextPage,
    previousPage,
    isValidating,
    error,
    isLoading,
    totalCount,
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
      revalidateOnReconnect:
        revalidateOnReconnect === true ? revalidateOnReconnect : false,
      revalidateOnFocus: revalidateOnFocus === true ? revalidateOnFocus : false,
      revalidateIfStale: revalidateIfStale === true ? revalidateIfStale : false,
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

// const useInsert = () => {
//   const {trigger} = useInsertMutation(
//     supabase.from("messages"),
//     ["id"],
//     "content"
//   )
// }

// const { mutate, error: mutateError, reset, isPending, isError} = useMutation({
//   mutationFn: addTodo,
// });

const useFetchTableForRealtime = ({
  tableName,
  select,
  or,
}: {
  tableName: string;
  select?: string;
  or: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setMessages] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getTable = async () => {
    try {
      let query = supabase.from(tableName).select(select ? select : "*");
      // const {data, error} = await supabase.from(tableName).select("*")
      // if(or) query.or(or)

      let result = await query;
      if (result.error) {
        setError(result.error.message);
        return;
      }
      setMessages(result.data);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
    return { error };
  };

  getTable();

  return { isLoading, error, data };
};

const useRevalidationRule = (
  revalidateOnFocus = false,
  revalidateOnReconnect = true,
  revalidateIfStale = false
) => {
  return {
    revalidateOnFocus,
    revalidateIfStale,
    revalidateOnReconnect,
  };
};

const useFetchOrder = (ascending = false) => {
  return { ascending };
};

const useFetchCount = (head = true) => {
  return { count: "exact", head };
};

export {
  useFetchTable,
  useFetchTableWithPagination,
  useFetchTableWithInfiniteScroll,
  useRealTimeSubscription,
  useFetchTableForRealtime,
  useRevalidationRule,
  useFetchOrder,
  useFetchCount,
};
