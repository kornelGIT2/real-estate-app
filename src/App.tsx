import "./App.css";
import EstateList from "./routes/estateListPage/estateListPage";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import Home from "./routes/home/home";
import Map from "./components/map/map";
import SecondLayout from "./routes/layout/secondLayout";

function App() {
  const router = Router([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/list",
      element: <SecondLayout />,
      children: [{ path: "/list", element: <EstateList /> }],
    },
    {
      path: "/map",
      element: <SecondLayout />,
      children: [{ path: "/map", element: <Map /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
