// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const dotenv = require("dotenv").config();
const { auth } = require('express-openid-connect');
const cors = require('cors');
const axios = require('axios');

// api routes
const callLogsRoute = require('./routes/callLogs');
const usersRoute = require('./routes/users');
const transactionsRoute = require('./routes/transactions');

// mongodb connection
mongoose 
 .connect(process.env.MONGO_URL)   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const app = express();
const request = require('request');
app.use(cors());

// Allow incoming data to be of type json
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

// AUTH0 Config
// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH_0_SECRET,
//   baseURL: process.env.AUTH_0_BASE_URL,
//   clientID: process.env.AUTH_0_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH_0_ISSUER_BASE_URL
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// route api endpoints used
app.use("/callLogs", callLogsRoute);
app.use("/users", usersRoute);
app.use("/transactions", transactionsRoute);

app.get('/invocaCallNum', async (req,res) => {
  axios.get("https://ucsbcapstone.invoca.net/api/2021-02-11/ring_pools/394157/allocate_number.xml?ring_pool_key=-RUfssNweQERwjibfp62ARaMN7uviJDx")
    .then(response => {
      console.log(response.data.url);
      console.log(response.data.explanation);
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
  });
});

// listen to port specified
const PORT = process.env.PORT || 3001;

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

//getting transcripts from call api
app.get('/call', async(request,result) => {
  axios.get('https://ucsbcapstone.invoca.net/call/transcript/D244-1B16E484A0FF?transcript_format=caller_agent_conversation&oauth_token=Mp-5qdWhM6L72M1Zx2m0MfMaI5gBkQtp')
    .then(res => {
      const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);

      const data = res.data;
      result.json(data);

    })
    .catch(err => {
      result.json('Error: ', err);
    });  
  });

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})