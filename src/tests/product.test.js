const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const Product = require('../models/Product');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await Product.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('Product API', () => {
  const payload = {
    name: 'Pro Cricket Bat',
    description: 'Premium English willow cricket bat for advanced players',
    price: 8999,
    brand: 'VS Sports',
    category: 'Cricket',
    stock: 12,
    imageUrl: 'https://example.com/bat.jpg'
  };

  it('should create product', async () => {
    const response = await request(app).post('/api/products').send(payload);

    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe(payload.name);
  });

  it('should get all products', async () => {
    await Product.create(payload);

    const response = await request(app).get('/api/products');

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toHaveLength(1);
  });

  it('should update a product', async () => {
    const created = await Product.create(payload);

    const response = await request(app)
      .put(`/api/products/${created._id}`)
      .send({ price: 9999, stock: 8 });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.price).toBe(9999);
    expect(response.body.data.stock).toBe(8);
  });

  it('should delete a product', async () => {
    const created = await Product.create(payload);

    const response = await request(app).delete(`/api/products/${created._id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);

    const inDb = await Product.findById(created._id);
    expect(inDb).toBeNull();
  });
});
