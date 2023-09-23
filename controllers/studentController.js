const {Students, Groups} = require('../models/models')
const ApiError = require('../error/ApiError')

class StudentController{
    async getAll(req, res){
        let {groupId} = req.query
        let students;
        if (groupId){
            students = await Students.findAll({where:{groupId}})
        }
        if (!groupId){
            students = await Students.findAll({ include: { all: true, nested: true }})
        }
        return res.json(students)  
    }
}

module.exports = new StudentController()