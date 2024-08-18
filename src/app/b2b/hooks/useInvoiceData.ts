import { invoiceStore } from "@/store/payment/invoiceStore";

export const useInvoiceData = ({
  data,
  invoiceData,
}: {
  data?: Invoice;
  invoiceData?: Invoice[];
}) => {
  const { checkoutItems, setCheckoutItems } = invoiceStore();
  const handleCheckChange = () => {
    if (checkoutItems.some((item) => item.id === data?.id)) {
      setCheckoutItems(checkoutItems.filter((item) => item.id !== data?.id));
    } else {
      setCheckoutItems([...(checkoutItems as Invoice[]), data as Invoice]);
    }
  };

  const handleCheckAll = () => {
    const allSelected = checkoutItems.length === invoiceData?.length;
    setCheckoutItems(allSelected ? [] : (invoiceData as Invoice[]));
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
