import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
    const education = 'University';
    const name = 'odai nmair';
    const gender = 'male';
    const phoneNumber = '00962795385196';
    const address = 'address address address';

    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',name,education,gender,phoneNumber,address,
            password: 'password'
        })
        .expect(201);
}, 180000);

it('returns a 400 with an invalid email', async () => {
    const education = 'University';
    const name = 'odai nmair';
    const gender = 'male';
    const phoneNumber = '00962795385196';
    const address = 'address address address';

    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'alskdflaskjfd',name,education,gender,phoneNumber,address,
            password: 'password'
        })
        .expect(400);
});

it('returns a 400 with an invalid password', async () => {
    const education = 'University';
    const name = 'odai nmair';
    const gender = 'male';
    const phoneNumber = '00962795385196';
    const address = 'address address address';

    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'alskdflaskjfd',name,education,gender,phoneNumber,address,
            password: 'p'
        })
        .expect(400);
});

it('returns a 400 with missing email and password', async () => {
    const education = 'University';
    const name = 'odai nmair';
    const gender = 'male';
    const phoneNumber = '00962795385196';
    const address = 'address address address';

    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',name,education,gender,phoneNumber,address,
        })
        .expect(400);

    await request(app)
        .post('/api/users/signup')
        .send({
            password: 'alskjdf'
        })
        .expect(400);
});


it('dissallows dublicate emails', async () => {
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
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',name,education,gender,phoneNumber,address,
            password: 'password'
        })
        .expect(400);
});

it('sets a cookie after succesful signup', async () => {
    const education = 'University';
    const name = 'odai nmair';
    const gender = 'male';
    const phoneNumber = '00962795385196';
    const address = 'address address address';

    const respone = await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',name,education,gender,phoneNumber,address,
            password: 'password'
        })
        .expect(201);
        
    expect(respone.get('Set-Cookie')).toBeDefined();

});