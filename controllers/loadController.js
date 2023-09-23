const {Loads, Groups, Teachers, Disciplines} = require('../models/models')
const ApiError = require('../error/ApiError')

class LoadController{
    async getAll(req, res){
        const load = await Loads.findAll({ include: { all: true, nested: true } })
        return res.json(load)
    }
}

module.exports = new LoadController()