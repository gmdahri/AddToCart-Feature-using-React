const db = require("../db/db")

class studentDAO {
    async createStudent(firstName, lastName) {
        const [id] = await db('student').insert({
            first_name: firstName,
            last_name: lastName
        }).returning('sid')

        return id
    }
    async getStudents(){
        const ob = await db.select('*').from('student').then(rows=>rows)
        // const ob = await db('books').join('student', {'student.sid':'books.borrowed_by'}).then(rows=>rows)
        

        return ob
    }
    async updateStudents(studentID, student){
        const upddateStudent = await db('student').where({sid:studentID}).update(student).then(rows=>rows)
        return upddateStudent
    }
}

module.exports = new studentDAO()