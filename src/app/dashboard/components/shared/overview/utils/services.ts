import supabase from "@/lib/utils/supabase/supabaseClient";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import React from "react";

export const useFetchListerLeads = ({ listerId }: { listerId: string }) => {
  const [preferredIds, setPreferredIds] = React.useState<string[]>([]);

  // Get from the preference table, the users who want to be contacted.
  const { data: preference } = useQuery(
    supabase
      .from("contact_owner_preference")
      .select("profiles!inner (id)")
      .eq("should_be_contacted", true),
  );

  (preference as any)?.map(
    (p: any) =>
      !preferredIds?.includes(p.profiles.id) &&
      setPreferredIds((ids) => [...ids, p.profiles.id]),
  );

  // Get properties where those who have favorited
  // are included in the list of users who want to be contacted,
  // and where the owner is the current user (lister).
  const { data: standardTemplate } = useQuery(
    supabase
      .from("merged_property_view")
      .select("id, profiles!inner (id), favorite_user_ids")
      .overlaps("favorite_user_ids", preferredIds as string[])
      .eq("profiles.id", listerId),
  );

  const [ids, setIds] = React.useState<string[]>([]);
  standardTemplate?.map(
    (st) =>
      st.favorite_user_ids?.map(
        (id: any) =>
          preferredIds?.includes(id) &&
          !ids?.includes(id) &&
          setIds((ids) => [...ids, id]),
      ),
  );

  // Finally get the details of users who want to be contacted
  const query = useQuery(
    supabase
      .from("profiles")
      .select("id, full_name, profile_img, phone, whatsapp")
      .in("id", [...ids]),
  );

  return query;
};
