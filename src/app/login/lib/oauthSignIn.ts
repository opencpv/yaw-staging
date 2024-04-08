// import { createClient } from "@/lib/utils/supabase/client";
// import { supabase } from "@/supabase/client";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { Provider } from "@supabase/supabase-js";
import supabase from "@/lib/utils/supabaseClient";

const oauthSignIn = async (
  provider: Provider,
  redirectTo = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL,
) => {
  // const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  });

  if (data) {
    localStorage.setItem("session", JSON.stringify(data));
  }
  return { data, error };
};

export default oauthSignIn;
