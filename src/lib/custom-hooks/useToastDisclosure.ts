import { toast } from "react-toastify";

const useToastDisclosure = () => {
  const onOpen = (message: string, autoClose?: number) => {
    toast(message, {
      position: "top-center",
      autoClose: autoClose ? autoClose : 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      progressStyle: { background: "#F1B346" },
      // style: { width: "30rem", maxWidth: "30rem" },
    });
  };

  return { onOpen };
};

export { useToastDisclosure };
