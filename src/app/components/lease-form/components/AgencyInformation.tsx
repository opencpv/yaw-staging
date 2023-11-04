import CurrencyInput from "@/components/__shared/CurrencyInput";
import SlideEnter from "./SlideEnter";
import CustomRadioInput from "../../CustomRadioInput";
import styles from "./index.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { ListingForm } from "./types";

export default function AgencyInformation() {
  const [listingFormData, setListingFormData] = useLocalStorage<ListingForm>("listing-form", {});
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
          <p className={`${styles.title}`}>Agency Infomation</p>

          <div className="grid grid-cols-3 gap-x-5">
            <div className="flex flex-col gap-6  col-span-3 lg:col-span-1">
              <CustomRadioInput
                defaultValue={listingFormData?.agentFee}
                label="Do you charge an Agent Fee?"
                onChange={(value) => handleOnChange("agentFee", value)}
              />
              <CurrencyInput
                initialValue={listingFormData?.agentFeeAmount}
                label="Agent Fee"
                onChange={(value) =>
                  handleOnChange("agentFeeAmount", value)
                }
              />

              <CustomRadioInput
                defaultValue={listingFormData?.viewingFee}
                label="Do you charge a Viewing Fee?"
                onChange={(value) => handleOnChange("viewingFee", value)}
              />

              <CurrencyInput
                initialValue={listingFormData?.viewingFeeAmount}
                label="Viewing Fee"
                onChange={(value) =>
                  handleOnChange("viewingFeeAmount", value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </SlideEnter>
  );
}
