const request = require('supertest');
const app = require('../server');
const db = require('../test/setup');

afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('User Authentication', () => {
  const postValidUser = () => {
    return request(app).post('/api/v1/users/login').send({
      email: 'abc@gmail.com',
      password: 'abc123',
    });
  };

  it('fails when email and password not provide', async () => {
    await request(app)
      .post('/api/v1/users/login')
      .send({
        email: '',
        password: '',
      })
      .expect(404);
  });

  it('fails when email does not exist in the database', async () => {
    await postValidUser().expect(400);
  });

  it('fails when email does not exist in the database', async () => {
    await request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect(400);
  });

  it('returns user ,success and token when login success', async () => {
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect(200);

    const response = await postValidUser();

    expect(Object.keys(response.body)).toEqual(['user', 'success', 'token']);
  });

  it('returns 200 when credentials are correct', async () => {
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect(200);

    await request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect(200);
  });
});
