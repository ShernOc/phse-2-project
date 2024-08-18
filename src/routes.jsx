import { App } from "./App";
import { Error, Home, Landing, Login, Register, Support } from "./pages";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
    errorElement: <Error />,
  },
];

export { routes };
