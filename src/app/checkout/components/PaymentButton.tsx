import { usePaystackPayment } from "react-paystack";

interface PaymentBttonProps {
  email?: string;
  amount?: number;
}
const PaymentButton = ({
  email = "adams@gmail.com",
  amount = 2000,
}: PaymentBttonProps) => {
  const config = {
    reference: crypto.randomUUID(),
    email,
    currency: "GHS",
    amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_8d4d7fd91874cc76ea04ef4d76fb3c346dc593dd",
  };

  const onSuccess = (reference: string) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handleButtonClick = () => {
    initializePayment({ onSuccess, onClose });
    console.log(config);
  };
  return (
    <button
      type="submit"
      className="w-full rounded-md bg-[#DDB771] py-4 font-semibold text-white"
      onClick={handleButtonClick}
    >
      Proceed to Payment
    </button>
  );
};

export default PaymentButton;
