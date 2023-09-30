import { Provider } from "@supabase/supabase-js";

export interface LoginButtonProps {
  icon: Provider;
  text: string;
  onClick?: () => void;
}
