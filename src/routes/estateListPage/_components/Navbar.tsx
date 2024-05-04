import { RightNavRoutes } from "../../../const/const";
import { useLocation, useNavigate } from "react-router-dom";
import Filter from "./Filter";
import { useFilterContext } from "../../../filterContext/FilterContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const { searchParams } = useFilterContext();

  return (
    <nav className=" w-full mb-4 bg-neutral-50 border-b-2 border-neutral-100">
      <div className="max-w-[1300px] mx-auto">
        <div className=" border-b   p-8  border-neutral-200 flex justify-between">
          <h1
            className="font-semibold text-3xl hover:cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Real<span className="text-teal-500">Estate</span>
          </h1>
          <ul className="flex gap-8 items-center">
            {RightNavRoutes.map((route, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    route.route === "Join"
                      ? "bg-teal-500 text-white rounded-lg p-2 pl-6 pr-6"
                      : ""
                  } font-medium`}
                >
                  {route.route}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" p-4  items-center  flex justify-between gap-4">
          <div>
            <button className="text-blue-800 opacity-80 hover:underline">
              Back to results
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                if (pathname === "/map") {
                  navigate(
                    `/list?minPrice=${searchParams.get(
                      "minPrice"
                    )}&maxPrice=${searchParams.get("maxPrice")}`
                  );
                } else {
                  navigate(
                    `/map?minPrice=${searchParams.get(
                      "minPrice"
                    )}&maxPrice=${searchParams.get("maxPrice")}`
                  );
                }
              }}
              className="p-2 pl-5 hover:border-slate-700 pr-5 text-md flex justify-center items-center gap-2 text-black border border-slate-400 font-medium rounded-3xl"
            >
              <img
                src="/assets/map.svg"
                alt="search"
                className="h-4 w-4 mt-[1px]"
              />
              {pathname === "/map" ? "Close Map" : "Open Map"}
            </button>

            <button className="p-2 pl-5 hover:border-slate-700 pr-5 text-md flex justify-center items-center gap-2 text-black border border-slate-400 font-medium rounded-3xl">
              <img
                src="/assets/filters.svg"
                alt="search"
                className="h-4 w-4 mt-[1px]"
              />
              Filters
            </button>
          </div>
        </div>
        <div className={`${pathname === "/map" ? "block" : "hidden"} mt-4`}>
          <Filter />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
