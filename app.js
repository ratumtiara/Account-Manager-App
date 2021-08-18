require('dotenv').config()
const {User} = require('./models/index')
// const {getUserModel} = require ('./model/user')
const express= require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT || 3000
const router = require('./routes/index')
const passport = require('./lib/passport')
const restrict = require('./middleware/restrict')

// User.sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

// const Model = getUserModel(User.sequelize)
// Model.sync({ alter: true })

app.set('views','./views')
app.set('view engine','ejs')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.use(express.static('public')) 

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})