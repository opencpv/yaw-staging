import Button from "@/components/__shared/ui/button/Button";
import React from "react";
import { MdOutlineSettings } from "react-icons/md";

type Props = {};

const ManageButton = (props: Props) => {
  return (
    <Button
      href="/dashboard/renter/be-the-first-to-know/manage-criteria"
      variant="outline"
      color="primary"
      className="w-fit px-5"
    >
      <MdOutlineSettings />
      Manage Search
    </Button>
  );
};

export default ManageButton;
