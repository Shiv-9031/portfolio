import userModels from "../models/userModels.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const user = await new userModels({ ...req.body, password: hashPassword });
    await user.save();

    return res.status(201).json({
      success: true,
      message: "signup complete",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const isUser = await userModels.findOne({ username: req.body.userName });

    if (!isUser) {
      return res.status(200).json({
        success: true,
        message: "Either username or password is wrong",
      });
    }
    if (!(await bcrypt.compare(req.body.password, isUser.password))) {
      return res.status(200).json({
        success: true,
        message: "Either username or password is wrong",
      });
    }
    const token = jwt.sign({ id: isUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      token,
      isUser,
    });
  } catch (errors) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }
};
