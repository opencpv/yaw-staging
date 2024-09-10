import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const generateString = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const isPdf = (file: File) => {
  return file.type === "application/pdf";
};

export const isValidMobileNumber = (mobile: string) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(mobile);
};

export const updateFilename = (file: File, newFileName: string) => {
  return new File([file], newFileName, {
    type: file.type,
    lastModified: file.lastModified,
  });
};

export const debounce = (func: any, delay: number = 300) => {
  let timeoutId: any;
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
