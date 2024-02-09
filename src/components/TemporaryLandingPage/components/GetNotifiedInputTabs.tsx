import { Tab, Tabs } from "@nextui-org/react";
import { useGetNotifiedStore } from "./store";
import CaTlpEmail from "../icons/CaTLPEmail";
import CaTLPWhatsapp from "../icons/CaTLPWhatsapp";
import { FaWhatsapp } from "react-icons/fa";

function GetNotifiedInputTabs() {
  const optionSelect = useGetNotifiedStore((state: any) => state.filterOption);
  const handleOptionChange = useGetNotifiedStore(
    (state: any) => state.changeOption
  );
  return (
    <div>
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        // radius="full"
        classNames={{
          base: " w-full flex justify-between xs:w-fit rounded-2xl p-[0.5rem] md:overflow-hidden bg-[#FFFFFFA3] max-h-[60px]  xs:max-w-[345px] overflow-x-scroll ",
          tabList: "w-full flex overflow-x-scroll justify-between gap-4 p-0",
          tab: "  w-[10.5rem] text-black  rounded-2xl h-[44px]",
          tabContent:
            "text-shade-300 text-[1rem] capitalize group-data-[selected=true]:text-white group-data-[selected=true]:font-semibold leading-[22.4px]",
          cursor: "!bg-[#396261] text-shade-50 rounded-2xl ",
        }}
        selectedKey={optionSelect}
        onSelectionChange={(selectedOption) =>
          handleOptionChange(selectedOption)
        }>
        <Tab
          key="email"
          title={
            <div className="flex items-center gap-2.5">
              <p>Email</p>
              <CaTlpEmail active={optionSelect == "email"} />
            </div>
          }></Tab>
        <Tab
          key="mobile"
          title={
            <div className="flex items-center  gap-2.5 ">
              <p>Mobile</p>
              <FaWhatsapp size="24" color={optionSelect !== "mobile" ? 
              "#545454" : "white"} />
            </div>
          }></Tab>
      </Tabs>
    </div>
  );
}

export default GetNotifiedInputTabs;
