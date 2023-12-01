import { useMemo } from "react";

const useTruncateNumber = (number: number) => {
  const truncatedNum = useMemo(() => {
    {
      /* Algorithm for truncating and adding zeros to propertyNumber */
    }
    if (number > 99) {
      let numStr = number.toString(); // convert the propertyNumber to string
      let numZeros = numStr[0] + "0".repeat(numStr.length - 1); // Add appropriate number of zeros
      return numZeros + "+";
    }
    return number;
  }, [number]);

  return truncatedNum;
};

export { useTruncateNumber };
