import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "token hasn't been passed" });
  }
  console.log(token);
  console.log(process.env.SECRET_KEY);
  jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
    if (error) {
      return res.status(401).json({ message: "token is not valid" });
    }
    req.user = user;
    next();
  });
}

export default authenticate;
