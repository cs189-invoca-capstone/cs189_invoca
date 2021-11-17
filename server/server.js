const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const callLogRoute = require('./routes/callLog');


dotenv.config();

const PORT = process.env.PORT || 3001;

mongoose 
 .connect(process.env.MONGO_URL)   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const app = express();
const path = require('path')
const request = require('request');
const https = require('https');
const axios = require('axios');


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

app.get("/server", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to server" });
  });

// use callLog route for api requests related to the call log
app.use("/api/callLogs", callLogRoute);

// getting phone numbers from ringpool api
app.get('/ringpool', async(request,result) => {
  axios.request({
    method: 'POST',
    url: 'https://pnapi.invoca.net/api/2013-07-01/bulk.json',
    data: {"requests":[
          {"api_suffix": "394157/allocate_number.json?ring_pool_key=-RUfssNweQERwjibfp62ARaMN7uviJDx"}
          ]
        }
    })
    .then(res => {
      const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);

      const data = res.data;

      result.json(data);
    })
    .catch(err => {
      result.json('Error: ', err.message);
    });
  });

// getting data from transactions api
//columns = [transaction_id, transaction_type, call_source_description, city, region, calling_phone_number, mobile, duration, connect_duration, start_time_local, start_time_utc, recording, complete_call_id, destination_phone_number];
app.get('/transactions', async(request,result) => {
  axios.get('https://ucsbcapstone.invoca.net/api/2020-10-01/networks/transactions/2041.json?include_columns=transaction_id,transaction_type,call_source_description,city,region,calling_phone_number,mobile,duration,connect_duration,start_time_local,start_time_utc,recording,complete_call_id,destination_phone_number&oauth_token=Mp-5qdWhM6L72M1Zx2m0MfMaI5gBkQtp')
    .then(res => {
      const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);

      const data = res.data;

      result.json(data);
    })
    .catch(err => {
      result.json('Error: ', err.message);
    });
});

// getting transcripts from call api
// app.get('/call', async(request,result) => {
//   axios.get('https://ucsbcapstone.invoca.net/call/transcript/D244-1B16E484A0FF?transcript_format=agent_caller_conversation&oauth_token=0EPAlIq6gUNszkE7m7pKDs1grIIPojx4')
//     .then(res => {
//       const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
//       console.log('Status Code:', res.status);
//       console.log('Date in Response header:', headerDate);

//       const data = res.data;
//       result.json(data);

//     })
//     .catch(err => {
//       result.json('Error: ', err.message);
//     });  
//   });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})