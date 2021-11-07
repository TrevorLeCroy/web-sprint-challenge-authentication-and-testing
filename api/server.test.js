// Write your tests here
const model = require('./auth/auth-model');
const db    = require('../data/dbConfig');
const request = require('supertest');

// test('sanity', () => {
//   expect(true).toBe(true);
// })

/*
  Error in connecting to the DB?
*/

beforeAll(async() => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async() => {
  await db('users').truncate();
});
afterEach(async() => {
  await db.destroy();
});

it('correct env', () => {
  expect(process.env.NODE_ENV).toBe('testing');
});


const testUser = {username: 'testMan', password: 'test'};

describe('auth tests', () => {
  describe('registers user', () => {
      it('should create a new user', async () => {
        let users;
        await model.add(testUser);
        users = db('users');
        expect(users).toHaveLength(1);
      });
  })
});

