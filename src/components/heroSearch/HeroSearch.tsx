import { useState } from "react";
import SearchButton from "./SearchButton";
import { searchButtonTypes } from "../../const/const";
import { useNavigate } from "react-router-dom";
import { useFilterContext } from "../../filterContext/FilterContext";

export type searchOptions = "Buy" | "Rent" | "Adress";

function HeroSearch({
  setShowFilters,
  showFilter,
}: {
  setShowFilters: () => void;
  showFilter: boolean;
}) {
  const navigate = useNavigate();
  const [searchOption, setSearchOption] = useState<searchOptions>("Buy");
  const { searchParams } = useFilterContext();

  return (
    <div className="bg-white text-black max-w-[700px] mx-auto h-[110px] flex flex-col justify-center items-start rounded-xl">
      <div className="flex flex-col p-2 w-full gap-2">
        <div className="flex font-medium">
          {searchButtonTypes.map((button, i) => {
            return (
              <SearchButton
                key={i}
                type={button}
                searchType={searchOption}
                setSearchOption={setSearchOption}
              >
                {button}
              </SearchButton>
            );
          })}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center hover:bg-slate-50 w-full rounded-lg p-3 gap-2 group mr-10">
            <img
              src="/assets/search.svg"
              alt="search"
              className="h-3 w-3 opacity-60"
            />
            <input
              className="outline-none group-hover:bg-slate-50 w-full"
              placeholder="Search postcode or state..."
            />
          </div>
          <div className="md:flex gap-2 hidden min-w-[250px]">
            <button
              onClick={setShowFilters}
              className="p-2 pl-5 hover:border-slate-700 pr-5 text-md flex justify-center items-center gap-2 text-black border border-slate-400 font-medium rounded-3xl"
            >
              <img
                src="/assets/filters.svg"
                alt="search"
                className="h-4 w-4 mt-[1px]"
              />
              {!showFilter ? "Show Filters" : "Close Filters"}
            </button>
            <button
              onClick={() => {
                navigate(
                  `/list?minPrice=${searchParams.get(
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
              className="p-2 pl-5 hover:bg-teal-700 transition-all pr-5 text-md bg-teal-500 text-white font-semibold rounded-3xl"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;
