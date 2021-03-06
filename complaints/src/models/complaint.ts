import mongoose from 'mongoose';

interface ComplaintAttrs {
  complainType: string,
  subject: string,
  description:string ,
  severity:string ,
  status: string,
  preferedLanguage: string,
  userId:string ,
  openedBy:string ,
  updatedByUserId:string ,

}

interface ComplaintDoc extends mongoose.Document {
  complainType: string,
  subject: string,
  description:string ,
  severity:string ,
  status: string,
  preferedLanguage: string,
  userId:string ,
  openedBy:string ,
  updatedByUserId:string ,
}

interface ComplaintModel extends mongoose.Model<ComplaintDoc> {
  build(attrs: ComplaintAttrs): ComplaintDoc;
}

const complaintSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      required: true,
    },
    complainType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    preferedLanguage: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    openedBy: {
      type: String,
      required: true,
    },
    updatedByUserId: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

complaintSchema.statics.build = (attrs: ComplaintAttrs) => {
  return new Complaint(attrs);
};

const Complaint = mongoose.model<ComplaintDoc, ComplaintModel>('Complaint', complaintSchema);

export { Complaint };
