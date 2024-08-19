import { Link } from "react-router-dom";

import { useCurrentPath } from "../hooks";
import { logOut } from "../auth";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const currentPath = useCurrentPath();
  const { currentUser } = useAuth();

  return (
    <header className="absolute top-0 left-0 right-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link
            to={currentUser ? "/blogs" : "/"}
            className="-m-1.5 p-1.5 text-4xl font-extrabold text-indigo-600 tracking-wide uppercase shadow-lg"
          >
            <span className="sr-only">Feed Art Blog</span>
            FAB
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-4">
          {!currentPath.includes("sign-in") && (
            <Link
              to="/blogs"
              className="text-sm font-semibold leading-6 text-gray-900 outline outline-1 rounded-md px-4 py-2 hover:bg-gray-900 hover:text-white transition duration-300"
            >
              Blogs
            </Link>
          )}
          {currentPath !== "/sign-in" &&
            currentPath !== "/home" &&
            !currentPath.includes("blog") && (
              <Link
                to="/sign-in"
                className="text-sm font-semibold leading-6 text-gray-900 outline outline-1 rounded-md px-4 py-2 hover:bg-gray-900 hover:text-white transition duration-300"
              >
                Sign in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          {currentUser && (
            <button
              onClick={logOut}
              className="text-sm font-semibold leading-6 text-gray-900 outline outline-1 rounded-md px-4 py-2 hover:bg-gray-900 hover:text-white transition duration-300"
            >
              Log out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export { Header };
