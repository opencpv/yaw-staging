import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";
import CaInstagram from "@/components/__shared/ui/icons/CaInstagram";
import CaTwitter from "@/components/__shared/ui/icons/CaTwitter";
import CaWhatsappBusiness from "@/components/__shared/ui/icons/CaWhatsappBusiness";
import CaFacebook from "@/components/__shared/ui/icons/CaFacebook";
import { IoLogoWhatsapp } from "react-icons/io5";

export const socialLinks = {
  monochrome: [
    {
      name: "Instagram",
      icon: <RiInstagramFill />,
      href: "#",
    },
    {
      name: "X",
      icon: <RiTwitterXLine />,
      href: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "#",
    },
    {
      name: "WhatsApp",
      icon: <IoLogoWhatsapp />,
      href: "#",
    },
  ],
  coloured: [
    {
      name: "Facebook",
      icon: <CaFacebook />,
      href: "#",
    },
    {
      name: "X",
      icon: <CaTwitter />,
      href: "#",
    },
    {
      name: "Whatsapp",
      icon: <CaWhatsappBusiness />,
      href: "#",
    },
    {
      name: "Instagram",
      icon: <CaInstagram />,
      href: "#",
    },
  ],
};
