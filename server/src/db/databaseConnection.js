import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const databaseConnection = async (req, res) => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(response.connection.host);
  } catch (error) {
    console.log("Error connecting to the Database: ", error);
    process.exit(1);
  }
};

export default databaseConnection;
