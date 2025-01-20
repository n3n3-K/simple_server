

function authenticateUser(req, res, next){
    const token = req.header('authorization');
    if(!token){ //check whether token is present or not
        return res.status(403).json({message: 'Accesss denied. No token provided'})
    }
    try {
       const decoded = jwt.verify(token, 'your_jwt_secret')
       req.user = decoded;
       next()
    } catch (error) {
        return res.status(401).json({message: 'invalid token.'});
    }
}



module.exports = authenticateUser