import supabase from "./supabaseClient";

const getProfileByUserId = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching profile:", error.message);
    return null;
  }

  return data;
};

export default getProfileByUserId;
