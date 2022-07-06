const studentDAO = require('../dao/student')

class studentService{
    createStudent(reqBody){
        const {firstName, lastName} = reqBody
        console.log(firstName,lastName)
       return studentDAO.createStudent(firstName, lastName)

    }
    getAllStudents(){
        return studentDAO.getStudents()
    }
    updateStudents(StudentID,Student){
        return studentDAO.updateStudents(StudentID,Student)
    }
}

module.exports = new studentService()