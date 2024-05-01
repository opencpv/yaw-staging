import { createClient } from "@/lib/utils/supabase/auth/client";
import { Provider } from "@supabase/supabase-js";

const supabase = createClient();

const oauthSignIn = async (
  provider: Provider,
  redirectTo = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL,
) => {
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
