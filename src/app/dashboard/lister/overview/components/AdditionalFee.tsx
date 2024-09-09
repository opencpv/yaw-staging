import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useField } from "formik";
import { ListingDefaultValues } from "@/store/dashboard/ListingStepsStore";
import { Input } from "@/components/__shared/ui/form/input";
import CurrencyInput from "@/components/__shared/ui/form/currency-input";

type AdditionalFeeType = {
  fee_title: string;
  amount: string;
};

const feeDefault = {
  fee_title: "",
  amount: "",
};

const AdditionalFee = ({
  index,
  fee_title,
  amount,
}: {
  index: number;
  fee_title: string;
  amount: string;
}) => {
  const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");
  const [field, meta, helpers] = useField("additional_fees");

  const handleInputChange = (name: string, value: string, index: number) => {
    const updatedFee = field.value?.map(
      (additionalFee: AdditionalFeeType, currentIndex: number) =>
        currentIndex === index
          ? {
              ...additionalFee,
              [name]: value,
            }
          : additionalFee,
    );

    helpers.setValue(updatedFee);

    setListingCreationSteps({
      ...listingCreationSteps,
      additional_fees: updatedFee,
    });
  };

  const handleOnChange = (name: string, value: string | number) => {
    setListingCreationSteps({
      ...listingCreationSteps,
      [name]: value,
    });
  };
  return (
    <div className="grid w-full grid-cols-2 gap-8">
      <Input
        name={`fee_title ${index}`}
        label="Fee Title"
        type="text"
        value={fee_title}
        onChange={(e) => handleInputChange("fee_title", e.target.value, index)}
      />
      <CurrencyInput
        name="currency"
        name2={`amount ${index}`}
        label="Amount"
        value2={amount}
        onChange={(value) => handleOnChange("currency", value)}
        onChange2={(value) => handleInputChange("amount", value, index)}
      />
    </div>
  );
};

const AdditionalFees = () => {
  const [listingCreationSteps, setListingCreationSteps] = useLocalStorage<
    typeof ListingDefaultValues
  >("listing-creation-steps");

  const [field, meta, helpers] = useField("additional_fees");

  const handleAdd = () => {
    helpers.setValue([...field.value, feeDefault]);

    setListingCreationSteps({
      ...listingCreationSteps,
      additional_fees: [...field.value, feeDefault],
    });
  };

  const handleRemove = (index: number) => {
    helpers.setValue(
      field.value?.filter(
        (_: AdditionalFeeType, currentIndex: number) => currentIndex !== index,
      ),
    );
    setListingCreationSteps({
      ...listingCreationSteps,
      additional_fees: field.value?.filter(
        (_: AdditionalFeeType, currentIndex: number) => currentIndex !== index,
      ),
    });
  };

  return (
    <div className={"col-span-3 flex flex-col gap-2 lg:col-span-1"}>
      <div>
        {field.value?.map((fee: AdditionalFeeType, index: number) => (
          <div key={index} className={index === 0 ? "mb-10" : "mb-2"}>
            <AdditionalFee
              index={index}
              fee_title={fee.fee_title}
              amount={fee.amount}
            />

            {field.value?.length > 1 && index !== 0 && (
              <button
                type="button"
                className="flex h-[38px] items-center justify-center gap-1 px-2 text-[13px] font-[400] text-[#E9515E] hover:bg-[#e9515e3a]"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                Remove
                <AiOutlineMinus size={20} />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="h-38 text-13 flex w-fit items-center justify-start gap-1 whitespace-nowrap p-2 font-normal text-[#AD842A] hover:bg-[#ad832a20]"
        onClick={handleAdd}
      >
        Add Another Fee
        <div className="w-[20px]">
          {" "}
          <AiOutlinePlus size={20} className="aspect-square w-[20px]" />
        </div>
      </button>
    </div>
  );
};

export default AdditionalFees;
