import { format, getDate } from "date-fns";
import { enUS } from "date-fns/locale";

const capitalizeName = (initialName: string, delimiter?: string) => {
  let nameSplit = initialName?.split(delimiter ? delimiter : "%20");
  let nameSplitCapitalized = nameSplit?.map(
    (name) => name.slice(0, 1).toUpperCase() + name.slice(1),
  );
  return nameSplitCapitalized?.join(" ");
};

export const formatTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .toLowerCase();
  return formattedTime;
};

export const formatDate = (dateTime: Date | string) => {
  console.log(dateTime);
  const date = new Date(dateTime);
  const formattedDate = format(date, "do MMM yyyy", {
    locale: enUS,
  });
  return formattedDate;
};

export const LowerCase = (text: string) => {
  return text?.toLowerCase();
};

export const UpperCase = (text: string) => {
  return text?.toUpperCase();
};

export default capitalizeName;

export const getFirstWord = (str: string, delimiter: string = " ") => {
  return str?.split(delimiter)[0];
};
