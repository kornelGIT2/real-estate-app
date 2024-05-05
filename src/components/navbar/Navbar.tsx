import { useEffect, useState } from "react";
import { LeftNavRoutes, RightNavRoutes } from "../../const/const";
import { Link } from "react-router-dom";

function Navbar() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [header]);

  return (
    <nav
      className={`md:flex hidden justify-between  items-center w-full max-w-[1360px] mx-auto font-semibold  ${
        header ? "" : ""
      }`}
    >
      {" "}
      <div className="">
        <ul className="flex space-x-10 justify-center items-center">
          <li className="font-bold text-2xl hover:cursor-default">
            Real<span className="text-teal-500">Estate</span>
          </li>
          {LeftNavRoutes.map((route, i) => {
            return (
              <li className="cursor-pointer hover:opacity-80" key={i}>
                <Link to={route.route === "Browse Properties" ? "/list" : "/"}>
                  {route.route}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <ul className="flex space-x-10 items-center justify-center">
          {RightNavRoutes.map((route, i) => {
            return (
              <li
                key={i}
                className={`${
                  route.route === "Join"
                    ? "bg-teal-500 text-white rounded-lg p-2 pl-6 pr-6 hover:bg-teal-600"
                    : "hover:opacity-80"
                } cursor-pointer`}
              >
                {route.route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
