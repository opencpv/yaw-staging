import { useState } from "react";
import { toast } from "react-toastify";

const useToastDisclosure = () => {
  const onOpen = (message: string) => {
    const toastId = toast(message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      progressStyle: { background: "#F1B346" },
      bodyStyle: {paddingRight: "2.5rem"}
      // style: { width: "30rem", maxWidth: "30rem" },
    });

    // Add event listener to dismiss the toast when the user scrolls
    window.addEventListener("scroll", () => {
      toast.dismiss(toastId);
    });
  };

  return { onOpen };
};


const useSelectDisclosure = <T extends string>(defaultOption: T) => {
  const [value, setValue] = useState<T>(defaultOption);
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as T);
  };

  return { value, setValue, handleSelectionChange}
}


export { useToastDisclosure, useSelectDisclosure };
