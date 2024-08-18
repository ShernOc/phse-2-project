import { useLoaderData } from "react-router-dom";

import { getBlog } from "../apis";

export async function loader({ params }) {
  const blog = await getBlog(params.blogId);
  return { blog };
}

function Blog() {
  const { blog } = useLoaderData();

  const blogWithImage = {
    ...blog,
    author: {
      ...blog.author,
      imageUrl: `https://robohash.org/${blog.id}.png?size=200x200`,
    },
  };

  return (
    <>
      <main className="mt-[88px] p-8 max-w-3xl mx-auto">
        <section className="text-center">
          {/* Heading */}
          <h1 className="text-5xl">{blogWithImage.title}</h1>
          {/* Author Info */}
          <div className="relative mt-8 flex items-center justify-center gap-x-4">
            <img
              alt={blogWithImage.author.name}
              src={blogWithImage.author.imageUrl}
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {blogWithImage.author.name}
              </p>
              <p className="text-gray-600">{blogWithImage.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 text-xs justify-center mt-8">
            <time dateTime={blog.datetime} className="text-gray-500">
              {blog.date}
            </time>
            {/* Blog publish date and category */}
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {blog.category.title}
            </span>
          </div>
        </section>
        {/* Blog post description */}
        <section className="py-12 text-lg">
          <p>{blog.description}</p>
        </section>
      </main>
    </>
  );
}

export { Blog };
