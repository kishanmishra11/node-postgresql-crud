const {Router} = require('express')
const controller = require('../controller/controller')
const router = Router();

router.get('/',controller.getStudents);
router.get('/:id',controller.getStudentById);
router.post('/',controller.addStudent);
router.post('/:id',controller.updateStudentById);
router.post('/:id',controller.deleteStudentById);

module.exports = router;