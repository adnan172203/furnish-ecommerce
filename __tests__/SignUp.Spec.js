const request = require('supertest');
const app = require('../server');
const db = require('../test/setup');

//model
const User = require('../models/User');

// beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('User Registration', () => {
  it('returns 200  when signup request is valid', async () => {
    return request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('saves user in database', async () => {
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect('Content-Type', /json/)
      .expect(200);

    const users = await User.find();
    expect(users.length).toBe(1);
  });

  it('returns a 400 with an invalid email', async () => {
    return request(app)
      .post('/api/v1/users')
      .send({
        email: 'alskdflaskjfd',
        password: 'password',
      })
      .expect('Content-Type', /json/)
      .expect(400);
  });

  it('returns 400  when provide no email or password', async () => {
    return request(app)
      .post('/api/v1/users')
      .send({
        name: '',
        email: '',
        password: '',
      })
      .expect('Content-Type', /json/)
      .expect(400);
  });
  it('returns 400  when password is under 6 character', async () => {
    return request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc',
      })
      .expect('Content-Type', /json/)
      .expect(400);
  });

  it('disallows duplicate emails', async () => {
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect('Content-Type', /json/)
      .expect(200);
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect('Content-Type', /json/)
      .expect(400);
  });
});
