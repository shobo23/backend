const express = require("express");
const db = require("./config/db");
const router = require("./routes/taskManagerRoutes");
require("dotenv/config")


const app = express();
app.use(express.json());
db()
app.use("/api", router)

app.listen(process.env.PORT, () => {
  console.log(new Date().toLocaleDateString(), process.env.PORT);
});
