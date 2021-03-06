import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('returns a 404 if the provided id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/complaints/${id}`)
    .set('Cookie', global.signin())
    .send({subject:"asd",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/complaints/${id}`)
    .send({subject:"asd",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(401);
});

it('returns a 401 if the user does not own the complaint', async () => {
  const response = await request(app)
    .post('/api/complaints')
    .set('Cookie', global.signin())
    .send({subject:"asd",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"});

  await request(app)
    .put(`/api/complaints/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({subject:"asd",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(401);
});

it('returns a 400 if the user provides an invalid title or price', async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/complaints')
    .set('Cookie', cookie)
    .send({subject:"asd",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"});

  await request(app)
    .put(`/api/complaints/${response.body.id}`)
    .set('Cookie', cookie)
    .send({subject:"",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(400);

  await request(app)
    .put(`/api/complaints/${response.body.id}`)
    .set('Cookie', cookie)
    .send({subject:"asdf",
    complainType:"",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(400);
});

it('updates the complaint provided valid inputs', async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/complaints')
    .set('Cookie', cookie)
    .send({subject:"sdf",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"});

  await request(app)
    .put(`/api/complaints/${response.body.id}`)
    .set('Cookie', cookie)
    .send({subject:"sdf",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(200);

  const complaintResponse = await request(app)
    .get(`/api/complaints/${response.body.id}`).set('Cookie', global.signin())
    .send();

  expect(complaintResponse.body.subject).toEqual('sdf');
  expect(complaintResponse.body.complainType).toEqual('Account');
});
