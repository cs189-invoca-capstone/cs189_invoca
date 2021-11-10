const request = require('supertest')
const app = require('../server.js')


describe('Post Endpoints', () => {
  it('should post a new call', async () => {
    const res = await request(app).post('/callLogs/')
    .send({userId: 4})
    expect(res.text).toEqual("Data Inserted")

    const res2 = await request(app).post('/callLogs/')
    .send({userId: 4})
    expect(res2.text).toEqual("Data Inserted")

  })
})

describe('Get All Endpoints', () => {
    let _id = 0;
    it('should get all newly made call', async () => {
      const res = await request(app).get('/callLogs/all/4')
      calls = JSON.parse(res.text);
    
      expect(res.status).toEqual(200)
      for (i in calls)
        expect(calls[i].userId).toEqual("4")
        
      _id = calls[0]._id;


    })

    it('should get specific call', async () => {
      const res2 = await request(app).get('/callLogs/' + _id)
      call = JSON.parse(res2.text);
      console.log(call)
      expect(res2.status).toEqual(200)
      expect(call._id).toEqual(_id)
    })

  })


 
