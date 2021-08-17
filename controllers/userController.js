const {User} = require('../models/')
// const router = require('../routes/index')

class userController {
    static homepage (req,res){
        res.render("index")
    }

    static getOne (req, res) {
        //res.send("getOne " + req.params.nik);
        if (!req.params.email) {
            res.status(422).json({
                message: "error data could not be proccessed"
            })
        } else {
            User.findOne({where: {email: req.params.email}})
            .then((data) => {
                if (!data) {
                    res.status(404).json({
                        message: "Data Not Found",
                    })
                } else {
                    res.status(200).json({
                        message: "Get One Success",
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
                message: "get all success",
                data: data
            })
        })
        .catch((err) => {
            res.status(500).json({
                message:"internal server error"
            })
        })
    }

    static register (req,res){
        // res.send("register")
        console.log(req.body, "register req data")
        const {firstName, lastName, email, phoneNumber, position, password} = req.body

        if (!firstName || !lastName || !email || !phoneNumber || !position ||!password){
            res.status(422).json({
                message:"error data could not be processed"
            })
        } else {
            const data = User.create({firstName, lastName, email, phoneNumber, position, password})
            .then((data) => {
                res.status(201).json({
                    message: "register Success",
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
        //res.send("update success " + req.params.nik);
        console.log(req.body, "update req data")
        const {firstName, lastName, email, phoneNumber, position,password} = req.body
        const targetid = req.params.id

        if (!firstName || !lastName || !email || !phoneNumber || !position ||!password){
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            //kalau gakpake prommise asinkronus
            const data = User.update({firstName, lastName, email, phoneNumber, position,password}, {where: {id: targetid}})
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

    static delete (req, res) {
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
    
    static login(req, res) {
        //fungsi format response
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
            console.log(err)
            res.json({
                message: err
            })
        })
    }
    

    static whoami (req, res) {
        const currentUser = req.user
        res.json(currentUser)
    }
}


module.exports= userController