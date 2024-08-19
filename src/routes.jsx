import { App } from "./App";
import {
  Blogs,
  Error,
  Landing,
  Register,
  SignIn,
  Support,
  Blog,
} from "./pages";
import { loader as homeLoader } from "./pages/blogs";
import { loader as blogLoader } from "./pages/blog";
import { ProtectedRoute } from "./components";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/blogs",
        element: (
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        ),
        loader: homeLoader,
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
      {
        path: "/blogs/:blogId",
        element: (
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        ),
        loader: blogLoader,
      },
    ],
  },
];

export { routes };
