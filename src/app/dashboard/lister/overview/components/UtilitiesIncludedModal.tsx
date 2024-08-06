import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/ui/modals/Modal";
import React, { useContext } from "react";
import { BsInfo } from "react-icons/bs";
import { CheckboxNoFormik as Checkbox } from "@/app/dashboard/components/shared/ui/Checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

type Props = {
  handleYes: (r: string) => void;
  handleNo: (r: string) => void;
  utility: string;
  checked?: CheckedState;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onCheckedChange?: (checked: CheckedState) => void;
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
        onCheckedChange: props.onCheckedChange,
        checked: props.checked,
      }}
    >
      <Modal
        header={<ModalHeader />}
        body={<ModalBody />}
        footer={<ModalFooter />}
        footerAlignment="end"
        isOpen={props?.isOpen as boolean}
        onOpenChange={props?.onOpenChange as (open: boolean) => void}
        size="lg"
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
    <div className="space-y-3 max-w-sm xs:pl-14">
      <p className="text-shade-200">
        Is this utility ( {utility} ) included in rent?
      </p>

      <div className="flex w-full flex-col xxs:flex-row gap-y-3 gap-x-5">
        <Button color="primary" onClick={handleYes} className="flex-1">
          Yes
        </Button>
        <Button
          variant="outline"
          color="primary"
          onClick={handleNo}
          className="flex-1 "
        >
          No
        </Button>
      </div>
    </div>
  );
};

const ModalFooter = () => {
  const onCheckedChange = useContext(Context)?.onCheckedChange;
  const checked = useContext(Context)?.checked;

  return (
    <Checkbox
      label="Apply to all utilities"
      checked={checked}
      onCheckedChange={onCheckedChange}
    />
  );
};

export default UtilitiesIncludedModal;
