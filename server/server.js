// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const dotenv = require("dotenv").config();
const cors = require('cors');

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
app.use(cors());

// Allow incoming data to be of type json
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')))

// route api endpoints used
app.use("/callLogs", callLogsRoute);
app.use("/users", usersRoute);
app.use("/transactions", transactionsRoute);

// listen to port specified
const PORT = process.env.PORT || 3001;

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})