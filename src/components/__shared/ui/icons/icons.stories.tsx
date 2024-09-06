import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ArrowDownNav from "./CaArrowDownNav.";
import CaAttachment from "./CaAttachment";
import CaBackArrow from "./CaBackArrow";
import CaCard from "./CaCard";
import CaCartEmptyItem from "./CaCartEmptyIcon";
import CaCartItem from "./CaCartItem";
import CaDashAdd from "./CaDashAdd";
import CaDashChecked from "./CaDashChecked";
import CaDashDelete from "./CaDashDelete";
import CaDashEdit from "./CaDashEdit";
import CaDashEye from "./CaDashEye";
import CaDashEyeOff from "./CaDashEyeOff";
import CaDashFilter from "./CaDashFilter";
import CaDAshMessages from "./CaDashMessages";
import CaDashMySearch from "./CaDashMySearch";
import CaDashSave from "./CaDashSave";
import CaDeleteIcon from "./CaDeleteIcon";
import CaDropdownArrow from "./CaDropdownArrow";
import CaDropdownArrowOutline from "./CaDropDownOutline";
import CaFacebook from "./CaFacebook";
import CaInstagram from "./CaInstagram";
import CaNormalArrowDown from "./CaNormalArrowDown";
import CaNormalArrowUp from "./CaNormalArrowUp";
import CaOverview from "./CaOverview";
import CaSell from "./CaSell";
import CaStarRainbow from "./CaStarRainbow";
import CaSubscriptions from "./CaSubscriptions";
import CaTwitter from "./CaTwitter";
import CaUploadIcon from "./CaUploadIcon";
import CaWhatsappBusiness from "./CaWhatsappBusiness";
import CloseModalIcon from "./CloseModalIcon";

// Metadata for the icons
const meta: Meta = {
  title: "Components/Icons",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ArrowDowNavIcon: Story = {
  render: (args) => (
    <div className="bg-black">
      <ArrowDownNav {...args} />
    </div>
  ),
  args: {},
};
export const AttachmentIcon: Story = {
  render: (args) => <CaAttachment {...args} />,
  args: {},
};

export const BackArrow: Story = {
  render: (args) => <CaBackArrow {...args} />,
  args: {},
};
export const Card: Story = {
  render: (args) => (
    <div className="bg-black">
      <CaCard {...args} />
    </div>
  ),
  args: {},
};
export const CartEmptyItem: Story = {
  render: (args) => <CaCartEmptyItem {...args} />,
  args: {},
};
export const CartItem: Story = {
  render: (args) => (
    <div className="bg-black">
      <CaCartItem {...args} />
    </div>
  ),
  args: {},
};
export const DashAdd: Story = {
  render: (args) => <CaDashAdd {...args} />,
  args: {},
};
export const DashChecked: Story = {
  render: (args) => (
    <div className="bg-black">
      <CaDashChecked {...args} />
    </div>
  ),
  args: {},
};
export const DashDelete: Story = {
  render: (args) => <CaDashDelete {...args} />,
  args: {},
};
export const DashEdit: Story = {
  render: (args) => <CaDashEdit {...args} />,
  args: {},
};
export const DashEye: Story = {
  render: (args) => <CaDashEye {...args} />,
  args: {},
};
export const DashEyeOff: Story = {
  render: (args) => <CaDashEyeOff {...args} />,
  args: {},
};
export const DashFilter: Story = {
  render: (args) => <CaDashFilter {...args} />,
  args: {},
};
export const Messages: Story = {
  render: (args) => (
    <div className="bg-black">
      <CaDAshMessages {...args} />
    </div>
  ),
  args: {},
};
export const MySearch: Story = {
  render: (args) => (
    <div className="bg-black">
      <CaDashMySearch {...args} />
    </div>
  ),
  args: {},
};
export const DashSave: Story = {
  render: (args) => (
    <div className="bg-black">
      <CaDashSave {...args} />
    </div>
  ),
  args: {},
};
export const Delete: Story = {
  render: (args) => <CaDeleteIcon {...args} />,
  args: {},
};
export const DropDownArrow: Story = {
  render: (args) => <CaDropdownArrow {...args} />,
  args: {},
};

export const DropDownArrowOutline: Story = {
  render: (args) => <CaDropdownArrowOutline {...args} />,
  args: {},
};
export const Facebook: Story = {
  render: (args) => <CaFacebook width={50} height={50} {...args} />,
  args: {},
};
export const Instagram: Story = {
  render: (args) => <CaInstagram {...args} />,
  args: {},
};
export const NormalArrowDown: Story = {
  render: (args) => <CaNormalArrowDown {...args} />,
  args: {},
};
export const NormalArrowUp: Story = {
  render: (args) => <CaNormalArrowUp {...args} />,
  args: {},
};
export const Overview: Story = {
  render: (args) => (
    <div className="bg-black">
      <CaOverview {...args} />
    </div>
  ),
  args: {},
};
export const Sell: Story = {
  render: (args) => <CaSell {...args} />,
  args: {},
};
export const Rainbow: Story = {
  render: (args) => <CaStarRainbow width={50} height={50} {...args} />,
  args: {},
};
export const Subscription: Story = {
  render: (args) => <div className="bg-black"><CaSubscriptions width={50} height={50} {...args} /></div>,
  args: {},
};
export const Twitter: Story = {
  render: (args) => <CaTwitter width={50} height={50} {...args} />,
  args: {},
};
export const Upload: Story = {
  render: (args) => <CaUploadIcon {...args} />,
  args: {},
};
export const WhatsappBusiness: Story = {
  render: (args) => <CaWhatsappBusiness width={50} height={50} {...args} />,
  args: {},
};
export const CloseModalIconIcon: Story = {
  render: (args) => <CloseModalIcon {...args} />,
  args: {},
};
