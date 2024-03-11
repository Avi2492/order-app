import * as dotenv from "dotenv";
import databaseConnection from "./db/databaseConnection.js";
import { app } from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

databaseConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection error: ", error);
  });

app.get("/", (req, res) => {
  res.send("API is running");
});
