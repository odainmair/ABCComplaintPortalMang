import express, {Request,Response} from "express";
import {body} from 'express-validator';
import jwt from 'jsonwebtoken';
import {BadRequestError} from '@abccompany/common';
import {validateRequestMW} from '@abccompany/common';
import {PasswordHashing} from '../services/passwodHashing'

import {User} from '../models/user';
const router = express.Router();

router.post('/api/users/signin',
[
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must supply password')
],
validateRequestMW
,async (req:Request,res:Response)=>{

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    console.log('-- existing User'+JSON.stringify(existingUser));
    if (!existingUser) {
        throw new BadRequestError('Invaild Credentials');
    }
    const passwordMatch = await PasswordHashing.compare(existingUser.password,password);
    console.log('-- passwordMatch'+passwordMatch);
    if(!passwordMatch){
        throw new BadRequestError('Invaild Credentials');
    }

    const userJwt = jwt.sign({ id: existingUser.id, email: existingUser.email,fullName:existingUser.name,isAdmin:existingUser.isAdmin }, process.env.JWT_KEY!);

    req.session = {
        jwt: userJwt
    };

    res.status(200).send(existingUser);

   
})

export {router as signinRouter};