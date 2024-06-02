import { receiptStore } from "@/store/payment/receiptStore";

export const useReceiptData = ({
  data,
  receiptData,
}: {
  data?: Invoice;
  receiptData?: Invoice[];
}) => {
  const { checkedOutItems, setCheckedOutItems } = receiptStore();
  const handleCheckChange = () => {
    if (checkedOutItems.some((item) => item.id === data?.id)) {
      setCheckedOutItems(
        checkedOutItems.filter((item) => item.id !== data?.id),
      );
    } else {
      setCheckedOutItems([...(checkedOutItems as Invoice[]), data as Invoice]);
    }
  };

  const handleCheckAll = () => {
    const allSelected = checkedOutItems.length === receiptData?.length;
    setCheckedOutItems(allSelected ? [] : (receiptData as Invoice[]));
  };

  const checked = checkedOutItems.some((item) => item.id === data?.id);

  const allChecked = checkedOutItems.length === receiptData?.length;

  return {
    handleCheckChange,
    checked,
    handleCheckAll,
    allChecked,
  };
};
