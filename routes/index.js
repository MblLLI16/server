const Router = require('express')
const router = new Router()
const arrearRouter = require('./arrearRouter')
const disciplineRouter = require('./disciplineRouter')
const eventRouter = require('./eventRouter')
const gradeRouter = require('./gradeRouter')
const groupRouter = require('./groupRouter')
const meetingRouter = require('./meetingRouter')
const studentRouter = require('./studentRouter')
const teacherRouter = require('./teacherRouter')
const loadRouter = require('./loadRouter')

router.use('/arrears', arrearRouter)
router.use('/disciplines', disciplineRouter)
router.use('/events', eventRouter)
router.use('/grades', gradeRouter)
router.use('/groups', groupRouter)
router.use('/loads', loadRouter)
router.use('/meetings', meetingRouter)
router.use('/students', studentRouter)
router.use('/teachers', teacherRouter)

module.exports = router