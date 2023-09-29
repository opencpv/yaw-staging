"use client";
import { createContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const NavMenuContext = createContext({});

const NavMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [isNavMenuShowing, setIsNavMenuShowing] = useState<boolean>(false);

  const openNavMenu = () => {
    setIsNavMenuShowing(true);
    sessionStorage.setItem("currentRoute", pathname);
  };
  const closeNavMenu = () => {
    setIsNavMenuShowing(false);
    const currentRoute = sessionStorage.getItem("currentRoute");
    if (currentRoute) {
      router.push(currentRoute);
    }
  };

  return (
    <NavMenuContext.Provider
      value={{
        isNavMenuShowing,
        openNavMenu,
        closeNavMenu,
        setIsNavMenuShowing,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  );
};

export default NavMenuProvider;
