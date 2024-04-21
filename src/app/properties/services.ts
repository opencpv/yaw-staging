import supabase from "@/lib/utils/supabase/supabaseClient";
import {
  useDeleteMutation,
  useInsertMutation,
  useOffsetInfiniteScrollQuery,
  useQuery,
  useUpdateMutation,
} from "@supabase-cache-helpers/postgrest-swr";

export const useFetchProperties = ({
  searchString = "",
  filter = "all",
}: {
  searchString: string;
  filter: string;
}) => {
  const formattedSearchString = formatString(searchString);

  let query = supabase
    .from("merged_standard_template_view")
    .select(
      "id, property_id, property!inner (id, is_best_value, is_realtors_choice, is_featured), is_property_verified, is_lister_certified, property_type, description, city, bedrooms, monthly_amount, advance_payment_options, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    .order("is_property_verified", { ascending: false })
    .order("property (is_realtors_choice)", { ascending: false })
    .order("property (is_best_value)", { ascending: false })
    .order("is_lister_certified", { ascending: false })
    .order("created_at", { ascending: false });
  if (searchString) {
    query = query.textSearch("query_string", `${formattedSearchString}`, {
      config: "english",
      type: "plain",
    });
  }

  if (filter === "realtor's choice") {
    query = query.or(`is_realtors_choice.eq.true, is_best_value.eq.true`, {
      // TODO: add is price drop
      referencedTable: "property",
    });
  }
  if (filter === "verified") {
    query = query.or(
      `is_property_verified.eq.true, is_lister_certified.eq.true`,
    );
  }
  if (filter === "no viewing fee") {
    query = query.is("viewing_fee", null);
  }
  if (filter === "no advance") {
    query = query.is("advance_period", null);
  }

  const result = useOffsetInfiniteScrollQuery(query, {
    pageSize: 9,
    revalidateAll: true,
  });

  return result;
};

export const useFetchFeaturedListings = () => {
  const query = supabase
    .from("merged_standard_template_view")
    .select(
      "id, property_id, property!inner (id, is_best_value, is_realtors_choice, is_featured), is_property_verified, is_lister_certified, property_type, description, city, bedrooms, monthly_amount, advance_payment_options, favorite_user_ids, subtitle, neighbourhood, advance_period, viewing_fee",
    )
    .eq("property.is_featured", true)
    .order("is_property_verified", { ascending: false })
    .order("property (is_realtors_choice)", { ascending: false })
    .order("property (is_best_value)", { ascending: false })
    .order("is_lister_certified", { ascending: false })
    .order("created_at", { ascending: false });

  const result = useQuery(query);

  return result;
};

export const useFetchPropertyDetails = (propertyId: number) => {
  const query = supabase
    .from("merged_standard_template_view")
    .select(
      "*, property!inner (id, profiles!inner (id, full_name, avatar_url, profile_img, phone, whatsapp))",
    )
    .eq("property_id", propertyId)
    .single();

  const result = useQuery(query);

  return result;
};

// export const useUpdateLikedProperty = async (userId: number | string,
//   propertyId: number | string) => {

//     const query = supabase.from("user_favorite_properties")
//       .select("id")
//       .eq("property_id", propertyId)
//       .single();

//     const {data} = useQuery(query);

//   const { trigger: deleteLike } = useDeleteMutation(
//     supabase.from("user_favorite_properties"),
//     ['user_id', "property_id"],
//     "user_id",
//   )

//   const { trigger: addLike } = useInsertMutation(
//     supabase.from("user_favorite_properties"),
//     ['user_id', "property_id"],
//     "user_id",
//   )

//   if (data){
//     deleteLike({user_id: userId as string, property_id: propertyId as number}).then((res) => {
//     })
//   }
//   else {
//     addLike({user_id: userId as string, property_id: propertyId as number}).then((res) => {
//     })
//   }

// //   let query;
// //   const { data } = await supabase
// //   .from("user_favorite_properties")
// //   .select("id")
// //   .eq("property_id", propertyId)
// //   .single();

// // if (data) {
// //   // if property is already liked
// //   query = await supabase
// //     .from("user_favorite_properties")
// //     .delete()
// //     .eq("user_id", userId)
// //     .eq("property_id", propertyId)
// //     .select();
// // } else {
// //   query = await supabase
// //     .from("user_favorite_properties")
// //     .insert({
// //       user_id: userId as string,
// //       property_id: propertyId as number,
// //     })
// //     .select();
// // }

// }

const formatString = (str: string): string => {
  return str
    .replace(/[^\w\s]/gi, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
};
