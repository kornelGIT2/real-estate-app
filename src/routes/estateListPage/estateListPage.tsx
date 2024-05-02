import { useEffect, useState } from "react";
import { estateDummyData } from "../../const/const";
import Card from "./_components/Card";
import { Collapse } from "react-collapse";
import Filter from "./_components/Filter";
import Map from "../../components/map/map";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useFilterContext } from "../../filterContext/FilterContext";

function EstateList() {
  const [showFilterOptions, setShowFilterOptions] = useState(true);
  const [filteredData, setFilteredData] = useState(estateDummyData);
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    minPrice: 1,
    maxPrice: Infinity,
  } as any);

  const { filters, setFilters } = useFilterContext();

  useEffect(() => {
    setLoading(true);

    let maxPrice = parseInt(searchParams.get("maxPrice"));
    let minPrice = parseInt(searchParams.get("minPrice"));

    setFilters({ minPrice: minPrice, maxPrice: maxPrice });

    if (!minPrice) {
      minPrice = 1;
    }
    if (!maxPrice) {
      maxPrice = Infinity;
    }

    setMinPrice(minPrice);
    setMaxPrice(maxPrice);

    const filteredDataW = estateDummyData.filter(
      (el) => el.price >= minPrice && el.price <= maxPrice
    );

    setTimeout(() => {
      if (!maxPrice || !minPrice) {
        setFilteredData(estateDummyData);
      } else {
        setFilteredData(filteredDataW);
      }

      setLoading(false);
    }, 1000);
  }, [searchParams]);

  return (
    <>
      <div className="grid  lg:grid-cols-12 w-full  h-full gap-14 relative mt-10">
        <div className="mt-12 z-0 lg:hidden md:hidden block col-span-8">
          <Map filteredData={filteredData} />
        </div>

        <div className="col-span-8 flex flex-col gap-4">
          <div className=" w-full flex flex-col items-start gap-2 ">
            <h1 className="font-semibold text-xl ">
              Properties for rent or buy in Poland
            </h1>

            <small className="text-slate-500">1-6 of 15000 properties</small>

            <div className="flex border-b border-neutral-200 w-full items-center gap-1  pt-3 justify-between">
              <div className="flex">
                <button className="border-b-2 border-teal-500 p-2 flex items-center gap-1 opacity-80">
                  {" "}
                  <img
                    src={"/assets/list.svg"}
                    alt="apartment"
                    className="h-3 w-3"
                  />
                  List
                </button>

                <button
                  onClick={() => {
                    navigate(`/map?minPrice=${minPrice}&maxPrice=${maxPrice}`);
                  }}
                  className=" p-2 flex items-center gap-1 opacity-80"
                >
                  {" "}
                  <img
                    src={"/assets/map.svg"}
                    alt="apartment"
                    className="h-4 w-4"
                  />
                  Map
                </button>
              </div>
              <button
                className={`${
                  showFilterOptions ? "border-b-2 border-teal-500" : ""
                } p-2 flex items-center gap-1 opacity-80`}
                onClick={() => {
                  setShowFilterOptions(!showFilterOptions);
                }}
              >
                {" "}
                <img
                  src={"/assets/filters.svg"}
                  alt="apartment"
                  className="h-4 w-4"
                />
                Filters
              </button>
            </div>
          </div>
          <Collapse isOpened={showFilterOptions} className="">
            <div className="hidden md:block">
              <Filter setFilteredOptions={setSearchParams} />
            </div>
          </Collapse>

          <ul className="flex flex-col gap-12">
            {filteredData.map((estate) => {
              return (
                <li key={estate.id} className="">
                  <Card {...estate} loading={loading} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-4 lg:block hidden  mt-14 z-0 ">
          <Map filteredData={filteredData} />
        </div>
      </div>
    </>
  );
}

export default EstateList;
