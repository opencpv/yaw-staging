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
  const date = new Date(dateTime);
  // Define an array of suffixes for the day of the month.
  const suffixes = ["th", "st", "nd", "rd"];
  const day = date.getDate();
  const daySuffix = suffixes[day % 10] || "th";

  // Format the date with a custom day format and a capitalized month abbreviation.
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(date);

  // Construct the final formatted date with the day and year.
  const finalDate = `${day}${daySuffix} ${formattedDate}`;

  return finalDate;
};
