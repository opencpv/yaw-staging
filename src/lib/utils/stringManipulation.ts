import { format, parse } from "date-fns";
import { enUS } from "date-fns/locale";
import { v4 as uuidv4 } from "uuid";

const capitalizeName = (initialName: string, delimiter?: string) => {
  const nameParts = initialName?.split(delimiter || " ");
  const capitalizedNameParts = nameParts?.map((part) =>
    part
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  );
  return capitalizedNameParts?.join(" ");
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

export const formatDateDMY = (dateString: string) => {
  // Split the date string into components
  const dateParts = dateString.split("-");

  // Extract the year, month, and day
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  // Convert the numerical month to its name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[parseInt(month) - 1];

  // Combine the components into the desired format
  return `${day} ${monthName} ${year}`;
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

export const pluralize = (
  // Singular form of the word
  word: string,
  length: number | undefined,
  suffix: "s" | "es" = "s",
) => {
  if (length && length === 1) {
    return word;
  } else {
    return `${word}${suffix}`;
  }
};

export const generateUniqueString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const getDaysRemaining = (createdAt: string, days: number) => {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  // Reset the time part of both dates to midnight
  currentDate.setHours(0, 0, 0, 0);
  createdDate.setHours(0, 0, 0, 0);

  // Calculate the difference in time (milliseconds) and then convert to days
  const diffTime = currentDate.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

  return days - diffDays;
};

export const getArticle = (word: string) => {
  if (
    word.charAt(0) === "a" ||
    word.charAt(0) === "e" ||
    word.charAt(0) === "i" ||
    word.charAt(0) === "o" ||
    word.charAt(0) === "u"
  ) {
    return `an ${word}`;
  } else {
    return `a ${word}`;
  }
};

export const caseInsensitiveCompare = (a: string, b: string) => {
  return a?.toLowerCase() === b?.toLowerCase();
};

export const unslugify = (text: string) => {
  return text.split("-").join(" ");
};

export const convertBooleanToYesNo = (value: boolean | undefined) => {
  if (value) {
    return "Yes";
  } else {
    return "No";
  }
};

export const convertYesNoToBoolean = (value: string) => {
  if (value === "Yes") {
    return true;
  } else {
    return false;
  }
};
