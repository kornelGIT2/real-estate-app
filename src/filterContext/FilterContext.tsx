import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState({});

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
