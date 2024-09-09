import { createContext } from "react";

export const ItemContext = createContext<{ item: Item } | null>(null);
