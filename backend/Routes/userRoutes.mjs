import express from "express";
import { signup, login } from "../controller/userController.mjs";
import { uploadImage, getImage } from "../controller/imageController.mjs";
import upload from "../utils/upload.mjs";
import createPost from "../controller/postController.mjs";
import authenticate from "../utils/jwtAuthenticate.mjs";
//******************** */

const Routes = express.Router();

Routes.route("/signup").post(signup); //api for signup
Routes.route("/login").post(login); //api for login
Routes.route("/file/upload").post(upload.single("file"), uploadImage);
Routes.route("/file/:filename").get(getImage);
Routes.route("/create").post(authenticate, createPost);
export default Routes;
