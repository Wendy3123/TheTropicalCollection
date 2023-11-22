import express from "express";
const authRouter = express.Router()
import User from "../models/userModel.js";
import bcrypt from 'bcrypt'



authRouter.post('/', async (req, res) => {
    console.log('IN HERE')
})
export default authRouter;
