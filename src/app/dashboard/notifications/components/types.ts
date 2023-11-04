export type NotificationType = {
    date: string;
    time?: string;
    notification?: string;
    subject?: string;
    type: "message" | "admin" | "alert";
    message? : string
    sent ? : string
  };