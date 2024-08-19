import { Outlet } from "react-router-dom";

import { analytics } from "./firebase";
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
