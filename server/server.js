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
const sentimentRoute = require('./routes/sentiment');

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
// app.use("/sentiment", transactionsRoute);


async function hello() {
  const language = require('@google-cloud/language');
  const client = new language.LanguageServiceClient();
  console.log("hello!")
  console.log('in sentiment get');
    const document = {
        content: 'cool sentiment',
        type: 'PLAIN_TEXT',
      };

      // Detects the sentiment of the document
  const [result] = await client.analyzeSentiment({document});
  
  const sentiment = result.documentSentiment;
  console.log('Document sentiment:');
  console.log(`  Score: ${sentiment.score}`);
  console.log(`  Magnitude: ${sentiment.magnitude}`);
  
  
    // res.status(200).send(sentiment);
    // res.end();
}

hello();


// listen to port specified
const PORT = process.env.PORT || 3001;

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})