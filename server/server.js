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
// const transactionsRoute = require('./test/testRoutes/testtransactions');

const nlpRoute = require('./routes/nlp');

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
app.use("/nlp", nlpRoute);

// const Transactions = require("./models/Transactions");
// async function deleteAllTransactions(){
//   await Transactions.deleteMany({});
  
// }

// deleteAllTransactions();
/*
async function entity(){
  const language = require('@google-cloud/language');
  const client = new language.LanguageServiceClient();

  // const text = "A: Hi. Sam. B: Michael. Good to meet you! A: Did you just arrive here? B: Yeah, We arrived last week. A: How do you like it? B: It’s exciting! It’s much busier than the last city we lived in. I was working in Seattle for the last 3 years. A: It really is very busy. I moved here from Tokyo 5 years ago and I still have trouble sometimes. Did you move here with your wife? B: Actually, I’m not married. I moved here with my dog, Charles. We are very close. A: Oh. I see. B: What about you? A: Yes, I am married and I have two children. B: How old are they? A: 6 and 8 years old B: Oh, great. That age is a lot of fun. A: But it is exhausting. B: I understand. My brother has kids the same age. Every time we visit he falls asleep on the sofa. A. Must be nice. We don’t have time for sleep, we have to drink a lot of coffee. ( laughter)"
  const text = "Hi. Sam. Michael. Good to meet you! Did you just arrive here? Yeah, We arrived last week. How do you like it? It’s exciting! It’s much busier than the last city we lived in. I was working in Seattle for the last 3 years. It really is very busy. I moved here from Tokyo 5 years ago and I still have trouble sometimes. Did you move here with your wife? Actually, I’m not married. I moved here with my dog, Charles. We are very close. Oh. I see. What about you? Yes, I am married and I have two children. How old are they? 6 and 8 years old. Oh, great. That age is a lot of fun. But it is exhausting. I understand. My brother has kids the same age. Every time we visit he falls asleep on the sofa. Must be nice. We don’t have time for sleep, we have to drink a lot of coffee. ( laughter) "
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects entities in the document
  const [result] = await client.analyzeEntities({document});

  const entities = result.entities;

  console.log('Entities:');
  entities.forEach(entity => {
    console.log(entity.name);
    console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
    if (entity.metadata && entity.metadata.wikipedia_url) {
      console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
    }
  });
}
entity();

async function tmp(){
  const language = require('@google-cloud/language');
  const client = new language.LanguageServiceClient();  
  const text = "A: Hi. Sam. B: Michael. Good to meet you! A: Did you just arrive here? B: Yeah, We arrived last week. A: How do you like it? B: It’s exciting! It’s much busier than the last city we lived in. I was working in Seattle for the last 3 years. A: It really is very busy. I moved here from Tokyo 5 years ago and I still have trouble sometimes. Did you move here with your wife? B: Actually, I’m not married. I moved here with my dog, Charles. We are very close. A: Oh. I see. B: What about you? A: Yes, I am married and I have two children. B: How old are they? A: 6 and 8 years old B: Oh, great. That age is a lot of fun. A: But it is exhausting. B: I understand. My brother has kids the same age. Every time we visit he falls asleep on the sofa. A. Must be nice. We don’t have time for sleep, we have to drink a lot of coffee. ( laughter)"
  
  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  await client.analyzeSentiment({document})
  .then(result => {
      // console.log(result);
      console.log(result[0]);
      const sentiment = result[0].documentSentiment;
      // console.log(sentiment);
      console.log('Document sentiment:');
      console.log( `Score: ${sentiment.score}`);
      console.log( `Magnitude: ${sentiment.magnitude}`);
  })
  .catch(err => {
      console.log(err);
      res.status(400);
      res.send(err);
  });
} 
tmp();

*/

// listen to port specified
const PORT = process.env.PORT || 3001;

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Anything that doesn't match what's above, send back index.html; 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})