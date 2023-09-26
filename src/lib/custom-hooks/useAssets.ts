import GoogleIcon from "../../../public/assets/icons/google-icon.svg";
import FacebookIcon from "../../../public/assets/icons/fb-icon.svg";
import AppleIcon from "../../../public/assets/icons/apple-icon.svg";
import PhoneIcon from "../../../public/assets/icons/phone-icon.svg";
import MailIcon from "../../../public/assets/icons/mail-icon.svg";
import ArrowIcon from "../../../public/assets/icons/arrow-icon.svg";
import Logo from "../../../public/assets/icons/logo.svg";
import Hamburger from "../../../public/assets/icons/nav-icon.svg";
import FaqImage from "../../../public/assets/images/faq/faq-image.svg";
import FaqArrowIcon from "../../../public/assets/icons/arrow-circle-right.svg";
import ContactImage from "../../../public/assets/images/rafiki.png";
import StockImage from "../../../public/assets/images/Stock.jpg";
import niceHome from  "../../../public/assets/images/niceHome.png";
import ArrowDown from "../../../public/assets/icons/drop-down.svg";
import FeedbackButton from "../../../public/assets/icons//Feedback.svg";
import Seperator from "../../../public/assets/icons/seperator.svg";

export const useAssets = () => {
  return {
    icons: {
      GoogleIcon,
      FacebookIcon,
      AppleIcon,
      PhoneIcon,
      MailIcon,
      ArrowIcon,
      Logo,
      Hamburger,
      FaqArrowIcon,
      ArrowDown,
      FeedbackButton,
      Seperator,
    },
    images: {
      StockImage,
      FaqImage,
      ContactImage,
      niceHome
    },
  };
};
