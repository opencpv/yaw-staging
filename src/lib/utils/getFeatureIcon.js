import { IoIosWifi } from "react-icons/io";

export const getFeatureIcon = (feature, size = 44) => {
  const lowerCaseFeature = feature.toLowerCase();
  switch (lowerCaseFeature) {
    case "wifi":
      return <IoIosWifi size={size} />;
    default:
      return <IoIosWifi size={size} />;
  }
};
