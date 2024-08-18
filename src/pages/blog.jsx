import { useLoaderData } from "react-router-dom";

import { getBlog } from "../apis";

export async function loader({ params }) {
  const blog = await getBlog(params.blogId);
  return { blog };
}

function Blog() {
  const { blog } = useLoaderData();

  return (
    <>
      <header>
        <h1>{blog.title}</h1>
      </header>
    </>
  );
}

export { Blog };
