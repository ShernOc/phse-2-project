import { Outlet, useLoaderData } from "react-router-dom";

import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { App };
