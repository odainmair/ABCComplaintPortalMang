import express, { Request, Response } from 'express';
import { body } from 'express-validator';
//import nats from 'node-nats-streaming';
import { requireAuthMW, validateRequestMW } from '@abccompany/common';
import { Complaint } from '../models/complaint';



const router = express.Router();

router.post(
  '/api/complaints',
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
    const {   complainType,
      subject,
      description ,
      severity,
      preferedLanguage,
     } = req.body;

    const complaint = Complaint.build({
      complainType,
      subject,
      description ,
      severity,
      status:"Pending",
      preferedLanguage,
      userId: req.currentUser!.id,
      openedBy:req.currentUser!.email,
      updatedByUserId:""  
    });
    await complaint.save();
    res.status(201).send(complaint);
  }
);

export { router as createComplaintRouter };
