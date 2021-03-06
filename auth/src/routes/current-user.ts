import express from "express";
import {currentUserMW} from '@abccompany/common';

const router = express.Router();

router.get('/api/users/currentuser',currentUserMW,(req,res)=>{
         console.log("jwt"+req.session!.jwt)
         res.send({currentUser:req.currentUser||null});
})

export {router as currentUserRouter};