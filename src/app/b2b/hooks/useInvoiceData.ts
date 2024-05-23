import { invoiceStore } from "@/store/payment/invoiceStore";
import { PaymentData } from "../components/types";

export const useInvoiceData = ({
  data,
  invoiceData,
}: {
  data?: PaymentData;
  invoiceData?: PaymentData[];
}) => {
  const { checkoutItems, setCheckoutItems } = invoiceStore();
  const handleCheckChange = () => {
    if (checkoutItems.some((item) => item.id === data?.id)) {
      setCheckoutItems(checkoutItems.filter((item) => item.id !== data?.id));
    } else {
      setCheckoutItems([
        ...(checkoutItems as PaymentData[]),
        data as PaymentData,
      ]);
    }
  };

  const handleCheckAll = () => {
    const allSelected = checkoutItems.length === invoiceData?.length;
    setCheckoutItems(allSelected ? [] : (invoiceData as PaymentData[]));
  };

  const checked = checkoutItems.some((item) => item.id === data?.id);

  const allChecked = checkoutItems.length === invoiceData?.length;

  return {
    handleCheckChange,
    checked,
    handleCheckAll,
    allChecked,
  };
};
