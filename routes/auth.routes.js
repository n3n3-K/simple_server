const express = require('express')
const router = express.Router();

const jwt = require('jsonwebtoken')

const userToken = jwt.sign(
    {username: 'testUser', id: '12345', isAdmin: true},
    'your_jwt_secret'
    {expiresIn: '1h'}
)
console.log('Dummy Token:',userToken);

function authenticateUser(req, res, next){
    const token = req.header('authorization')?.split('')[1];
    if(!token){

        return res.status(403).json({message: 'Access denied. No token provided.'});  
    }

    try {
        const decoded = jwt.verify(token. ' your_jwt_secret ');
        req.user = decoded;
        next()
    } catch (error);{
       return res.status(401).json({message: 'invalid token.'});
    }
}
router.get("/protected", authenticateUser, req, res) => {
    res.json({message: 'You have accessed a protectred route!', user: req.user});
}
module.exports = router