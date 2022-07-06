// const booksDAO = require('../controller/books');
const booksDAO = require('../dao/books')
class bookService{
    createBooks(booksDTO){
        return booksDAO.createBooks(booksDTO)

    }
    getAllBooks(){
        return booksDAO.getBooks()
    }
    updateBooks(bookID,book){
        return booksDAO.updateBooks(bookID,book)
    }
}

module.exports =new bookService();