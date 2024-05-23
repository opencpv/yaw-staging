import React, { useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import { RefetchOptions } from "@tanstack/react-query";
import { date, object, string } from "yup";
import { toast } from "react-toastify";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { generateUniqueString } from "@/lib/utils/stringManipulation";
import { DatePicker } from "antd";

interface Props {
  refetch: (options?: RefetchOptions) => void;
  customerId: string;
}
export default function AddInvoiceModal({ refetch, customerId }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [company, setcompany] = useState<string>();
  const [email, setemail] = useState<string>();
  const [phone, setphone] = useState<string>();
  const [loading, setloading] = useState(false);
  const [service, setService] = useState<string>();
  const [cost, setCost] = useState<number>();
  const [tax, setTax] = useState<number>();
  const [description, setDescription] = useState<string>();
  const closeButtonRef = useRef<any>();

  let customerSchema = object({
    service: string().required(),
    cost: string().required(),
  });

  const handleSubmit = async () => {
    setloading(true);
    try {
      const validation = await customerSchema.validate({
        service,
        cost,
      });

      const { data, error } = await supabase
        .from("invoices")
        .insert({
          service,
          billing_date: new Date().toISOString().split("T")[0],
          amount: cost,
          is_paid: false,
          customer: customerId,
          tax_rate: tax,
          service_description: description,
        })
        .select();

      if (error) {
        setloading(false);
        throw new Error(error.message);
      }
      setloading(false);
      refetch();
      closeButtonRef.current.click();
    } catch (error: any) {
      setloading(false);
      toast.error(error.message, { toastId: "toast" });
    }
  };
  return (
    <>
      <Button onPress={onOpen} className="w-full">
        Add Invoice
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="w-[50vw]">
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Invoice
              </ModalHeader>
              <ModalBody>
                <Input
                  placeholder="Enter service performed"
                  label="Service"
                  required
                  onChange={(e) => setService(e.target.value)}
                />

                <Textarea
                  placeholder="Enter service description "
                  label="Service description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />

                <Input
                  placeholder="Enter cost of service"
                  label="Cost"
                  required
                  type="number"
                  onChange={(e) => setCost(parseFloat(e.target.value))}
                />
                <Input
                  placeholder="Enter tax rate as percentage"
                  label="Tax rate"
                  required
                  type="number"
                  onChange={(e) => setTax(parseFloat(e.target.value))}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  ref={closeButtonRef}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={handleSubmit}
                  isLoading={loading}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
