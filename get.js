const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const getBlogPosts = async () => {
  const client = new MongoClient(uri);

  await client.connect();

  const database = client.db("blogposts");
  const collection = database.collection("blogposts");

  const blogPosts = await collection.find({}).toArray();

  const jsonValidBlogPosts = blogPosts.map((post) => ({
    ...post,
    _id: post._id.toString(),
  }));

  return jsonValidBlogPosts;
};

export default getBlogPosts;
