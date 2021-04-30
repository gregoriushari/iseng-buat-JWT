const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const app = express()

let corsOptions = {
    origin:"http://localhost:8081"
}

app.use(cors(corsOptions))

//parse req of content type - application/json
app.use(bodyParser.json())

//parse req of content type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

const db = require("./app/models")
const Role = db.role

db.sequelize.sync()
// db.sequelize.sync({force:true}).then(()=>{
//     console.log("drop and resync db")
//     initial()
// })

//simple route
app.get("/",(req,res)=>{
    res.json({message:"Welcome to API with JWT "})
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

//set port yang digunakan 
const PORT = process.env.PORT ||8000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`)
})

function initial(){
    Role.create({
        id: 1,
        name: "user"
    })
     
    Role.create({
        id: 2,
        name: "moderator"
    })
     
    Role.create({
        id: 3,
        name: "admin"
    })
}