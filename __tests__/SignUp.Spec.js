const request = require('supertest');
const app = require('../server');

describe('User Registration', () => {
  it('returns 200 ok when signup request is valid', async () => {
    await request(app)
      .post('/api/v1/users')
      .send({
        name: 'micheal',
        email: 'abc@gmail.com',
        password: 'abc123',
      })
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  }, 60_000);
});
