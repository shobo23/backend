const Express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = Express();
const port = process.env.Port2;

app.use(Express.json());

mongoose
  .connect("mongodb://localhost:27017/books")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publish_year: Number,
  genre: String,
  available: Boolean,
});

const bookModel = mongoose.model("books", bookSchema);

// create book
app.post("/books", async (req, res) => {
  try {
    const { title, author, publish_year, genre, available } = req.body;
    if (req.body) {
      const book = await bookModel.create({
        title,
        author,
        publish_year,
        genre,
        available,
      });
      res.status(201).json({ status: true, book });
    } else {
      res.status(500).json({ massage: "all fields are required!" });
    }
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
});

// read all books
app.get("/books", async (req, res) => {
  try {
    const getAllBooks = await bookModel.find();
    res.status(200).json({ status: true, getAllBooks });
  } catch (error) {
    res.status(500).json({ status: false, error: error });
  }
});

// Show 1 book
app.get("/books/:id", async (req, res) => {
  try {
    const getABook = await bookModel.findById(req.params.id);
    if (!getABook) {
      res.status(404).json({ status: false, message: "book not found" });
    }
    res.status(200).json({ status: true, getABook });
  } catch (error) {
    res.status(500).json({ status: false, error: error });
  }
});

// update book details
app.patch("/books/:id", async (req, res) => {
  try {
    const { title, author, publish_year, genre, available } = req.body;
    const updateBook = await bookModel.findByIdAndUpdate(req.params.id, {
      title,
      author,
      publish_year,
      genre,
      available,
    }, {new:true});
    if (!updateBook) {
        res.status(404).json({message: "book does not exist"})
    }
    res.status(200).json({status: true, book: updateBook})
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
});

// remove a book
app.delete("/books/:id", async (req, res) => {
    try {
      const deleteABook = await bookModel.findByIdAndDelete(req.params.id);
      if (!deleteABook) {
        res.status(404).json({ status: false, message: "book not found" });
      }
      res.status(200).json({ status: true, message: "book deleted" });
    } catch (error) {
      res.status(500).json({ status: false, error: error });
    }
  });

// toggle the book’s availability status
app.patch("/books/:id/toggle-availability", async (req, res) => {
    try {
        // Find the book
        const book = await bookModel.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        // Toggle availability
        book.available = !book.available;

        // Save the updated book
        await book.save();

        res.json({ message: "Book availability toggled", book });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


// delete all books
app.all("/books/delete-all", async (req, res) => {
    try {
      await bookModel.deleteMany();
  
      res.status(404).json({
        status: true,
        message: "all books deleted",
      });
    } catch (error) {
      res.status(500).json({ status: false, error: error.message });
    }
  });
// router error handler
app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    message: "Endpoint does not exist, check url!",
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
