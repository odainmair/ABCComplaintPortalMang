import express, { Request, Response } from 'express';
import { Complaint } from '../models/complaint';
import { requireAuthMW } from '@abccompany/common';

const router = express.Router();

router.get('/api/complaints',requireAuthMW, async (req: Request, res: Response) => {
  let query={}
  if (!req.currentUser!.isAdmin) {
   query = {userId:req.currentUser?.id}
  }else{
   query = {status:"Pending"}
  }

  const complaints = await Complaint.find(query);

  res.send(complaints);
});

export { router as indexComplaintRouter };
