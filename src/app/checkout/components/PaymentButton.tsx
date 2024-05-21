// import { usePaystackPayment } from "react-paystack";

import { createUUID } from "@/lib/utils/stringManipulation";

interface PaymentBttonProps {
  email?: string;
  amount?: number;
}
const PaymentButton = ({
  email = "adams@gmail.com",
  amount = 2000,
}: PaymentBttonProps) => {
  const config = {
    reference: createUUID(),
    email,
    currency: "GHS",
    amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_8d4d7fd91874cc76ea04ef4d76fb3c346dc593dd",
  };

  const onSuccess = (reference: string) => {};

  const onClose = () => {};

  //   const initializePayment = usePaystackPayment(config);

  const handleButtonClick = () => {
    // initializePayment({ onSuccess, onClose });
  };
  return (
    <button
      type="submit"
      className="w-full rounded-md bg-accent py-4 font-semibold text-white"
      onClick={handleButtonClick}
    >
      Proceed to Payment
    </button>
  );
};

export default PaymentButton;
