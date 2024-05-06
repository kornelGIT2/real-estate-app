import { useFilterContext } from "../../../filterContext/FilterContext";

function SortSelect() {
  const { setSearchParams, searchParams } = useFilterContext();

  return (
    <div>
      <select
        onChange={(e) => {
          setSearchParams(
            {
              maxPrice: searchParams.get("maxPrice"),
              minPrice: searchParams.get("minPrice"),
              bedroom: searchParams.get("bedroom"),
              bathroom: searchParams.get("bathroom"),
              type: searchParams.get("type"),
              activeSort: e.target.value,
            },
            { replace: true }
          );
        }}
        className={`
         border-b-2 border-teal-500
         p-2 flex items-center gap-1 opacity-80 font-semibold `}
      >
        <option>Featured</option>
        <option>Date (Newest - Oldest)</option>
        <option>Date (Oldest - Newest)</option>
        <option>Price (Lowest - Highest)</option>
        <option>Price (Highest - Lowest)</option>
      </select>
    </div>
  );
}

export default SortSelect;
