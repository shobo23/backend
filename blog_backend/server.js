const express = require("express");
const ConnectDb = require("./Config/blogDB");
const { route } = require("./Routes/blogRoutes");
const app = express();
app.use(express.json());
require("dotenv/config");

const { PORT1 } = process.env;
const Port = PORT1;

ConnectDb()

app.use('/api', route)

app.listen(Port, () => {
  console.log((new Date().toLocaleDateString()), Port);
});
