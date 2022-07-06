
const express = require('express')
const booksController = require("../controller/books")
const booksRouter = express.Router()
booksRouter.post("/addBooks", booksController.createBooks)
booksRouter.get('/getAllBooks', booksController.getAllBooks)
booksRouter.put('/updatebook/:id', booksController.updateBook)

module.exports= booksRouter