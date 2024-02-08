import TLPTags from "./TLPTags";
import styles from "../index.module.css";
import GetNotifiedInput from "./GetNotifiedInput";
function GenuineListingRow() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 items-start justify-center">
        <div>
          <p
            className={`${styles.genuineText} text-[1.5rem]  
            md:text-[2rem] lg:text-[3.8125rem] text-white
            leading-[2.8rem]  lg:leading-[5.3375rem] font-bold `}>
            Genuine Listings
            <br /> Without the Stress
          </p>
        </div>
      </div>
    </div>
  );
}

export default GenuineListingRow;
