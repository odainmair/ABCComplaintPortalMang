import request from 'supertest';
import { app } from '../../app';

const createComplaint = () => {
  return request(app).post('/api/complaints').set('Cookie', global.signin()).send({subject:"asd",
  complainType:"Account",
  description:"pasdo asdooap ",
  severity:"low",
  preferedLanguage:"English"});
};

it('can fetch a list of Complaints', async () => {
  await createComplaint();
  await createComplaint();
  await createComplaint();

  const response = await request(app).get('/api/complaints').set('Cookie', global.signin()).send().expect(200);

  expect(response.body.length).toEqual(3);
});
