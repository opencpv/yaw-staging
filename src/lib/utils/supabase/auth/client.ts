import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// export function createClient() {
//   return createBrowserClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_URL as string,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
//   );
// }

export function createClient() {
  // return createClientComponentClient<Database>();
  return createClientComponentClient();
}
