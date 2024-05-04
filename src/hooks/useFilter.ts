import { useEffect, useState } from "react";
import { useFilterContext } from "../filterContext/FilterContext";
import { estateDummyData } from "../const/const";

function useFilter() {
  const { searchParams } = useFilterContext();
  const [filteredData, setFilteredData] =
    useState<typeof estateDummyData>(estateDummyData);

  useEffect(() => {
    let maxPrice = parseInt(searchParams.get("maxPrice"));
    let minPrice = parseInt(searchParams.get("minPrice"));

    if (!minPrice) {
      minPrice = 1;
    }
    if (!maxPrice) {
      maxPrice = Infinity;
    }

    const filteredDummyData = estateDummyData.filter(
      (el) => el.price >= minPrice && el.price <= maxPrice
    );

    setFilteredData(filteredDummyData);
  }, [searchParams]);
  return { filteredData };
}

export default useFilter;
