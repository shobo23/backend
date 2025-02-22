const Express = require("express");
const connectDb = require("./config/blogConfig");
const router = require("./routes/Routes");
require("dotenv/config");

const app = Express();
app.use(Express.json());
connectDb();
app.use("/api", router);

app.listen(process.env.process, () => {
  console.log(new Date().toLocaleDateString(), process.env.Port);
});
