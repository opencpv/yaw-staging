import TLPTags from "./TLPTags";
import styles from "../index.module.css";
import GetNotifiedInput from "./GetNotifiedInput";
function GenuineListingRow() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-3 items-start justify-center">
        <div>
          <p
            className={`${styles.genuineText} text-[3.8125rem] font-bold leading-[5.3375rem]`}>
            Genuine Listings Without the Stress
          </p>
        </div>
      </div>

      <div className="col-span-2 lg:col-span-1  flex flex-col gap-8">
        <p className="leading-[22.4px] text-shade-50 max-w-[302px]">
          On a mission to make renting a home in Ghana transparent and easy.
        </p>

        <GetNotifiedInput />
      </div>
    </div>
  );
}

export default GenuineListingRow;
