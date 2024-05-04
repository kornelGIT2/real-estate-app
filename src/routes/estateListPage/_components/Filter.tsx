import { useEffect, useState } from "react";
import { filterOptions } from "../../../const/const";
import Select from "./Select";
import { useFilterContext } from "../../../filterContext/FilterContext";

function Filter() {
  const { searchParams, setSearchParams } = useFilterContext();
  const [maxPrice, setMaxPrice] = useState(
    parseInt(searchParams.get("maxPrice"))
  );
  const [minPrice, setMinPrice] = useState(
    parseInt(searchParams.get("minPrice"))
  );

  useEffect(() => {
    setMaxPrice(parseInt(searchParams.get("maxPrice")));
    setMinPrice(parseInt(searchParams.get("minPrice")));
  }, [searchParams]);

  const filter = () => {
    setSearchParams({
      maxPrice: maxPrice,
      minPrice: minPrice,
    });
  };

  return (
    <div className=" bg-neutral-50 rounded-2xl p-6">
      <ul className="flex gap-4 items-center justify-between ">
        {filterOptions.map((option, i) => {
          return (
            <li key={i}>
              <Select {...option} />{" "}
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
            className="max-w-[120px] block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Min Price"
            type="number"
            value={minPrice}
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
            className="max-w-[120px] block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Max Price"
            type="number"
            value={maxPrice}
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
            className="max-w-[120px] block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Bedroom"
            type="number"
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
            className="max-w-[120px] block w-full p-2  text-sm text-gray-900 border border-gray-300 rounded-xl"
            placeholder="Bathroom"
            type="number"
          />
        </li>
        <button onClick={filter}>
          <li className="flex flex-col ml-4 items-center justify-center bg-teal-500 hover:bg-teal-600 shadow-lg w-[60px] p-3 rounded-2xl cursor-pointer">
            <img
              src="/assets/search.svg"
              alt="hero-image"
              className="h-7 w-7 object-cover rounded-lg  invert"
            />
          </li>
        </button>
      </ul>
    </div>
  );
}

export default Filter;
