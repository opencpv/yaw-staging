import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Create a single supabase client for interacting with your database
const supabase = createClientComponentClient()

export default supabase;
