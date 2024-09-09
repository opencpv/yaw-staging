import { invoiceStore } from "@/store/payment/invoiceStore";

export const useReceiptData = ({
  data,
  receiptData,
}: {
  data?: Invoice;
  receiptData?: Invoice[];
}) => {
  const { receiptItem, setReceiptItems } = invoiceStore();
  const handleCheckChange = () => {
    if (receiptItem.some((item) => item.id === data?.id)) {
      setReceiptItems(receiptItem.filter((item) => item.id !== data?.id));
    } else {
      setReceiptItems([...(receiptItem as Invoice[]), data as Invoice]);
    }
  };

  const handleCheckAll = () => {
    const allSelected = receiptItem.length === receiptData?.length;
    setReceiptItems(allSelected ? [] : (receiptData as Invoice[]));
  };

  const checked = receiptItem.some((item) => item.id === data?.id);

  const allChecked = receiptItem.length === receiptData?.length;

  return {
    handleCheckChange,
    checked,
    handleCheckAll,
    allChecked,
  };
};
