const {Events, Students} = require('../models/models')
const ApiError = require('../error/ApiError')

class EventController{
    async create(req, res, next){
        try{
            let {name, date, place, responsible, note, studentId} = req.body
            const event = await Events.create({name, date, place, responsible, note, studentId})
            return res.json(event)  
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const event = await Events.findAll({ include: Students })
        return res.json(event)
    }
}

module.exports = new EventController()