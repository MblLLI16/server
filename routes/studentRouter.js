const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')

router.get('/', studentController.getAll)

module.exports = router