import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequestMW,
  NotFoundError,
  requireAuthMW,
  NotAuthorizedError,
} from '@abccompany/common';
import { Complaint } from '../models/complaint';



const router = express.Router();

router.put(
  '/api/complaints/:id',
  requireAuthMW,
  [
    body('subject').not().isEmpty().withMessage('Subject is required'),
    body('complainType').not().isEmpty().withMessage('ComplainType is required'),
    body('description').not().isEmpty().withMessage('Description is required'),
    body('severity').not().isEmpty().withMessage('Severity is required'),
    body('preferedLanguage').not().isEmpty().withMessage('PreferedLanguage is required'),
   
  ],
  validateRequestMW,
  async (req: Request, res: Response) => {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      throw new NotFoundError();
    }

    if (complaint.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    const {   complainType,
      subject,
      description ,
      severity,
      preferedLanguage,
     } = req.body;
    complaint.set({   complainType,
      subject,
      description ,
      severity,
      status:0,
      preferedLanguage,
     });
    await complaint.save();

  
    res.send(complaint);
  }
);

router.put(
  '/api/complaints/updatestatus/:id',
  requireAuthMW,
  [
    body('status').not().isEmpty().withMessage('Status is required'),
  ],
  validateRequestMW,
  async (req: Request, res: Response) => {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      throw new NotFoundError();
    }

    if (!req.currentUser!.isAdmin) {
      throw new NotAuthorizedError();
    }
    const { status} = req.body;
    complaint.set({ status,updatedByUserId:req.currentUser!.id});
    await complaint.save();

  
    res.send(complaint);
  }
);

export { router as updateComplaintRouter };
