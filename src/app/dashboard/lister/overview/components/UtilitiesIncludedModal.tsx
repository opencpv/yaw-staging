import Button from "@/components/__shared/ui/button/Button";
import dynamic from "next/dynamic";
import React, { useContext } from "react";
import { BsInfo } from "react-icons/bs";
const Modal = dynamic(() =>
  import("@/components/__shared/ui/modals/dialog").then((mod) => mod.Modal),
);

type Props = {
  handleYes: (r: string) => void;
  handleNo: (r: string) => void;
  utility: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const Context = React.createContext<Props | null>(null);

const UtilitiesIncludedModal = (props: Props) => {
  return (
    <Context.Provider
      value={{
        isOpen: props.isOpen,
        handleYes: props.handleYes,
        handleNo: props.handleNo,
        utility: props.utility,
      }}
    >
      <Modal
        header={<ModalHeader />}
        body={<ModalBody />}
        //footerAlignment="end"
        isOpen={props?.isOpen as boolean}
        onOpenChange={props?.onOpenChange as (open: boolean) => void}
        size="lg"
        //classNames={{
        //  header: "pb-0",
        //  body: "pb-10",
        //}}
        className="pb-10"
      />
    </Context.Provider>
  );
};

const ModalHeader = () => {
  return (
    <div className="flex gap-5">
      <div className="grid size-8 place-items-center rounded-full bg-info-bg">
        <div className="grid size-5 place-items-center rounded-full bg-info">
          <BsInfo className="text-white" />
        </div>
      </div>
      <h3>Notice</h3>
    </div>
  );
};

const ModalBody = () => {
  const utility = useContext(Context)?.utility;
  const handleYes = useContext(Context)?.handleYes;
  const handleNo = useContext(Context)?.handleNo;

  return (
    <div className="max-w-sm space-y-3 xs:pl-14">
      <p className="text-shade-200">
        Is this utility ( {utility} ) included in rent?
      </p>

      <div className="flex w-full flex-col gap-x-5 gap-y-3 xxs:flex-row">
        <Button color="primary" onClick={handleYes} className="flex-1">
          Yes
        </Button>
        <Button
          variant="outline"
          color="primary"
          onClick={handleNo}
          className="flex-1"
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default UtilitiesIncludedModal;
