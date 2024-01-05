export interface AppContextType  {
    user?: any
    setUser : React.Dispatch<React.SetStateAction<{}>>
}

export type UserRole = "Property manager" | "Renter"