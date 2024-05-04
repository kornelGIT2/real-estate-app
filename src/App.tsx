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
import Footer from "./components/footer/Footer";
import PropertyDetails from "./routes/propertyDetails/propertyDetails";
import MapLayout from "./routes/layout/mapLayout";

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
      element: <MapLayout />,
      children: [{ path: "/map", element: <Map heigth={1000} /> }],
    },
    {
      path: "/property/:id",
      element: <SecondLayout />,
      children: [{ path: "/property/:id", element: <PropertyDetails /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
