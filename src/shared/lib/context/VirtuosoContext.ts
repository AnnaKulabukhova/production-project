import { createContext, type RefObject } from "react";
import { type VirtuosoHandle } from "react-virtuoso";


export const VirtuosoContext = createContext<RefObject<VirtuosoHandle> | null>(null)
