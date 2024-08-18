import { Outlet, useLoaderData } from "react-router-dom";

import { Header } from "./components";
import { getBlogList } from "./apis";

export async function loader() {
  const blogList = await getBlogList();
  return { blogList };
}

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { App };
