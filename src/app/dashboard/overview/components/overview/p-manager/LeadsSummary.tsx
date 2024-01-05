import Button from "@/components/__shared/ui/button/Button";
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
      <div className="flex items-center justify-between gap-5 p-2 px-4 max-w-md text-white capitalize bg-primary-400 rounded-xl mb-3">
        Leads
        <Link href="">
          <Button className="bg-neutral-100 text-neutral-800 p-1.5 px-2.5 min-w-fit h-fit rounded-xl">
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
      <div className="relative w-14 h-14 rounded-full">
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
        <div className="flex gap-2 items-center">
          <Button className="flex-1 bg-primary-100 text-white rounded-xl px-4 py-1 max-w-xs h-fit gap-2">
            Message <PiChatCenteredDotsFill className="shrink-0" />
          </Button>
          <Button
            className="flex-1 bg-primary-100 text-white rounded-xl px-4 py-1 max-w-xs h-fit gap-2"
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
