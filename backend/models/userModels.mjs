import mongoose from "mongoose";

export const user = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    username: {
      type: String,
      required: [true, "please enter your username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", user);
