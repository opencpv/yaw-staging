"use client";
import AddCustomerModal from "../../components/AddCustomerModal";
import CustomerCard from "../../components/CustomarCard";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useQuery } from "@tanstack/react-query";

const Customers = () => {
  const supabaseClient = createClient();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["customerData"],
    queryFn: async () => {
      const { data, error } = await supabaseClient.from("customers").select(); // TODO: fetch only needed columns
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });

  useEffect(() => {
    console.log(data);
  }, [isLoading]);

  return (
    <div className="h-[100vh] p-8">
      <div className="flex items-center justify-between">
        <h2 className="mb-8 text-3xl font-bold"> Customers </h2>

        <AddCustomerModal refetch={refetch} />
      </div>
      {isLoading && !data ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-4">
          {data?.map((customer) => (
            <CustomerCard
              key={customer.id}
              firstname={customer.firstname}
              lastname={customer.lastname}
              company={customer.company}
              customerId={customer.customer_id}
              refetch={refetch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Customers;
