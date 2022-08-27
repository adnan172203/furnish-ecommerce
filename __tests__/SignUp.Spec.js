const request = require('supertest');
const app = require('../server');
const db = require('../test/setup');

//model
const User = require('../models/User');

// beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('User Registration', () => {
  const postValidUser = () => {
    return request(app).post('/api/v1/users').send({
      name: 'micheal',
      email: 'abc@gmail.com',
      password: 'abc123',
    });
  };

  it('returns 200  when signup request is valid', async () => {
    await postValidUser().expect('Content-Type', /json/).expect(200);
  });

  it('saves user in database', async () => {
    await postValidUser().expect('Content-Type', /json/);

    const users = await User.find();
    expect(users.length).toBe(1);
  });
  it('saves name,email in database', async () => {
    await postValidUser().expect('Content-Type', /json/);

    const users = await User.find();
    expect(users[0].name).toBe('micheal');
    expect(users[0].email).toBe('abc@gmail.com');
  });

  it('hashes the password in database', async () => {
    await postValidUser().expect('Content-Type', /json/).expect(200);

    const users = await User.find();
    expect(users.password).not.toBe('abc123');
  });

  it('returns a 400 with an invalid email', async () => {
    return request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'alskdflaskjfd',
        password: 'abc123',
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
    await postValidUser().expect('Content-Type', /json/).expect(200);
    await postValidUser().expect('Content-Type', /json/).expect(400);
  });
});
