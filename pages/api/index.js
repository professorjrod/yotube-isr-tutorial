import getBlogPosts from "get";

export default async (req, res) => {
  if (req.method === "GET") {
    console.log("GET REQUEST");
    const data = await getBlogPosts();
    req.status(200).json({ posts: data });
  }
};
