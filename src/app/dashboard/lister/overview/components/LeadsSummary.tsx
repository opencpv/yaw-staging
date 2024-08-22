import { useFetchListerLeads } from "../services";
import Button from "@/components/__shared/ui/button/Button";
import MessageButton from "@/components/__shared/ui/button/message-button";
import FetchingStates from "@/components/__shared/ui/data_fetching/fetching-states";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { initiatePhoneCall } from "@/lib/utils/initiatePhoneCall";
import { useAppStore } from "@/store/dashboard/AppStore";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChatCenteredDotsFill } from "react-icons/pi";

type Lead = {
  image: string | StaticImport;
  name: string;
  email: string;
  phone: string;
  id: string;
};

const LeadsSummary = () => {
  const { user } = useAppStore();
  const { images } = useAssets();

  // const {
  //   data: leads,
  //   error,
  //   isLoading,
  // } = useFetchListerLeads({ listerId: user?.id as string });

  return (
    // <div className={`${error && "hidden"}`}>
    //   <div className="-mt-14 mb-3 flex max-w-md items-center justify-between gap-5 rounded-xl bg-primary-400 p-2 px-4 capitalize text-white">
    //     Leads
    //     <Button
    //       href="#"
    //       padding="sm"
    //       radius="full"
    //       className="w-fit bg-neutral-100 text-neutral-800"
    //     >
    //       See all
    //     </Button>
    //   </div>
    //   <div className="space-y-5">
    //     <FetchingStates
    //       data={leads}
    //       error={error}
    //       isLoading={isLoading}
    //       emptyStateComponent={
    //         <p className="text-center">There are no leads yet.</p>
    //       }
    //     />
    //     {leads?.map((lead) => (
    //       <LeadInfo
    //         key={lead.id as string}
    //         id={lead.id as string}
    //         image={(lead.profile_img as string) || images.NoProfilePH}
    //         name={lead.full_name as string}
    //         phone={lead.phone as string}
    //         email={"mail@email.com"}
    //       />
    //     ))}
    //   </div>
    // </div>
    <></>
  );
};

const LeadInfo = ({ name, email, phone, id, image }: Lead) => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="relative h-14 w-14 rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="space-y-3">
        <h4>{name}</h4>
        <p>{email}</p>
        <div className="flex items-center gap-2">
          <MessageButton
            id=""
            className="h-fit max-w-xs flex-1 gap-2 rounded-xl bg-primary-100 px-4 py-1 text-white"
          >
            Message <PiChatCenteredDotsFill className="shrink-0" />
          </MessageButton>
          <Button
            className="h-fit max-w-xs flex-1 gap-2 rounded-xl bg-primary-100 px-4 py-1 text-white"
            onClick={() => initiatePhoneCall(phone)}
          >
            Call <IoCallOutline className="shrink-0" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadsSummary;
