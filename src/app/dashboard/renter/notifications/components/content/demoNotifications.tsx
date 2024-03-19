interface Props {
  type: "message" | "admin" | "alert";
  subject: string;
  time: string;
  date: string;
  notification: string;
}

export const demoNotifications: Props[] = [
  {
    type: "admin",
    subject: "Emergency Maintenance Required",
    time: "3mins ago",
    date: "3rd September, 2023",
    notification:
      "Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.  Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.",
  },
  {
    type: "message",
    subject: "New Message From John Doe",
    time: "3mins ago",
    date: "3rd September, 2023",
    notification:
      "Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.",
  },
  {
    type: "alert",
    subject: "Emergency Maintenance Required",
    time: "3mins ago",
    date: "3rd September, 2023",
    notification:
      "Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.  Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.",
  },
  {
    type: "admin",
    subject: "Emergency Maintenance Required",
    time: "3mins ago",
    date: "3rd September, 2023",
    notification:
      "Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.  Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.",
  },
  {
    type: "message",
    subject: "New Message From John Doe",
    time: "3mins ago",
    date: "3rd September, 2023",
    notification:
      "Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.Hi Micheal, I have received your inquiry about your property. Let's discuss the details further.",
  },
  {
    type: "alert",
    subject: "Emergency Maintenance Required",
    time: "3mins ago",
    date: "3rd September, 2023",
    notification:
      "Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.  Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please alert us as soon as possible.",
  },
];
