import { App } from "./App";
import { Error, Home, Landing, Register, SignIn, Support } from "./pages";

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
        path: "/sign-in",
        element: <SignIn />,
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
