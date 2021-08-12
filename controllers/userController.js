const {User} = require('../models')

class userController {
    static homepage (req,res){
        res.send("masuk root")
    }

    static getOne (req,res){
        res.send("getOne" + req.params.id) 
    }

    static async getAll (req,res){
        // res.send("getAll")
        let hasil = User.findAll()
        res.status(200).json({
            message:"get all success",
            data: hasil
        })
    }

    static register (req,res){
        // res.send("register")
        const {firstName, lastName, email, phoneNumber, position,password} = req.body

        if (!firstName || !lastName || !email || !phoneNumber || !position ||!password){
            res.status(422).json({
                message:"error data could not be processed"
            })
        } else {
            const data = User.create({firstName, lastName, email, phoneNumber, position,password})
            res.status(201).json({
                message:"register success",
                data:data
            })
        } 
        // User.create()
    }

    static update (req,res){
        res.send("Update success" + req.params.id)
    }

    static delete (req,res){
        res.send("Delete success" + req.params.id)
    }
}

module.exports= userController