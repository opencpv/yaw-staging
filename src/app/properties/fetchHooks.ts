import { createClient } from "@/lib/utils/supabase/client";
import { propertyFilterStore } from "@/store/properties/usePropertiesStore";
import { useQuery } from "@tanstack/react-query";

const supabase = createClient();

export const useFetchProperties = () => {
  const { searchString, filter } = propertyFilterStore();

  const query = useQuery({
    queryKey: ["listings", searchString, filter],
    queryFn: async () => {
      let query = supabase
        .from("merged_properties_view")
        .select()
        .order("created_at", { ascending: false });
      if (searchString) {
        query = query.textSearch("query_string", `${searchString}`, {
          config: "english",
          type: "plain",
        });
      }
      if (filter === "realtor's choice") {
        query = query;
      }
      if (filter === "verified") {
        query = query;
      }
      if (filter === "no viewing fee") {
        query = query.eq("viewing_fee", 0);
      }

      const { data: listings } = await query;
      return listings;
    },
  });

  return query;
};

function convertStringToFormattedString(inputString: string) {
  // Split the input string by space
  const words = inputString.split(" ");
  console.log(words);

  // Map over the array and wrap each element with quotes
  const formattedWords = words.map((word) => `${word}`);
  console.log(formattedWords);

  // Join the formatted words with commas
  const result = formattedWords.join(", ");
  console.log(result);

  // Wrap the result with single quotes and parentheses
  return `('${result}')`;
}

// Test examples
// console.log(convertStringToFormattedString('Japan')); // Output: '("Japan")'
// console.log(convertStringToFormattedString('Togo Benin')); // Output: '("Togo", "Benin")'
