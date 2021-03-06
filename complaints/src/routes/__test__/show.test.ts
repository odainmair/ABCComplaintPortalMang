import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('returns a 404 if the complaints is not found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/complaints/${id}`).set('Cookie', global.signin()).send().expect(404);
});

it('returns the complaint if the complaint is found', async () => {
  

  const response = await request(app)
    .post('/api/complaints')
    .set('Cookie', global.signin())
    .send({subject:"asd",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/complaints/${response.body.id}`)
    .set('Cookie', global.signin()).send()
    .expect(200);

  expect(ticketResponse.body.subject).toEqual("asd");
  expect(ticketResponse.body.complainType).toEqual("Account");
});
