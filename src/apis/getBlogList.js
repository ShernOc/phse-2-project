const getBlogList = async () => {
  const apiUrl = import.meta.env.VITE_BLOGS_API_URL;
  const endpoint = "blogs";

  if (!apiUrl) {
    throw new Error("VITE_BLOG_API_URL is null or undefined");
  }

  const res = await fetch(`${apiUrl}/${endpoint}`).catch((error) => {
    throw new Error(`Error fetching API: ${error}`);
  });

  if (!res || !res.ok) {
    throw new Error("Request not OK");
  }

  return res.json().catch((error) => {
    throw new Error(`Error parsing JSON: ${error}`);
  });
};

export { getBlogList };
