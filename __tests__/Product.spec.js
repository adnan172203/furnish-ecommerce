const request = require('supertest');
const app = require('../server');
const db = require('../test/setup');

const Product = require('../models/Product');

afterEach(async () => await db.clear());
afterAll(async () => await db.close());

let regCook;
const addUser = async () => {
  const regResponse = await request(app).post('/api/v1/users').send({
    name: 'micheal',
    email: 'abc@gmail.com',
    password: 'abc123',
    role: 'admin',
  });

  regCook = regResponse.headers['set-cookie'].pop().split(';')[0];
};

const loginUser = async () => {
  let logAns = await request(app).post('/api/v1/users/login').send({
    email: 'abc@gmail.com',
    password: 'abc123',
  });
  return (logAns.cookie = regCook);
};

describe('Product Testing', () => {
  it('returns 401 when product post request has no authentication', async () => {
    await addUser();
    await loginUser();
    const response = await request(app).post('/api/v1/products');
    expect(response.status).toBe(401);
  });

  it('returns 201 when product post request has successfull', async () => {
    await addUser();
    let logResponseToken = await loginUser();

    const response = await request(app)
      .post('/api/v1/products')
      .set('Cookie', [`${logResponseToken}`])
      .send({
        name: 'chair',
        description: 'new chair',
        price: 123,
        category: 'furniture',
        stock: true,
      });
    expect(response.status).toBe(201);
  });
});
