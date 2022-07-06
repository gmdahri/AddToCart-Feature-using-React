const booksService  = require('../service/books')

class booksController {
   async createBooks(req,res){
        try {
        const id = await booksService.createBooks(req.body)
        res.status(200).json(id)
        }
        catch(err){
            console.log(err)
            res.status(500).json("books Already Added")
        }
       

    }
    async getAllBooks(req,res){
        try {
        const books = await booksService.getAllBooks()
        res.status(200).json(books)
        }
        catch(err){
            console.log(err)
            res.status(500).json("No Books Found!")
        }
       

    }
    async updateBook(req,res){
        try {
        const books = await booksService.updateBooks(req.params.id,req.body)
        res.status(200).json(books)
        }
        catch(err){
            console.log(err)
            res.status(500).json("Error in updating!")
        }
       

    }
}

module.exports =new booksController();