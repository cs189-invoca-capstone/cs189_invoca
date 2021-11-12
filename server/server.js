const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const callLogRoute = require('./routes/callLog');
const api_helper = require('./routes/API_helper')

dotenv.config();

const PORT = process.env.PORT || 3001;

mongoose 
 .connect(process.env.MONGO_URL)   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const app = express();
const path = require('path')


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


// get response for Invoca Ringpool API
app.get('/getAPIResponse', (req, res) => {
  api_helper.make_API_call('https://ucsbcapstone.invoca.net/api/2021-02-11/ring_pools/394157/allocate_number.json?ring_pool_key=-RUfssNweQERwjibfp62ARaMN7uviJDx')
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})