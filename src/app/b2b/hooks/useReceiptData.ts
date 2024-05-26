import { PaymentData } from "../components/types";
import { receiptStore } from "@/store/payment/receiptStore";

export const useReceiptData = ({
  data,
  receiptData,
}: {
  data?: PaymentData;
  receiptData?: PaymentData[];
}) => {
  const { checkedOutItems, setCheckedOutItems } = receiptStore();
  const handleCheckChange = () => {
    if (checkedOutItems.some((item) => item.id === data?.id)) {
      setCheckedOutItems(
        checkedOutItems.filter((item) => item.id !== data?.id),
      );
    } else {
      setCheckedOutItems([
        ...(checkedOutItems as PaymentData[]),
        data as PaymentData,
      ]);
    }
  };

  const handleCheckAll = () => {
    const allSelected = checkedOutItems.length === receiptData?.length;
    setCheckedOutItems(allSelected ? [] : (receiptData as PaymentData[]));
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
