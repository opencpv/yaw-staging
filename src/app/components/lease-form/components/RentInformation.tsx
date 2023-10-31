import CurrencyInput from "@/components/__shared/CurrencyInput";
import SlideEnter from "./SlideEnter";
import CustomRadioInput from "../../CustomRadioInput";
import styles from './index.module.css'

export default function RentInformation() {
  return (
    <SlideEnter>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full lg:w-[75%] flex flex-col gap-4">
          <p className={`${styles.title}`}>Rent Infomation</p>

          <div className="grid grid-cols-3 gap-x-5">
            <div className="flex flex-col gap-6 col-span-3 lg:col-span-1">
              <CurrencyInput
                label="Monthly Amount"
                onChange={() => console.log()}
                onChange2={() => console.log()}
              />

              <CustomRadioInput label="Do you require advance payment" />

              <CustomRadioInput label="Do you require a refunable security deposit?" />

              <CurrencyInput
                label="Refunable Security Deposit Amout"
                onChange={() => console.log()}
                onChange2={() => console.log()}
              />
            </div>
            <div>
              <CustomRadioInput label="Do you require other fees?" />
            </div>
          </div>
        </div>
      </div>
    </SlideEnter>
  );
}
