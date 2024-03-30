import { format, getDate } from "date-fns";
import { enUS } from "date-fns/locale";
import { map, toPairs } from "lodash";

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

export const addQueryParamsToUrl = (baseurl: string, params: any) => {
  const query = map(toPairs(params), (pair) => pair.join("="))
    .join("&")
    .replaceAll(" ", "_");
  return `${baseurl}?${query}`;
};
