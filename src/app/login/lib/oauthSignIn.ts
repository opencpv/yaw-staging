import supabase from "@/lib/utils/supabaseClient";
import { Provider } from "@supabase/supabase-js";

const oauthSignIn = async (
  provider: Provider,
  redirectTo = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL
) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "http://localhost:3000/",
    },
  });

  if (data) {
    localStorage.setItem("session", JSON.stringify(data));
  }
  return { data, error };
};

export default oauthSignIn;
