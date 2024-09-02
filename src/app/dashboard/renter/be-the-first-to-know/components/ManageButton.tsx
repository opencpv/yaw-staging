import { LinkButton } from "@/components/__shared/ui/button";
import React from "react";
import { MdOutlineSettings } from "react-icons/md";


const ManageButton = () => {
  return (
    <LinkButton
      href="/dashboard/renter/be-the-first-to-know/manage-criteria"
      variant="outline"
    >
      <MdOutlineSettings />
      Manage Search
    </LinkButton>
  );
};

export default ManageButton;
