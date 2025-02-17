const Express = require("express");
const database = require("./config/database");
const userRoute = require("./routes/userRoute");
require("dotenv/config");

const { PORT1 } = process.env;

const port = PORT1;
database();
const app = Express();
app.use(Express.json())
app.use("/api", userRoute);

app.listen(port, () => {
  console.log(new Date().toLocaleDateString(), port);
});
