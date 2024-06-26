import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { FilterProvider } from "../../filterContext/FilterContext";

function Layout() {
  return (
    <main className="flex flex-col items-center max-w-[1300px] mx-auto p-[1rem]">
      <FilterProvider>
        <Navbar />
        <Outlet />
      </FilterProvider>
    </main>
  );
}

export default Layout;
