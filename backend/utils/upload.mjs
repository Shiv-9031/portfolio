import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

const storage = new GridFsStorage({
  url: process.env.DB_CONN,
  options: { useUnifiedTopology: true },
  file: (req, file) => {
    try {
      const match = ["image/png", "image/jpg"];

      if (match.indexOf(file.mimeType) === -1) {
        return `${Date.now()}blog${file.originalname}`;
      }

      return {
        bucketName: "photo",
        filename: `${Date.now()}blog${file.originalname}`,
      };
    } catch (error) {
      console.log(error);
    }
  },
});

export default multer({ storage });
