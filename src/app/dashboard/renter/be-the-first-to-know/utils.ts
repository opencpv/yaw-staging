import { BE_THE_FIRST_TO_KNOW_LAPSE_DAYS } from "@/constants";

export const getDaysRemaining = (createdAt: string) => {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  // Reset the time part of both dates to midnight
  currentDate.setHours(0, 0, 0, 0);
  createdDate.setHours(0, 0, 0, 0);

  // Calculate the difference in time (milliseconds) and then convert to days
  const diffTime = currentDate.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

  return BE_THE_FIRST_TO_KNOW_LAPSE_DAYS - diffDays;
};
