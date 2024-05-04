import Navbar from "../estateListPage/_components/Navbar";
import { Outlet } from "react-router-dom";
import { FilterProvider } from "../../filterContext/FilterContext";

function SecondLayout() {
  return (
    <main className="flex flex-col items-center ">
      <FilterProvider>
        <Navbar />
        <div className="max-w-[1500px] mx-auto p-[0.5rem]">
          <Outlet />
        </div>
      </FilterProvider>
    </main>
  );
}

export default SecondLayout;
