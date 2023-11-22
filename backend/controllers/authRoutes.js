import express from "express";
const authRouter = express.Router()
import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'json-web-token'

 
authRouter.post('/', async (req, res) => {
   const emailAddress=req.body.email
       //to make the email case insensitive,
   let user=  await User.findOne({ email: new RegExp(`^${emailAddress}$`, 'i') })
    
  

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({
        message: `Could not find a user with the provided username and password` 
      })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user._id })           
        res.json({ user: user, token: result.value })           
       }
    })


authRouter.get('/profile', async (req, res) => {
    try {
        // Split the authorization header into [ "Bearer", "TOKEN" ]:
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        // Only handle "Bearer" authorization for now 
        //  (we could add other authorization strategies later):
        if (authenticationMethod == 'Bearer') {

            // Decode the JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            // Get the logged in user's id from the payload
            const { id } = result.value
            console.log("userID before: ", {id})
            // Find the user object using their id:
            let user = await User.findOne({
                
           _id: id
                
            })
           
            res.json(user)
        }
    } catch {
        res.json(null)
    }
})


export default authRouter;
