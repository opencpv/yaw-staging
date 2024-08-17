import { useGetNotifiedStore } from "./store";
import parsePhoneNumber from "libphonenumber-js";
import toast from "react-hot-toast";
function useTLPage() {
  const optionSelect = useGetNotifiedStore((state: any) => state.filterOption);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  const handleSubmit = (
    values: any,
    setFieldError: any,
    phone: any,
    func: any,
  ) => {
    values.phone = phone;

    const phoneNUmber = parsePhoneNumber(values?.phone || "");
    if (optionSelect === "mobile") {
      if (!phone || !phoneNUmber?.isValid() || !phoneNUmber?.isPossible()) {
        setFieldError("phone", "Please enter a valid mobile number.");
        toast.error("Please enter a valid mobile number");
      } else {
        scrollToTop();
        toast.success("Congratulations! You are in the loop!!");
        func((init: boolean) => !init);
      }
    } else {
      scrollToTop();
      toast.success("Congratulations! You are in the loop!!");
      func((init: boolean) => !init);
    }
  };

  return {
    handleSubmit,
  };
}

export default useTLPage;
