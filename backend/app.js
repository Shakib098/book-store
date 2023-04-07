const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const cors = require("cors")
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use("/books", router) // localhost:5000/books

mongoose.connect("mongodb+srv://shakib:8Rn7PzHEDKsZDCVX@cluster0.uyrmsgt.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err))

//8Rn7PzHEDKsZDCVX