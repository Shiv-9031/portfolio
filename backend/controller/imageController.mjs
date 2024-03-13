import mongoose from "mongoose";
import grid from "gridfs-stream";

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});
export const uploadImage = (req, res) => {
  const baseUrl = "http://localhost:4000/api/v1";

  if (!req.file) {
    return res.status(404).json({
      message: "file not found",
    });
  }

  const ImageUrl = `${baseUrl}/file/${req.file.filename}`;

  return res.status(200).json({
    ImageUrl,
  });
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });

    const readStream = await gridfsBucket.openDownloadStream(file._id);

    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
