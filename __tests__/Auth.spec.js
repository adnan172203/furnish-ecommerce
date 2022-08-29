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

  it('fails when email does not exist in the database', async () => {
    await postValidUser().expect(400);
  });
});
