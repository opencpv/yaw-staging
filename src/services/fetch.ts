import supabase from "@/lib/utils/supabaseClient";
import { useInfiniteOffsetPaginationQuery } from "@supabase-cache-helpers/postgrest-swr";

const fetchTable = async (
  tableName: string,
  {
    select_fields,
    eq,
    or,
    order,
  }: {
    select_fields?: string;
    eq?: { column: string; match: any };
    or?: string;
    order?: { column: string, ascending?: boolean};
  } = {}
) => {
  let query = supabase
    .from(tableName)
    .select(select_fields ? select_fields : "*");

  if (eq) {
    query = query.eq(eq?.column, eq?.match);
  }

  if (or) {
    query = query.or(or);
  }

  if (order) {
    query = query.order(order.column, { ascending: order.ascending ? order.ascending : false });
  }

  const { data } = await query;
  return data;
};

const fetchTableWithPagination = (pageSize: number) => {
  const {
    currentPage,
    nextPage,
    previousPage,
    isValidating,
    error,
    isLoading,
  } = useInfiniteOffsetPaginationQuery(
    supabase
      .from("property")
      .select("id, created_at, is_paid_for, status")
      .order("created_at", { ascending: false }),
    {
      pageSize,
      revalidateOnReconnect: true,
    }
  );
}


const fetchTableWithInfiniteScroll = (
  tableName: string,
  pageParam: number,
  select_fields?: string,
  headers?: {
    apiKey?: string;
    Authorization?: string;
    Range?: string;
  },
) =>
  fetch(
    `https://sqjksfniqjmotrynsnif.supabase.co/rest/v1/${tableName}?select=${select_fields ? select_fields : "*"
    }?page=${pageParam}`,
    {
      headers: {
        ...headers,
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        Range: headers?.Range ? headers?.Range : "0-4",
      },
    }
  ).then((res) => {
    console.log(pageParam)
    return res.json()});

export { fetchTable, fetchTableWithPagination, fetchTableWithInfiniteScroll };
