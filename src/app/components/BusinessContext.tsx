import { createContext, useContext, useState } from "react";

export type BusinessType = "sexshop" | "noturna";

const BusinessContext = createContext<{
  type: BusinessType;
  setType: (t: BusinessType) => void;
}>({ type: "noturna", setType: () => {} });

export function BusinessProvider({ children }: { children: React.ReactNode }) {
  const [type, setType] = useState<BusinessType>("noturna");
  return (
    <BusinessContext.Provider value={{ type, setType }}>
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness() {
  return useContext(BusinessContext);
}
