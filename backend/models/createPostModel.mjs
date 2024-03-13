import mongoose from "mongoose";

const postModel = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,

    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAtDate: {
    type: Date,
  },
});

export default mongoose.model("post", postModel);
