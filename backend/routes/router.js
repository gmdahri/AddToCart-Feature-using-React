
const express = require('express')
const studentController = require("../controller/student.js")
const router = express.Router()
router.post("/addStudent", studentController.createStudent)
router.get("/getAllStudents", studentController.getAllStudents)
router.put("/updateStudent/:id", studentController.updateStudent)


module.exports= router