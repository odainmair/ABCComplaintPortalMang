import express, { Request, Response } from 'express';
import { NotFoundError } from '@abccompany/common';
import { Complaint } from '../models/complaint';
import { requireAuthMW } from '@abccompany/common';
const router = express.Router();

router.get('/api/complaints/:id',requireAuthMW, async (req: Request, res: Response) => {
  const complaint = await Complaint.findById(req.params.id);

  if (!complaint) {
    throw new NotFoundError();
  }

  res.send(complaint);
});

export { router as showComplaintRouter };
