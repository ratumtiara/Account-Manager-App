const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.homepage)

router.get('/user/getone/:id',userController.getOne)

router.get('/user/getall/',userController.getAll)

router.post('/user/createuser/',userController.register)

router.put('/user/updateOne/:id',userController.update)

router.delete('/user/deleteuser/:id',userController.delete)

module.exports = router