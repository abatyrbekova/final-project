import jwt from 'jsonwebtoken';
/**
 * This unction generates a token based on a user
 * @param {*} user 
 * @returns 
 */
export const generateToken = (user) => {
    const payload = {sub:user._id};
    
    return new Promise((resolve, reject) => {
        jwt.sign(payload, 
            process.env.SECRET,
            {expiresIn:"1h"},
            (err,token)=> {
                if(err){
                    reject(err);
                    return;
                }
                resolve(token);
            })
    });
}
