import { useState } from "react";
import Filter from "./_components/Filter";
import Map from "../../components/map/map";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../filterContext/FilterContext";
import { estateDummyData } from "../../const/const";
import PaginatedItems from "./_components/Paginate";
import SortSelect from "./_components/SortSelect";
import { Collapse } from "react-collapse";

function EstateList() {
  const navigate = useNavigate();
  const { searchParams } = useFilterContext();
  const [offSet, setOffset] = useState<number>(0);
  const [showFilter, setShowFilters] = useState(true);

  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-12 w-full  h-full gap-14 relative mt-10 ">
        {/* <div className="mt-12 z-0 lg:hidden md:hidden block col-span-8">
          <Map heigth={600} />
        </div> */}

        <div className="lg:col-span-8 flex flex-col gap-4  w-full ">
          <div className=" w-full flex flex-col items-start gap-2 ">
            <h1 className="font-semibold text-xl ">
              Properties for rent or buy in Poland
            </h1>

            <small className="text-slate-500">
              {offSet === 0 ? "1-6 of" : "6-10"} {estateDummyData.length}{" "}
              properties
            </small>

            <div className="flex border-b border-neutral-200 w-full items-center gap-1  pt-3 justify-between">
              <div className="flex">
                <button
                  onClick={() => {
                    setShowFilters(!showFilter);
                  }}
                  className={`${
                    showFilter ? "border-b-2 border-teal-500" : ""
                  }  p-2 flex items-center gap-1 opacity-80`}
                >
                  {" "}
                  <img
                    src={"/assets/filters.svg"}
                    alt="apartment"
                    className="h-4 w-4"
                  />
                  Filters
                </button>

                <button
                  onClick={() => {
                    navigate(
                      `/map?minPrice=${searchParams.get(
                        "minPrice"
                      )}&maxPrice=${searchParams.get(
                        "maxPrice"
                      )}&bathroom=${searchParams.get(
                        "bathroom"
                      )}&bedroom=${searchParams.get(
                        "bedroom"
                      )}&type=${searchParams.get("type")}`
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
              <div className="flex items-center gap-2">
                <SortSelect />
              </div>
            </div>
          </div>

          <Collapse isOpened={showFilter}>
            <Filter />
          </Collapse>

          <PaginatedItems setOffsetData={setOffset} />
        </div>
        <div className="">
          <div className="col-span-4 lg:block sticky top-4 hidden w-[400px] mt-14 z-0 shadow-xl">
            <Map heigth={700} />
          </div>
        </div>
      </div>
    </>
  );
}

export default EstateList;
