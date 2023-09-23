const Router = require('express')
const router = new Router()
const loadController = require('../controllers/loadController')

router.get('/', loadController.getAll)

module.exports = router