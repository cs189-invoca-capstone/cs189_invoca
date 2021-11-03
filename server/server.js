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

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

app.get("/server", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to server" });
  });

// use callLog route for api requests related to the call log
app.use("/callLogs", callLogRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})