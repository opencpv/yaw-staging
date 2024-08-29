export interface AppContextType {
  user?: any;
  setUser: React.Dispatch<React.SetStateAction<{}>>;
}

export type UserRole = "LISTER" | "RENTER";

export type NotificationType = {
  id: number;
  date: string;
  time?: string;
  content?: string;
  subject?: string;
  type: "message" | "admin" | "alert";
  sent?: string;
  sender_name?: string;
  read: boolean;
  created_at: string;
};
