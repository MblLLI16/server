const {Grades, Students, Loads} = require('../models/models')
const ApiError = require('../error/ApiError')

class GradeController{
    async getAll(req, res){
        const grade = await Grades.findAll({ include: { all: true, nested: true } })
        return res.json(grade)
    }
}

module.exports = new GradeController()