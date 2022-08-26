// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const request = require('supertest');
// const app = require('../server');

// let mongo;
// beforeAll(async () => {
//   process.env.JWT_KEY = 'asdfasdf';
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//   mongo = await MongoMemoryServer.create();
//   const mongoUri = mongo.getUri();
//   await mongoose.connect(mongoUri);
// });

// beforeEach(async () => {
//   const collections = await mongoose.connection.db.collections();

//   for (let collection of collections) {
//     await collection.deleteMany({});
//   }
// });

// afterAll(async () => {
//   await mongo.stop();
//   await mongoose.connection.close();
// });

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongod;
(async () => {
  mongod = await MongoMemoryServer.create();
  const mongoUri = mongod.getUri();

  await mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      // console.log('ready-state====.>>>>>', result.connection);
      console.log(result.connection.host);
    })
    .catch((err) => {});
})();

const close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

const clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};
module.exports = { close, clear };

// beforeEach(async () => {
//   const collections = await mongoose.connection.db.collections();

//   for (let collection of collections) {
//     await collection.deleteMany({});
//   }
// });

// afterAll(async () => {
//   await mongo.stop();
//   await mongoose.connection.close();
// });

//========================================================

// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');
// const { MongoClient } = require('mongodb');

// let connection;
// let mongoServer;

// const connect = async () => {
//   mongoServer = await MongoMemoryServer.create();
//   connection = await MongoClient.connect(mongoServer.getUri(), {});
// };

// const close = async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   await mongoServer.stop();
// };

// const clear = async () => {
//   const collections = mongoose.connection.collections;
//   for (const key in collections) {
//     await collections[key].deleteMany({});
//   }
// };
// module.exports = { connect, close, clear };
