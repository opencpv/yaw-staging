import TLPTags from "./TLPTags";
import styles from "../index.module.css";
import GetNotifiedInput from "./GetNotifiedInput";
function GenuineListingRow() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 items-start justify-center">
        <div>
          <p
            className={`${styles.genuineText} text-[2rem]  
            sm:text-[3rem] md:text-[3.5rem] 2xl:text-[3.8125rem] text-white
            leading-[2.8rem] sm:leading-[4.1rem] md:leading-[4.5rem] 2xl:leading-[5.3375rem] font-bold `}>
            Genuine Listings
            <br /> Without Stress
          </p>
        </div>
      </div>
    </div>
  );
}

export default GenuineListingRow;
