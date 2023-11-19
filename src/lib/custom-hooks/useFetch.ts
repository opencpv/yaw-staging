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
      revalidateOnReconnect === false ? revalidateOnReconnect : true,
    revalidateOnFocus: revalidateOnFocus === false ? revalidateOnFocus : true,
    revalidateIfStale: revalidateIfStale === false ? revalidateIfStale : true,
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
    revalidateOnReconnect:
      revalidateOnReconnect === false ? revalidateOnReconnect : true,
    revalidateOnFocus: revalidateOnFocus === false ? revalidateOnFocus : true,
    revalidateIfStale: revalidateIfStale === false ? revalidateIfStale : true,
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
      revalidateOnReconnect:
        revalidateOnReconnect === false ? revalidateOnReconnect : true,
      revalidateOnFocus: revalidateOnFocus === false ? revalidateOnFocus : true,
      revalidateIfStale: revalidateIfStale === false ? revalidateIfStale : true,
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

export {
  useFetchTable,
  useFetchTableWithPagination,
  useFetchTableWithInfiniteScroll,
  useRealTimeSubscription,
  useFetchTableForRealtime,
};
