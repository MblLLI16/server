const {Meetings} = require('../models/models')
const ApiError = require('../error/ApiError')

class MeetingController{
    async create(req, res, next){
        try{
            let {reason, result, studentId} = req.body
            const meeting = await Meetings.create({reason, result, studentId})
            return res.json(meeting)  
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res){
        const meeting = await Meetings.findAll({ include: { all: true, nested: true }})
        return res.json(meeting)
    }
}

module.exports = new MeetingController()