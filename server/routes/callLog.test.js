const request = require('supertest')
const Call_Log = require('../models/Call_Log.js')
const app = require('../server.js')

describe('Post Endpoints', () => {
  it('should post a new call', async () => {
    const res = await request(app).post('/callLogs/')
    .send({userId: 4, phoneNumber: "4154727981", entireCall: "This is the entire call", callSummary: "call summary", sentimentAnalysis: "false"})
    expect(res.text).toEqual("Data Inserted")

    const res2 = await request(app).post('/callLogs/')
    .send({userId: 4, phoneNumber: "4158909000", entireCall: "This is the entire call 2", callSummary: "call summary 2", sentimentAnalysis: "false"})
    expect(res2.text).toEqual("Data Inserted")

    const res_test = await request(app).post('/callLogs/')
    .send({userId: 4, phoneNumber: "test", entireCall: "Testing", callSummary: "Testing", sentimentAnalysis: "false"})
    expect(res_test.text).toEqual("Data Inserted")
  })

  
})

describe('Post Endpoints Edge', () => {
  it('should return error with no UserId', async () => {

    const missingID = await request(app).post('/callLogs/')
    .send()
    expect(missingID.text).toEqual("Missing a required parameter")
    expect(missingID.status).toEqual(400)

    const missingPhone = await request(app).post('/callLogs/')
    .send({userId: 4, entireCall: "This is the entire call 2", callSummary: "call summary 2", sentimentAnalysis: "false"})
    expect(missingPhone.text).toEqual("Missing a required parameter")
    expect(missingPhone.status).toEqual(400)

    const missingEntire = await request(app).post('/callLogs/')
    .send({userId: 4, phoneNumber: "4158909000", callSummary: "call summary 2", sentimentAnalysis: "false"})
    expect(missingEntire.text).toEqual("Missing a required parameter")
    expect(missingEntire.status).toEqual(400)

    const missingSummary = await request(app).post('/callLogs/')
    .send({userId: 4, phoneNumber: "4158909000", entireCall: "This is the entire call 2", sentimentAnalysis: "false"})
    expect(missingSummary.text).toEqual("Missing a required parameter")
    expect(missingSummary.status).toEqual(400)

    const missingSentiment = await request(app).post('/callLogs/')
    .send({userId: 4, phoneNumber: "4158909000", entireCall: "This is the entire call 2", callSummary: "call summary 2"})
    expect(missingSentiment.text).toEqual("Missing a required parameter")
    expect(missingSentiment.status).toEqual(400)

  })

})

describe('Get Endpoints', () => {
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

describe('Get Endpoints Edge', () => {

  it('should error on get', async () => {
    const res2 = await request(app).get('/callLogs/test')
    expect(res2.status).toEqual(400)
  })

})

describe('Search Endpoint', () => {

  it('should return calls with given query', async () => {
    const res = await request(app).get('/callLogs/search/').send({"searchType": "phoneNumber", "searchQuery": "415890"})
    expect(res.status).toEqual(200)
    for(i in res.body){
      
      expect(res.body[i].phoneNumber).toMatch(/415890/);
    
    }
  })

  it('should return calls with given query', async () => {
    const res2 = await request(app).get('/callLogs/search/').send({"searchType": "entireCall", "searchQuery": "2"})
    expect(res2.status).toEqual(200)
    for(i in res2.body){
      
      expect(res2.body[i].entireCall).toMatch(/2/);
    
    }
  })

})

describe('Search Endpoint Edge', () => {

  it('should return an error', async () => {
    const res = await request(app).get('/callLogs/search/').send({"searchQuery": "415890"})
    expect(res.status).toEqual(400)
    expect(res.text).toEqual("Missing Parameters")
    console.log(res)
  })

  it('should return an error', async () => {
    const res2 = await request(app).get('/callLogs/search/').send({"searchType": "entireCall"})
    expect(res2.text).toEqual("Missing Parameters")
    expect(res2.status).toEqual(400)

  })

  it('should return an error', async () => {
    const res3 = await request(app).get('/callLogs/search/').send({"searchType": "wrongParam", "searchQuery": "2"})
    expect(res3.status).toEqual(400)
    expect(res3.text).toEqual("Search Type not valid")
   
  })

})

describe("Testing Put Endpoint", () => {

  it("should respond with a 200 status code if good/valid request", async () => {
    let test_data = await Call_Log.findOne({userId: 4, phoneNumber: "test", entireCall: "Testing", callSummary: "Testing", sentimentAnalysis: "false"});
    const res = await request(app).put(`/callLogs/${test_data._id}`).send({
      userId: '0' //test entry
    })
    expect(res.statusCode).toEqual(200);
  })

  it("should respond with a 400 status code if bad/invalid request", async () => {
    const res = await request(app).put('/callLogs/invalid_id').send({
      userId: '0' //test entry
    })
    expect(res.statusCode).toEqual(400);
  })
})

describe("Testing Delete Endpoint", () => {
  it("should respond with a 200 status code if good/valid request", async () => {
    let test_data = await Call_Log.findOne({userId: 0, phoneNumber: "test", entireCall: "Testing", callSummary: "Testing", sentimentAnalysis: "false"});
    const res = await request(app).delete(`/callLogs/${test_data._id}`)
    expect(res.statusCode).toEqual(200);
  })

  it("should respond with a 400 status code if bad/invalid request", async () => {
    const res = await request(app).delete('/callLogs/invalid_id')
    expect(res.statusCode).toEqual(400);
  })
})