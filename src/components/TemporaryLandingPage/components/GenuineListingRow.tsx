import TLPTags from "./TLPTags";
import styles from "../index.module.css";
import GetNotifiedInput from "./GetNotifiedInput";
function GenuineListingRow() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start justify-center gap-3">
        <div>
          <p
            className={`${styles.genuineText} select-none  
            text-[2rem] font-bold leading-[2.8rem] text-white sm:text-[3rem]
            sm:leading-[4.1rem] md:text-[3.5rem] md:leading-[4.5rem] 2xl:text-[3.8125rem] 2xl:leading-[5.3375rem] `}
          >
            Guaranteed Listings
            <br /> Without Stress
          </p>
        </div>
      </div>
    </div>
  );
}

export default GenuineListingRow;
