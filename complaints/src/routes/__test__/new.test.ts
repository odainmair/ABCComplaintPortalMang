import request from 'supertest';
import { app } from '../../app';
import { Complaint } from '../../models/complaint';

it('has a route handler listening to /api/complaints for post requests', async () => {
  const response = await request(app).post('/api/complaints').send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  await request(app).post('/api/complaints').send({}).expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const response = await request(app)
    .post('/api/complaints')
    .set('Cookie', global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid subject is provided', async () => {
  await request(app)
    .post('/api/complaints')
    .set('Cookie', global.signin())
    .send({subject:"",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(400);

  await request(app)
    .post('/api/complaints')
    .set('Cookie', global.signin())
    .send({
      price: 10,
    })
    .expect(400);
});

it('returns an error if an invalid complainType is provided', async () => {
  await request(app)
    .post('/api/complaints')
    .set('Cookie', global.signin())
    .send({subject:"sdfdf",
   
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(400);

});

it('creates a complaint with valid inputs', async () => {
  let complaints = await Complaint.find({});
  expect(complaints.length).toEqual(0);


  await request(app)
    .post('/api/complaints')
    .set('Cookie', global.signin())
    .send({subject:"sdfdsf",
    complainType:"Account",
    description:"pasdo asdooap ",
    severity:"low",
    preferedLanguage:"English"})
    .expect(201);

    complaints = await Complaint.find({});
  expect(complaints.length).toEqual(1);
  expect(complaints[0].subject).toEqual("sdfdsf");
  expect(complaints[0].complainType).toEqual("Account");
});
