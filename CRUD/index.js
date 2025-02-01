const express = require("express");

const app = express();
const port = 2020;
app.use(express.json());

const users = [
  {
    fullName: "victor",
    lastName: "Musk",
    email: "sanni@gmail.com",
    password: "123456",
  },
  {
    fullName: "bola",
    lastName: "tola",
    email: "tola@gmail.com",
    password: "lorem",
  },
];

app.get("/", (req, res) => {
  res.status(200).json(users);
});

app.post("/create-user", (req, res) => {
  const { fullName, lastName, password, email } = req.body;
  const findUser = users.findIndex((e) => e.email === email);

  if (findUser < -1) {
    if (fullName && lastName && password && email) {
      users.push(req.body);
      res.status(200).json({ message: "user created successfully" });
    } else {
      res.status(400).json({ message: "Details is Required" });
    }
  } else {
    res.status(401).json({ message: "Account already Exist" });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route Does Not exist" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// CRUD
// POST method
// GET method
// PATCH method
// PUT method
// DELETE method
