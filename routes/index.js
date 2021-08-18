const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.homepage)

router.get('/user/getone/:id',userController.getOne)

router.get('/user/getall/',userController.getAll)

router.post('/user/createuser/',userController.register)

router.get('/user/daftar/',userController.daftar)

router.put('/user/updateOne/:id',userController.update)

router.delete('/user/deleteuser/:id',userController.delete)

router.post('/user/login', userController.login)

router.get('/user/whoami', userController.whoami) //belum lengkap

module.exports = router