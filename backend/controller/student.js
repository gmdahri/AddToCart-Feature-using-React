const studentService = require('../service/student')

class studentController {
    async createStudent(req, res) {
        try {
            const id = await studentService.createStudent(req.body)
            res.status(201).json(id)

        } catch (error) {
            console.log(error)
            res.status(501).json("Already Entered")
        }

    }
    async getAllStudents(req, res) {
        try {
            const Students = await studentService.getAllStudents()
            res.status(200).json(Students)
        }
        catch (err) {
            console.log(err)
            res.status(500).json("No Students Found!")
        }


    }
    async updateStudent(req, res) {
        try {
            console.log("req params", req.params, req.body)
            const Students = await studentService.updateStudents(req.params.id, req.body)
            res.status(200).json(Students)
        }
        catch (err) {
            console.log(err)
            res.status(500).json("Error in updating!")
        }

    }
}


module.exports = new studentController()