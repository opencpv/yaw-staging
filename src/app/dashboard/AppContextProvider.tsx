import { createContext, useState } from "react";
import { AppContextType } from "./types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: {children : React.ReactNode}) => {
    const [user, setUser] = useState({})
    return <AppContext.Provider value={{user, setUser}}>{children}</AppContext.Provider>;
  };
  
  export default AppContextProvider;
  