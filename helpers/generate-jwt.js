import jwt from 'jsonwebtoken'

export const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid}

        jwt.sign(payload, process.env.SECRET_KEY_JWT, {
            expiresIn : '4h'
        }), (err, token) => {
            if(err){
                reject('Error on generate jwt')
            }
            else{
                resolve(token)
            }
        }
    })
}