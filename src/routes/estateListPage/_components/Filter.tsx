import { useEffect, useState } from "react";
import { filterOptions } from "../../../const/const";
import Select from "./FilterSelect";
import { useFilterContext } from "../../../filterContext/FilterContext";

function Filter() {
  const { searchParams, setSearchParams } = useFilterContext();
  const [maxPrice, setMaxPrice] = useState(
    parseInt(searchParams.get("maxPrice"))
  );
  const [minPrice, setMinPrice] = useState(
    parseInt(searchParams.get("minPrice"))
  );
  const [bedroom, setBedroom] = useState(parseInt(searchParams.get("bedroom")));
  const [bathroom, setBathroom] = useState(
    parseInt(searchParams.get("bathroom"))
  );
  const [activeSort, setActiveSort] = useState(searchParams.get("activeSort"));

  const [type, setType] = useState<string>(searchParams.get("type"));

  useEffect(() => {
    setMaxPrice(parseInt(searchParams.get("maxPrice")));
    setMinPrice(parseInt(searchParams.get("minPrice")));
    setBedroom(parseInt(searchParams.get("bedroom")));
    setBathroom(parseInt(searchParams.get("bathroom")));
    setActiveSort(searchParams.get("activeSort"));
    setType(searchParams.get("type"));
  }, [searchParams]);

  const filter = () => {
    setSearchParams(
      {
        maxPrice: maxPrice,
        minPrice: minPrice,
        bathroom: bathroom,
        bedroom: bedroom,
        type: type,
        activeSort: activeSort === null ? "Featured" : activeSort,
      },
      { replace: true }
    );
  };

  return (
    <div className=" bg-neutral-50 rounded-2xl p-6">
      <ul className="flex md:flex-row flex-col gap-4 items-center justify-between">
        {filterOptions.map((option, i) => {
          return (
            <li key={i} className="md:flex flex-col items-start hidden">
              <Select {...option} selected={type} onSelect={setType} />{" "}
            </li>
          );
        })}
        <li className="flex flex-col items-start">
          <label
            htmlFor="small"
            className="block mb-2 text-sm font-medium text-slate-700 "
          >
            Min Price
          </label>
          <input
            className=" block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Min Price"
            type="number"
            value={minPrice}
            min="0"
            onChange={(e: any) => {
              setMinPrice(e.target.value);
            }}
          />
        </li>
        <li className="flex flex-col items-start">
          <label
            htmlFor="small"
            className="block mb-2 text-sm font-medium text-slate-700 "
          >
            Max Price
          </label>
          <input
            className=" block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Max Price"
            type="number"
            value={maxPrice}
            min="0"
            onChange={(e: any) => {
              setMaxPrice(e.target.value);
            }}
          />
        </li>
        <li className="flex flex-col items-start">
          <label
            htmlFor="small"
            className="block mb-2 text-sm font-medium text-slate-700 "
          >
            Bedroom
          </label>
          <input
            className=" block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Bedroom"
            type="number"
            value={bedroom}
            onChange={(e: any) => {
              setBedroom(e.target.value);
            }}
          />
        </li>
        <li className="flex flex-col items-start">
          <label
            htmlFor="small"
            className="block mb-2 text-sm font-medium text-slate-700 "
          >
            Bathroom
          </label>
          <input
            className=" block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Bathroom"
            type="number"
            value={bathroom}
            onChange={(e: any) => {
              setBathroom(e.target.value);
            }}
          />
        </li>
        <div className="flex items-center justify-center gap-2 mt-4">
          {filterOptions.map((option, i) => {
            return (
              <li key={i} className="md:hidden flex-col items-start flex">
                <Select {...option} selected={type} onSelect={setType} />{" "}
              </li>
            );
          })}

          <button
            onClick={filter}
            className=" md:mt-0 md:min-w-[50px] min-w-[150px]"
          >
            <li className="flex flex-col md:ml-3 items-center justify-center bg-teal-500 hover:bg-teal-600 shadow-md md:w-full md:p-3 p-2 rounded-2xl cursor-pointer">
              <img
                src="/assets/search.svg"
                alt="hero-image"
                className="h-7 w-7 object-cover rounded-lg  invert hidden md:block"
              />
              <span className="md:hidden font-semibold text-white">Search</span>
            </li>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Filter;
