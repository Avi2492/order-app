import * as dotenv from "dotenv";
import databaseConnection from "./db/databaseConnection.js";

dotenv.config();

databaseConnection();
