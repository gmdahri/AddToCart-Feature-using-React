const db = require('../db/db')
class booksDAO {
   async createBooks(booksDTO){
        const {author, bookname, borrowedBy,dateOfBorrow,dateOfReturn} = booksDTO;
        const [id] = await db('books').insert({
            // ...booksDTO
            book_name:bookname,
            author:author,
            borrowed_by:borrowedBy,
            date_of_borrow:dateOfBorrow,
            date_of_return:dateOfReturn,
        }).returning('id')

        return id
    }
    async getBooks(){
        // const ob = await db.select('*').from('books').then(rows=>rows)
        const ob = await db('books').join('student', {'student.sid':'books.borrowed_by'}).then(rows=>rows)
        

        return ob
    }
    async updateBooks(bookID, book){
        const updatedBook = await db('books').where({id:bookID}).update(book).then(rows=>rows)
        return updatedBook
    }
}

module.exports =new booksDAO();