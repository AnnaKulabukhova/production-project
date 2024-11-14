import { VirtuosoContext } from "@/shared/lib/context/VirtuosoContext"
import { type ReactNode, useRef } from "react"
import { type VirtuosoHandle } from "react-virtuoso";

interface VirtuosoProviderProps {
  children: ReactNode;
}

export const VirtuosoProvider = ({ children }: VirtuosoProviderProps) => {
  const virtuosoRef = useRef<VirtuosoHandle | null>(null);
  return (
    <VirtuosoContext.Provider value={virtuosoRef}>
      {children}
    </VirtuosoContext.Provider>
  )
}