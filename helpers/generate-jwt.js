import jwt from 'jsonwebtoken'

export const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid}
        const key = process.env.SECRET_KEY_JWT;

        jwt.sign({
            data: payload
          }, key, { expiresIn: 60 * 60 },function(err, token) {
            if(err){
                reject('error on generate jwt token')
            }else{
                resolve(token)
            }
          });
    })
}