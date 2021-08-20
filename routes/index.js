const router = require('express').Router()
const userController = require('../controllers/userController')
const restrict = require('../middleware/restrict')

router.get('/', userController.homepage)

router.get('/user/getone/:id',userController.getOne)

router.get('/user/getall/',userController.getAll)

router.post('/user/createuser/',userController.register)

router.get('/user/daftar/',userController.daftar)

router.get('/user/successregister/', userController.successregister)

router.put('/user/updateOne/:id',userController.update)
router.get('/user/update/',userController.successupdate)

router.delete('/user/deleteuser/:id',userController.delete)
router.get('/user/delete/',userController.successdelete)

router.post('/user/login/', userController.login)

router.get('/user/masuk/', userController.masuk)

router.get('user/masuk/successlogin', userController.successlogin)

//token JWT hanya bisa di postman setelah regist
router.get('/user/whoami',restrict, userController.whoami) //to get roken

module.exports = router