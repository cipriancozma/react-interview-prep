import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Contact from "./Contact";
import Data, { dataLoader } from "./Data";
import Home from "./Home";

function ExtraChallenge() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data" element={<Data />} loader={dataLoader} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default ExtraChallenge;

const Root = () => {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/data"}>Data</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
