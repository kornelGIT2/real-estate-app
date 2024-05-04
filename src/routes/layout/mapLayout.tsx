import Navbar from "../estateListPage/_components/Navbar";
import { Outlet } from "react-router-dom";
import { FilterProvider } from "../../filterContext/FilterContext";

function MapLayout() {
  return (
    <main className="flex flex-col items-center ">
      <FilterProvider>
        <Navbar />

        <Outlet />
      </FilterProvider>
    </main>
  );
}

export default MapLayout;
