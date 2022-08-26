const request = require('supertest');
const app = require('../server');
const db = require('../test/setup');

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

// it('disallows duplicate emails', async () => {
//   return request(app)
//     .post('/api/v1/users')
//     .send({
//       name: 'micheal',
//       email: 'abc@gmail.com',
//       password: 'abc123',
//     })
//     .expect('Content-Type', /json/)
//     .expect(200);
// });

// await request(app)
// .post('/api/v1/users')
// .send({
//   name: 'micheal',
//   email: 'abc@gmail.com',
//   password: 'abc123',
// })
// .expect('Content-Type', /json/)
// .expect(400);
