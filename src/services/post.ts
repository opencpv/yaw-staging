import supabase from "@/lib/utils/supabaseClient";

const getTable = async (tableName: string, select_fields?: string) => {
  const { data } = await supabase
    .from(tableName)
    .select(select_fields ? select_fields : "*");
  return data;
};

const fetchProperties = (
  tableName: string,
  page: number,
  select_fields?: string
) =>
  fetch(
    `https://sqjksfniqjmotrynsnif.supabase.co/rest/v1/${tableName}?select=${
      select_fields ? select_fields : "*"
    }?page=${page}`,
    {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        Range: "0-4",
      },
    }
  ).then((res) => res.json());

export { getTable };
