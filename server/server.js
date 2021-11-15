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

// mongodb connection
mongoose 
 .connect(process.env.MONGO_URL)   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const app = express();
app.use(cors());

// Allow incoming data to be of type json
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

// AUTH0 Config
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_0_SECRET,
  baseURL: process.env.AUTH_0_BASE_URL,
  clientID: process.env.AUTH_0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH_0_ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// route api endpoints used
app.use("/callLogs", callLogsRoute);
app.use("/users", usersRoute);

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})