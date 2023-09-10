const jwt = require("jsonwebtoken")

const genrateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_KEY,{
        expiresIn:"15d",
    })
}

module.exports = genrateToken;