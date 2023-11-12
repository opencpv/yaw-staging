import { useMemo } from "react";

const useDaysDifference = (day: string) => {
  const daysDifference = useMemo(() => {
    let firstDate: Date = new Date(day);
    let secondDate: Date = new Date(); // today;

    // Calculate the difference in milliseconds
    let timeDifference = secondDate.getTime() - firstDate.getTime();

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  }, [day]);

  return daysDifference;
};

export { useDaysDifference };
