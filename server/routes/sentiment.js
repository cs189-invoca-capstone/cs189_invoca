const router = require("express").Router();
const User = require("../models/User");
const language = require('@google-cloud/language');
const axios = require('axios');


const client = new language.LanguageServiceClient();


router.get('/', async (req, res)=>{

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
  
  
    res.status(200).send(sentiment);
    res.end();
});

