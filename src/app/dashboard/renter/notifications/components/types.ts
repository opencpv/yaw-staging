export type NotificationType = {
  id: number;
  date: string;
  time?: string;
  content?: string;
  subject?: string;
  type: "message" | "admin" | "alert";
  sent?: string;
  sender_name?: string;
  read: boolean
};
