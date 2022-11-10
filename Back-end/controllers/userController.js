import bcrypt from 'bcrypt';
import User from '../models/user.js';
import authenticationHelper from '../helpers/authenticationHelper.js';



export const getAllUsers = async(req, res) => {
    const users = await User.find();
    return res.status(200).json(users);
}

export const login = async(req, res) => {
    //email and password
    const {email, password} = req.body;

    try{
        //check is there is a password!
        if(!password){
            return res.status(400).json({message:'No password supplied'});
        }

        //check if there is an email
        const user = await User.findOne({email:email});

        if(!user){
            return res.status(400).json({message:'No user found'});
        }

        //check if the password is correct = compare the password with the hashed password
        const checkPassword = await bcrypt.compare(password, user.password);

        

        if(checkPassword){
            console.log('Yayyy you are authenticated, welcome!');

            //generate a token for the user using the authentication strategy (helper function)            
            const token = await authenticationHelper.generateToken(user);        

            return res.status(200).json({message:'You are authenticated, welcome!', token});
        } else {
            return res.status(400).json({message:'No access granted'});
        }
    } catch(error){
        return res.status(500).json({message:error.message});
    }
}


//Register user
export const registerUser = async(req, res) => {
    //we are hashing the password that the user provided us.
    //we don't want to store the password in plain text in the db
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        //creating the user document into the users collection
        const createdUser = await User.create({
            firstName:req.body.firstName, 
            lastName:req.body.lastName,
            userName:req.body.userName,
            email:req.body.email,
            password: hashedPassword
        });

        return res.status(200).json({message:'User created', createdUser})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}