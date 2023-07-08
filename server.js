import app from "./app.js";
import { connectDB } from "./config/database.js";

// Start the server
app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`server is working on port: ${process.env.PORT}`);
});
