import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;
