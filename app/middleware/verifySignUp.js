const db = require("../models")
const ROLES = db.ROLES
const User = db.user

checkDuplicateUsernameOrEmail = (req, res, next)=>{
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then(user=>{
        if(user){
            res.status(400).send({
                message:"Gagal, Username sudah digunakan"
            })
            return
        }
        //Email
        User.findOne({
            where:{
                email:req.body.email
            }
        }).then(user=>{
            if(user){
                res.status.send({
                    message:"Gagal, Email sudah digunakan"
                })
                return
            }
            next()
        })
    })
}

checkRolesExisted=(req,res,next)=>{
    if(req.body.roles){
        for(let i=0;i<ROLES.length; i++){
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                  message: "Failed! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next()
}


const verifySignUp ={
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
}

module.exports = verifySignUp