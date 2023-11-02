import CurrencyInput from "@/components/__shared/CurrencyInput";
import SlideEnter from "./SlideEnter";
import CustomRadioInput from "../../CustomRadioInput";
import styles from "./index.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function RentInformation() {
  const [leaseFormData, setLeaseFormData] = useLocalStorage("lease-form", {});
  const handleOnChange = (name: any, value: any) => {
    setLeaseFormData({
      ...leaseFormData,
      [name]: value,
    });
  };
  return (
    <SlideEnter>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full lg:w-[75%] flex flex-col gap-4">
          <p className={`${styles.title}`}>Rent Infomation</p>

          <div className="grid grid-cols-3 gap-x-5">
            <div className="flex flex-col gap-6 col-span-3 lg:col-span-1">
              <CurrencyInput
                initialValue={leaseFormData?.monthlyAmount}
                label="Monthly Amount"
                onChange={(value) => handleOnChange("monthlyAmount", value)}
              />
              <CustomRadioInput
                defaultValue={leaseFormData?.advancePayment}
                label="Do you require advance payment"
                onChange={(value) => handleOnChange("advancePayment", value)}
              />

              <CustomRadioInput
                defaultValue={leaseFormData?.refundableSecurityDeposit}
                label="Do you require a refundable security deposit?"
                onChange={(value) =>
                  handleOnChange("refundableSecurityDeposit", value)
                }
              />

              <CurrencyInput
                initialValue={leaseFormData?.refundableSecurityDepositAmount}
                label="Refundable Security Deposit Amount"
                onChange={(value) =>
                  handleOnChange("refundableSecurityDepositAmount", value)
                }
              />
            </div>
            <div>
              <CustomRadioInput
                defaultValue={leaseFormData?.additionalFees}
                label="Do you require other fees?"
                onChange={(value) =>
                  handleOnChange("additionalFees", value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </SlideEnter>
  );
}
