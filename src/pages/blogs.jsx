import { Link, useLoaderData } from "react-router-dom";

import { getBlogList } from "../apis";

const user = {
  name: "Sherlyne",
};

export async function loader() {
  const blogList = await getBlogList();
  return { blogList };
}

function Blogs() {
  const { blogList } = useLoaderData();

  const blogListWithRandomImage = blogList.map((blog) => ({
    ...blog,
    author: {
      ...blog.author,
      imageUrl: `https://robohash.org/${blog.id}.png?size=200x200`,
    },
  }));

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome {user.name},
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow as an individual with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogListWithRandomImage.map((blog) => (
              <article
                key={blog.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.datetime} className="text-gray-500">
                    {blog.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {blog.category.title}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to={`/blogs/${blog.id}`}>
                      <span className="absolute inset-0" />
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {blog.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt={blog.author.name}
                    src={blog.author.imageUrl}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {blog.author.name}
                    </p>
                    <p className="text-gray-600">{blog.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { Blogs };
