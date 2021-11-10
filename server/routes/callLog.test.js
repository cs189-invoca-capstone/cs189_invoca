const request = require('supertest')
const app = require('../server.js')

//not working yet
describe('Post Endpoints', () => {
  it('should post a new call', async () => {
    const res = await request(app).post('/callLogs/')
    .send({userId: 4})
    expect(res.statusCode).toEqual(200)
  })
})

describe('Get Endpoints', () => {
    it('should get newly made call', async () => {
      const res = await request(app).get('/callLogs/all/0')
      expect(res.statusCode).toEqual(200)
    })
  })
