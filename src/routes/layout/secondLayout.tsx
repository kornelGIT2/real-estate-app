import Navbar from "../estateListPage/_components/Navbar";
import { Outlet } from "react-router-dom";
import { FilterProvider } from "../../filterContext/FilterContext";

function SecondLayout() {
  return (
    <main className="flex flex-col items-center">
      <FilterProvider>
        <Navbar />
        <Outlet />
      </FilterProvider>
    </main>
  );
}

export default SecondLayout;
