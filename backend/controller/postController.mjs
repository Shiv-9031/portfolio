import Post from "../models/createPostModel.mjs";

async function createPost(req, res) {
  try {
    const post = await Post({ ...req.body });
    if (post) {
      await post.save();
      return res.status(201).json({
        message: "post has been created",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
}

export default createPost;
