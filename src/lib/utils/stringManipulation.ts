import { format, parse } from "date-fns";
import { enUS } from "date-fns/locale";
import { v4 as uuidv4 } from "uuid";

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

export const formatDate = (dateTime: string) => {
  const cleanedDateTime = dateTime
    ?.toString()
    .replace(/(\d+)(st|nd|rd|th)/, "$1"); // Remove ordinal numbers
  const date = new Date(cleanedDateTime);
  const formattedDate = format(date, "MMMM d, yyyy", {
    locale: enUS,
  });
  return formattedDate;
};

export const formatDateTime = (dateTime: string) => {
  return format(new Date(dateTime), "dd MMM. yyyy hh:mma")
    .replace("AM", "am")
    .replace("PM", "pm");
};

export const formatDateOnly = (date: string) => {
  return format(new Date(date), "dd MMM, yyyy");
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

export const createUUID = () => {
  return uuidv4();
};

export const pluralize = (word: string, length: number) => {
  if (length > 1) {
    return `${word}s`;
  } else if (length === 1) {
    return word;
  } else {
    return `${word}s`;
  }
};
