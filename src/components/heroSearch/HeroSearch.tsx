import { useState } from "react";
import SearchButton from "./SearchButton";
import { searchButtonTypes } from "../../const/const";

export type searchOptions = "Buy" | "Rent" | "Adress";

function HeroSearch() {
  const [searchOption, setSearchOption] = useState<searchOptions>("Buy");

  return (
    <div className="bg-white text-black max-w-[700px] mx-auto h-[110px] flex flex-col justify-center items-start rounded-xl">
      <div className="flex flex-col p-2 w-full gap-2">
        <div className="flex font-medium">
          {searchButtonTypes.map((button) => {
            return (
              <SearchButton
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
          <div className="flex justify-start items-center hover:bg-slate-50 rounded-lg p-3 gap-2 group ">
            <img
              src="/assets/search.svg"
              alt="search"
              className="h-3 w-3 opacity-60"
            />
            <input
              className="outline-none group-hover:bg-slate-50"
              placeholder="Search postcode or state..."
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 pl-4 hover:border-slate-700 pr-4 text-md flex justify-center items-center gap-2 text-black border border-slate-400 font-medium rounded-3xl">
              <img
                src="/assets/filters.svg"
                alt="search"
                className="h-4 w-4 mt-[1px]"
              />
              Filters
            </button>
            <button className="p-2 pl-4 hover:bg-teal-700 transition-all pr-4 text-md bg-teal-500 text-white font-semibold rounded-3xl">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;
