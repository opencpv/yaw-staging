import { getCurrentYear } from "@/lib/utils/numberManipulation";
import { Link } from "lucide-react";

function TlpFooter() {
  return (
    <div className="flex flex-col w-full gap-10 lg:px-5 bg-transparent text-[1rem] lg:flex-row min-[1110px]:mx-auto min-[1110px]:justify-between min-[1110px]:items-center">
      <div
        className={
          " flex flex-row flex-wrap gap-x-1 gap-y-4"
        }>
        <div className="flex flex-wrap gap-x-2 gap-y-4 text-shade-50">
          <span>Copyright &copy; {getCurrentYear()} ESODO LLC</span>
          <span>
            | All rights reserved{" "}
         
          </span>
        </div>
      </div>
      <div
        className={
          " flex flex-row flex-wrap gap-4 "
        }>
        <div className={"flex flex-row items-center gap-1"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.33269 36.6654C6.32435 36.6654 5.46085 36.306 4.74219 35.5874C4.02352 34.8687 3.6648 34.0058 3.66602 32.9987V10.9987C3.66602 9.99037 4.02535 9.12687 4.74402 8.4082C5.46269 7.68953 6.32557 7.33081 7.33269 7.33203H36.666C37.6744 7.33203 38.5378 7.69137 39.2565 8.41003C39.9752 9.1287 40.3339 9.99159 40.3327 10.9987V32.9987C40.3327 34.007 39.9734 34.8705 39.2547 35.5892C38.536 36.3079 37.6731 36.6666 36.666 36.6654H7.33269ZM21.9994 23.832L36.666 14.6654V10.9987L21.9994 20.1654L7.33269 10.9987V14.6654L21.9994 23.832Z"
              fill="#DDB771"
            />
          </svg>
          <p className="text-[#ffff]" title="contact@rentright.com">
            contact@rentright.com
          </p>
        </div>
        <div className={"flex flex-row items-center gap-1"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36.575 38.5C32.6333 38.5 28.7913 37.6212 25.0488 35.8637C21.3064 34.1061 17.9911 31.7839 15.103 28.897C12.2149 26.0101 9.89267 22.6948 8.13633 18.9512C6.38 15.2075 5.50122 11.3654 5.5 7.425C5.5 6.875 5.68333 6.41667 6.05 6.05C6.41667 5.68333 6.875 5.5 7.425 5.5H14.85C15.2778 5.5 15.6597 5.6375 15.9958 5.9125C16.3319 6.1875 16.5306 6.53889 16.5917 6.96667L17.7833 13.3833C17.8444 13.8111 17.8365 14.201 17.7595 14.553C17.6825 14.905 17.5071 15.2179 17.2333 15.4917L12.8333 19.9833C14.1167 22.1833 15.7208 24.2458 17.6458 26.1708C19.5708 28.0958 21.6944 29.7611 24.0167 31.1667L28.325 26.8583C28.6 26.5833 28.9593 26.3774 29.403 26.2405C29.8467 26.1036 30.2818 26.0651 30.7083 26.125L37.0333 27.4083C37.4611 27.5 37.8125 27.7066 38.0875 28.028C38.3625 28.3494 38.5 28.7234 38.5 29.15V36.575C38.5 37.125 38.3167 37.5833 37.95 37.95C37.5833 38.3167 37.125 38.5 36.575 38.5Z"
              fill="#DDB771"
            />
          </svg>
          <p className="text-[#ffff]">(+233) 25 898 2889</p>
        </div>
      </div>
    </div>
  );
}

export default TlpFooter;
