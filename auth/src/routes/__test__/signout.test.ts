import request from 'supertest';
import { app } from '../../app';

it('clears the cookie after signing out', async () => {
  const education = 'University';
  const name = 'odai nmair';
  const gender = 'male';
  const phoneNumber = '00962795385196';
  const address = 'address address address';
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',name,education,gender,phoneNumber,address,
      password: 'password'
    })
    .expect(201);

  const response = await request(app)
    .post('/api/users/signout')
    .send({})
    .expect(200);

  expect(response.get('Set-Cookie')[0]).toEqual(
    'express:sess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
  );
});
