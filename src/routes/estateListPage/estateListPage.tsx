import { useState } from "react";

import { Collapse } from "react-collapse";
import Filter from "./_components/Filter";
import Map from "../../components/map/map";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../filterContext/FilterContext";

import PaginatedItems from "./_components/Paginate";

function EstateList() {
  const [showFilterOptions, setShowFilterOptions] = useState(true);
  const navigate = useNavigate();
  const { searchParams } = useFilterContext();

  return (
    <>
      <div className="grid  lg:grid-cols-12 w-full  h-full gap-14 relative mt-10">
        <div className="mt-12 z-0 lg:hidden md:hidden block col-span-8">
          <Map />
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
                    navigate(
                      `/map?minPrice=${searchParams.get(
                        "minPrice"
                      )}&maxPrice=${searchParams.get("maxPrice")}`
                    );
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
              <Filter />
            </div>
          </Collapse>

          {/* <ul className="flex flex-col gap-12">
            {currentItems?.map((estate) => {
              return (
                <li key={estate.id} className="">
                  <Card {...estate} loading={loading} />
                </li>
              );
            })}
          </ul> */}

          <PaginatedItems />
        </div>
        <div className="col-span-4 lg:block hidden  mt-14 z-0 ">
          <Map />
        </div>
      </div>
    </>
  );
}

export default EstateList;
