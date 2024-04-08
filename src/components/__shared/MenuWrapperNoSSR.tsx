import dynamic from "next/dynamic";

const MenuWrapperNoSSR = dynamic(() => import("./MenuWrapper"), {
  ssr: false,
});

export default MenuWrapperNoSSR;
