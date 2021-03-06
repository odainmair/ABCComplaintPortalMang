import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(400);
});

it('fails when an incorrect password is supplied', async () => {
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

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'aslkdfjalskdfj'
    })
    .expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
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
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
