import express, { Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import {validateRequestMW} from '@abccompany/common';
import { BadRequestError } from '@abccompany/common';
import { User } from '../models/user';

const router = express.Router();

router.post('/api/users/signup', [
    body('email').isEmail().withMessage('Email must be vaild'),
    body('name').not().isEmpty().withMessage('Name is required'),
    body('phoneNumber').not().isEmpty().withMessage('PhoneNumber is required'),
    body('education').not().isEmpty().withMessage('Education is required'),
    body('gender').not().isEmpty().withMessage('Gender is required'),
    body('address').not().isEmpty().withMessage('Address is required'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters'),
], validateRequestMW, async (req: Request, res: Response) => {
   
    const {  email,name,education,gender,phoneNumber,address,password,isAdmin} = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new BadRequestError('Email is already used');
    }

    const user = User.build({ email,name,education,gender,phoneNumber,address,password,isAdmin:false });
    await user.save()

    //Generate JWT
 
    const userJwt = jwt.sign({ id: user.id, email: user.email,fullName:user.name,isAdmin:user.isAdmin }, process.env.JWT_KEY!);

    req.session = {
        jwt: userJwt
    };

    res.status(201).send(user);


});

router.post('/api/users/signupforadmin', [
    body('email').isEmail().withMessage('Email must be vaild'),
    body('name').not().isEmpty().withMessage('Name is required'),
    body('phoneNumber').not().isEmpty().withMessage('PhoneNumber is required'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters'),
], validateRequestMW, async (req: Request, res: Response) => {
   
    const {  email,name,phoneNumber,password} = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new BadRequestError('Email is already used');
    }

    const user = User.build({ email,name,education:"A",gender:"A",phoneNumber,address:"A",password,isAdmin:true });
    await user.save()

    //Generate JWT
 
    const userJwt = jwt.sign({ id: user.id, email: user.email,fullName:user.name,isAdmin:user.isAdmin }, process.env.JWT_KEY!);

    req.session = {
        jwt: userJwt
    };

    res.status(201).send(user);


});

export { router as signupRouter };