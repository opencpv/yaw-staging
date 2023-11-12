import supabase from "@/lib/utils/supabaseClient";

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
    order?: { column: string; ascending?: boolean };
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
    query = query.order(order.column, {
      ascending: order.ascending ? order.ascending : false,
    });
  }

  const { data } = await query;
  return data;
};

export { fetchTable };
