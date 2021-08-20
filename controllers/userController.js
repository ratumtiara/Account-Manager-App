const {User} = require('../models/')
// const router = require('../routes/index')

class userController {
    static homepage (req,res){
        res.render('index.ejs')
    }

    static getOne (req, res) {
        //res.send("getOne " + req.params.nik);
        if (!req.params.id) {
            res.status(422).json({
                message: "error data could not be proccessed"
            })
        } else {
            User.findOne({where: {id: req.params.id}})
            .then((data) => {
                if (!data) {
                    res.render("404.ejs")
                    res.status(404).json({
                        // res.redirect('https://http.cat/[404]'),
                        message: "Data Not Found",
                    })
                } else {
                    res.status(200).json({
                        message: "fetch user Success",
                        data: data
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
        }
    }
    
        
    static getAll (req,res){
        // res.send("getAll")
        User.findAll()
        .then((data) => {
            res.status(200).json({
                message: "fetch all user success",
                data: data
            })
        })
        .catch((err) => {
            res.status(500).json({
                message:"internal server error"
            })
        })
    }

    static daftar (req,res) {
        res.render('register.ejs')
    }

    static successregister(req,res){
        res.render('successregister.ejs')
    }

    static register (req,res){
        res.redirect('/user/successregister/')
        // console.log(req.body, "register req data")
        const {firstName, lastName, email, phoneNumber, position, password} = req.body

        if (!firstName || !lastName || !email || !phoneNumber || !position ||!password){
            res.status(422).json({
                message:"error data could not be processed"
            })
        
        } else {
            const data = User.create({
                firstName: req.body.firstName, 
                lastName: req.body.lastName, 
                email: req.body.email, 
                phoneNumber: req.body.phoneNumber, 
                position: req.body.position,
                password: req.body.password})
            .then((data) => {
                res.status(201).json({
                    message: "User created",
                    data:data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message:"internal server error"
                })
            })
        }
    }
    

    static update (req, res) {
        //res.send("update success " + req.params.nik);(
        res.redirect('/user/update/')
        console.log(req.body, "update req data")
        const {firstName, lastName, email, phoneNumber, position,password} = req.body
        const targetid = req.params.id

        if (!targetid){
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            //kalau gakpake prommise asinkronus
            const data = User.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName, 
                email: req.body.email, 
                phoneNumber: req.body.phoneNumber, 
                position: req.body.position,
                password: req.body.password}, 
                {where: {id: targetid}})
            .then((data) => {
                res.status(200).json({
                    message: "update success",
                    data: data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
        }
    }

    static successupdate (req,res){
        res.render("successupdate.ejs")
    }

    static delete (req, res) {
        res.redirect('/user/delete/')
        
        if (!req.params.id) {
            res.status(422).json({
                message: "error data could not be proccessed"
            })
        } else {
            User.destroy({where: {id: req.params.id}})
            .then((data) => {
                res.status(200).json({
                    message: "Delete Success",
                    data: data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
        }
    }

    static successdelete (req,res){
        res.render("successdelete.ejs")
    }
    
    static login(req, res) {
        //fungsi format response
        // const {email, password} = req.body
        // res.redirect('user/masuk/successlogin')
        const format = (user) => {
            const { id, email } = user;
            return {
                id,
                email,
                token: user.generateToken()
            }                         
        }    
        //lakukan auntetikasi
        User.authenticate(req.body)
            .then(user => {
                res.json(format(user))
            })
            .catch(err => {
                // console.log(err)
                res.render("404.ejs")
                res.json({
                    message: err
                })
            })
    }

    static masuk (req,res) {
        res.render('login.ejs')
    }

    static successlogin (req,res){
        res.render('index.ejs')
    }


    // token JWT
    static whoami (req, res) {
        const currentUser = req.user
        res.json(currentUser)
    }
}


module.exports= userController