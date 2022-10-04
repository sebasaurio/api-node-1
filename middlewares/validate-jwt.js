import jwt from 'jsonwebtoken'
import User from '../models/user'

export const validateJWT = async (req, res, next) => {
    const token = req.header('x-token')
    if(!token){
        return res.status(401).json({
            message: 'No token sended' 
        })
    }

    try{

        const {id} = jwt.verify(token, process.env.SECRET_KEY_JWT)
        const userLogged = await User.findById(id)
        if(!userLogged || !userLogged.status){
            return res.status(401).json({
                message: 'invalid token'
            })
        }
        req.uid = id
        req.userLogged = userLogged

        next()
    }catch(error){
        return res.status(401).json({
            message: 'invalid token' 
        })
    }
}