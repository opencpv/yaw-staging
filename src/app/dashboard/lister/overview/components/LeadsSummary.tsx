import Button from "@/components/__shared/ui/button/Button";
import ButtonMessage from "@/components/__shared/ui/button/ButtonMessage";
import { initiatePhoneCall } from "@/lib/utils/initiatePhoneCall";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { PiChatCenteredDotsFill } from "react-icons/pi";

type Props = {
  leads: Lead[];
};

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
};

const LeadsSummary = ({ leads }: Props) => {
  return (
    <div>
      <div className="mb-3 flex max-w-md items-center justify-between gap-5 rounded-xl bg-primary-400 p-2 px-4 capitalize text-white">
        Leads
        <Link href="">
          <Button
            padding="sm"
            radius="full"
            className="w-fit bg-neutral-100 text-neutral-800"
          >
            See all
          </Button>
        </Link>
      </div>
      <div className="space-y-5">
        {leads.map((lead) => (
          <LeadInfo
            key={lead.id}
            name={lead.name}
            phone={lead.phone}
            id={lead.id}
            email={lead.email}
          />
        ))}
      </div>
    </div>
  );
};

const LeadInfo = ({ name, email, phone, id }: Lead) => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="relative h-14 w-14 rounded-full">
        <Image
          src="/assets/images/sampleProfilePic.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="space-y-3">
        <h4>{name}</h4>
        <p>{email}</p>
        <div className="flex items-center gap-2">
          <ButtonMessage
            id=""
            className="h-fit max-w-xs flex-1 gap-2 rounded-xl bg-primary-100 px-4 py-1 text-white"
          >
            Message <PiChatCenteredDotsFill className="shrink-0" />
          </ButtonMessage>
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
