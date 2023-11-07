import CurrencyInput from "@/components/__shared/CurrencyInput";
import SlideEnter from "./SlideEnter";
import CustomRadioInput from "../../CustomRadioInput";
import styles from "./index.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ListingForm } from "./types";
import CustomCheckBoxes from "../../CustomCheckBoxes";
import AdditionalFees from "./AdditionalFees";

export default function RentInformation() {
  const [listingFormData, setListingFormData] = useLocalStorage<ListingForm>(
    "listing-form",
    {}
  );
  const handleOnChange = (name: any, value: any) => {
    setListingFormData({
      ...listingFormData,
      [name]: value,
    });
  };
  return (
    <SlideEnter>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full lg:w-[75%] flex flex-col gap-4">
          <p className={`${styles.title}`}>Rent Infomation</p>

          <div className="grid grid-cols-4 gap-x-5 gap-y-5">
            <div className="flex flex-col gap-6 col-span-3 lg:col-span-2">
              <CurrencyInput
                initialValue={listingFormData?.monthlyAmount}
                label="Monthly Amount"
                onChange={(value) => handleOnChange("monthlyAmount", value)}
              />
              <CustomRadioInput
                defaultValue={listingFormData?.advancePayment}
                label="Do you require advance payment?"
                onChange={(value) => handleOnChange("advancePayment", value)}
              />
              {listingFormData?.advancePayment == "yes" && (
                <CustomCheckBoxes
                  onChange={(value: any) =>
                    handleOnChange("advancePaymentDuration", value)
                  }
                  data={[
                    {
                      name: "1 year",
                      value: "1",
                    },
                    { name: "2 years", value: "2" },
                    { name: "3 years", value: "3" },
                    { name: "4 years", value: "4" },
                    { name: "5 years", value: "5" },
                  ]}
                />
              )}

              <CustomRadioInput
                defaultValue={listingFormData?.refundableSecurityDeposit}
                label="Do you require a refundable security deposit?"
                onChange={(value) =>
                  handleOnChange("refundableSecurityDeposit", value)
                }
              />
              {listingFormData?.refundableSecurityDeposit == "yes" && (
                <CurrencyInput
                  initialValue={
                    listingFormData?.refundableSecurityDepositAmount
                  }
                  label="Refundable Security Deposit Amount"
                  onChange={(value) =>
                    handleOnChange("refundableSecurityDepositAmount", value)
                  }
                />
              )}
            </div>
            <div className="flex flex-col gap-6 col-span-3 lg:col-span-2">
              <AdditionalFees />
            </div>
          </div>
        </div>
      </div>
    </SlideEnter>
  );
}
