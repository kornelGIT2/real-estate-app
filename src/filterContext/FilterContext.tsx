import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const FilterContext = createContext<any | null>(null);

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <FilterContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </FilterContext.Provider>
  );
};
