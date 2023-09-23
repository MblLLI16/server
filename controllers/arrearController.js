const {Arrears, Students, Loads} = require('../models/models')
const ApiError = require('../error/ApiError')

class ArrearController{
    async getAll(req, res){
        const arrear = await Arrears.findAll({ include: { all: true, nested: true } })
        return res.json(arrear)
    }
}

module.exports = new ArrearController()