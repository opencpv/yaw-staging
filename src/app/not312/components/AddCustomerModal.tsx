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
} from "@nextui-org/react";
import { RefetchOptions } from "@tanstack/react-query";
import { object, string } from "yup";
import { toast } from "react-toastify";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { generateUniqueString } from "@/lib/utils/stringManipulation";

interface Props {
  refetch: (options?: RefetchOptions) => void;
}
export default function AddCustomerModal({ refetch }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const [company, setcompany] = useState<string>();
  const [email, setemail] = useState<string>();
  const [phone, setphone] = useState<string>();
  const [loading, setloading] = useState(false);
  const closeButtonRef = useRef<any>();

  let customerSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    company: string().required(),
    email: string().email(),
    phone: string().matches(/^\d{10}$/),
  });

  const handleSubmit = async () => {
    setloading(true);
    try {
      const validation = await customerSchema.validate({
        firstname,
        lastname,
        email,
        phone,
        company,
      });

      const { data, error } = await supabase
        .from("customers")
        .insert({
          firstname,
          lastname,
          email,
          phone,
          company,
          customer_id: generateUniqueString(8),
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
      <Button onPress={onOpen}>Add Customer</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new customer
              </ModalHeader>
              <ModalBody>
                <Input
                  placeholder="Enter customer firstname"
                  label="Firstname"
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  placeholder="Enter customer lastname"
                  label="Lastname"
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  placeholder="Enter customer company name"
                  label="Company"
                  required
                  onChange={(e) => setcompany(e.target.value)}
                />
                <Input
                  placeholder="Enter customer email"
                  label="Email"
                  required
                  onChange={(e) => setemail(e.target.value)}
                />
                <Input
                  placeholder="Enter customer phone"
                  label="Phone"
                  required
                  onChange={(e) => setphone(e.target.value)}
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
