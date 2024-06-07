import { Provider } from "@supabase/supabase-js";

export interface LoginButtonProps {
  icon: Provider;
  text: string;
  onClick?: () => void;
  className?: string;
}

export type ProductStatusProp =
  | "active"
  | "inactive"
  | "suspended"
  | "archived";

export interface Product {
  id: number;
  created_at: string;
  title: string;
  price: number;
  description: string;
  condition: "new" | "used";
  term: string;
  images: string[];
  seller: string;
  category: string;
  views: number;
  phone?: null;
  whatsapp: string;
  is_available: boolean;
  is_deleted: boolean;
  deletion_date: null | string;
  status: ProductStatusProp;
}
