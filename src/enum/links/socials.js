import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import CaInstagram from "@/components/__shared/ui/icons/CaInstagram";
import CaTwitter from "@/components/__shared/ui/icons/CaTwitter";
import CaWhatsappBusiness from "@/components/__shared/ui/icons/CaWhatsappBusiness";
import CaFacebook from "@/components/__shared/ui/icons/CaFacebook";

export const socialLinks = {
  monochrome: [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      href: "",
    },
    {
      name: "X",
      icon: <RiTwitterXLine />,
      href: "",
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
