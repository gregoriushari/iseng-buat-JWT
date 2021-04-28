const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
const db = require("../models")
const User = db.user

verifyToken = (req,res, next)=>{
    let token = req.headers["x-access-token"]

    if(!token){
        return res.status(403).send({
            message: "No token provided"
        })
    }
}