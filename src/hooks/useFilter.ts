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
    const bedroom = parseInt(searchParams.get("bedroom"));
    const bathroom = parseInt(searchParams.get("bathroom"));
    const type = searchParams.get("type");

    console.log("debug");

    const filteredDummyData = estateDummyData.filter((el) => {
      let isBathroomInitialized = true;
      let isBedroomInitialized = true;
      let isTypeInitialized = true;
      if (!type || type === "Any" || type === "null") {
        isTypeInitialized = false;
      }

      if (!bathroom) {
        isBathroomInitialized = false;
      }

      if (!bedroom) {
        isBedroomInitialized = false;
      }

      if (!minPrice) {
        minPrice = 0;
      }
      if (!maxPrice) {
        maxPrice = Infinity;
      }

      // Jeśli dane zostały zainicjalizowane, wykonaj filtrowanie

      return (
        el.price >= minPrice &&
        el.price <= maxPrice &&
        (isBathroomInitialized ? el?.bathroom === bathroom : true) &&
        (isBedroomInitialized ? el?.bedroom === bedroom : true) &&
        (isTypeInitialized ? el?.type === type : true)
      );
    });

    setFilteredData(filteredDummyData);
  }, [searchParams]);
  return { filteredData };
}

export default useFilter;
