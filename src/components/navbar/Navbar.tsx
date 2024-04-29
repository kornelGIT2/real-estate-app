import { LeftNavRoutes, RightNavRoutes } from "../../const/const";

function Navbar() {
  return (
    <nav className="flex justify-between  items-center  w-full font-semibold">
      {" "}
      <div className="">
        <ul className="flex space-x-10 justify-center items-center">
          <li className="font-bold text-xl">
            Real<span className="text-teal-500">Estate</span>
          </li>
          {LeftNavRoutes.map((route, i) => {
            return <li key={i}>{route.route}</li>;
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
                    ? "bg-teal-500 text-white rounded-lg p-2 pl-6 pr-6"
                    : ""
                }`}
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
