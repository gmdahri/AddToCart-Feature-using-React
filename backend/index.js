const express = require("express")
const router = require('./routes/router')
const bookRouter = require('./routes/books');
const books = require("./controller/books");
const app = express();
const cors = require('cors');
app.use(cors({origin:"*"}));
app.use(express.json())
app.use(router)
app.use(bookRouter)


app.listen(8080, ()=>console.log("Server listening on part 8080"))