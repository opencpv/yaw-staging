import { Rate as AntRate, RateProps } from "antd";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const Rate: React.FC<RateProps> = (props) => {
  return <AntRate allowHalf character={<FaStar />} {...props} />;
};

export default Rate;
