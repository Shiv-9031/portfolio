import mongoose from "mongoose";

const dbConn = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_CONN);
    console.log("database is connected");
  } catch (error) {
    console.error(error);
  }
};

export default dbConn;
