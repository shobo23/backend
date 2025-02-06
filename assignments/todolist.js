const Express = require("express");
const app = Express();
const port = 1999;
const task = [];
app.use(Express.json())

// create task
app.post("/", (req, res) => {
  const { title, date, description } = req.body;

  const isDateTaken = task.findIndex((e) => e.date === date)
  const doesTitleExisit = task.findIndex((e) => e.title === title)
  if (isDateTaken === -1 && doesTitleExisit === -1) {
    
  } else {
    res.status(409).json({
        message: 'Task Already Exist For Today'
    })
  }
  task.push({
    id: task.length + 1,
    title,
    date,
    description,
  });
  res.status(200).json({
    alert: 'task created',
    task: {title,
        date,
        description,}
  })
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.status(200).json(task);
});
