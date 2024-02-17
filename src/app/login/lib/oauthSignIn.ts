import { Provider } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const oauthSignIn = async (
  provider: Provider,
  redirectTo = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL,
) => {
  const supabase = createClientComponentClient();
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
