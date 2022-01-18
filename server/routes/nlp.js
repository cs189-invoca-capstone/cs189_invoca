const router = require("express").Router();
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

const NLPCloudClient = require('nlpcloud');
const summarizeClient = new NLPCloudClient('bart-large-cnn',process.env.NLP_CLOUD_TOKEN);


// const text = "Hello John, how are you doing today? You mailed in my company a postcard a few weeks back requesting information on penny stocks that had huge upside potential with very little downside risks. Does that ring a bell? Yeah I may have sent something like that.  Okay great. Well reason for the call today John, is something just came across my desk John. It is perhaps the best thing I’ve seen in the last six months. If you have sixty seconds I’d like to share the idea with you. You got a minute?Yeah I do.Great. The name of the company, Aerotyne International. It its a cutting-edge high-tech firm out of the Midwest awaiting imminent patent approval on the next generation of radar detectors that have both military and civilian applications. Now. Right Now John, the stock trades over the counter at ten cents a share and by the way John, our analysts indicate that it could go a heck of a lot higher than that. Your profit on a mere six thousand dollar investment would be upwards of sixty thousand dollars.  Geez, that’s my mortgage man. Exactly, you could pay off your mortgage! Is this stock reliable?John, one thing I can promise you, even in this market is that I never ask my clients to judge me on my winners. I ask them to judge me on my losers because I have so few. And in the case of aerotyne, based on every technical factor out there John, we are looking at a grand slam home run.Okay! Let’s do it. I’ll do four grand. Four grand? That’d be forty thousand shares John. Let me lock in that trade right now and get back to you with my secretary with an exact confirmation. Sound good John?  Yeah, that sounds great! Great! Hey John, thank you for your vote of confidence and welcome to the investors center. Yeah, thanks a lot! Bye bye.";
// const text = "Prospect: Hello? Rep: Aja Frost, my name is Dan from Outbound. How are you doing today? I am calling about our software that helps you with the strategic implementation of your biggest problems from Outbound Company. Is this a priority for you today? Prospect: Actually, this isn't a great time … Rep: Are you interested in a product demo of how we are in the magic quadrant? We have won all these awards. Prospect: We're not interested. Rep: Are you the decision maker? Give me two hours and we can get you going -- unless you don't have a budget."
// const text = "A: Hi. Sam. B: Michael. Good to meet you! A: Did you just arrive here? B: Yeah, We arrived last week. A: How do you like it? B: It’s exciting! It’s much busier than the last city we lived in. I was working in Seattle for the last 3 years. A: It really is very busy. I moved here from Tokyo 5 years ago and I still have trouble sometimes. Did you move here with your wife? B: Actually, I’m not married. I moved here with my dog, Charles. We are very close. A: Oh. I see. B: What about you? A: Yes, I am married and I have two children. B: How old are they? A: 6 and 8 years old B: Oh, great. That age is a lot of fun. A: But it is exhausting. B: I understand. My brother has kids the same age. Every time we visit he falls asleep on the sofa. A. Must be nice. We don’t have time for sleep, we have to drink a lot of coffee. ( laughter)"

router.get("/entity", async (req, res) => {
  try{
    const document = {
      content: req.body.text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects entities in the document
    const [result] = await client.analyzeEntities({document});
  
    const entities = result.entities;
  
    console.log('Entities:');
    var other_count = 0;
    var top_entities = [];
    entities.forEach(entity => {
      // console.log(entity.name);
      // console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
      // if (entity.metadata && entity.metadata.wikipedia_url) {
      //   console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
      // }
      if(entity.type == "PERSON" || entity.type == "LOCATION" || entity.type == "ORGANIZATION" || entity.type == "EVENT") {
        console.log(entity.name);
        console.log(` - Type: ${entity.type}`);
        top_entities.push(entity.name);
        
      } else {
        
        if(other_count < 3 && top_entities.indexOf(entity.name) == -1) {
          console.log(entity.name);
          console.log(` - Type: ${entity.type}`);
          top_entities.push(entity.name);
          other_count++;
        }
      }
    });

    res.status(200).json(entities);
    transactions.keywords = top_entities;

  }catch(err){
    console.log(err);
    res.status(400);
    res.send(err);
  }
  res.end();
});

router.get("/sentiment", async (req, res) => {
  try{
    const document = {
      content: req.body.text,
      type: 'PLAIN_TEXT',
    };
    
    const [result] = await client.analyzeSentiment({document});

    const sentiment = result.documentSentiment;
    console.log('Document sentiment:');
    console.log(`Score: ${sentiment.score}`);
    console.log(`Magnitude: ${sentiment.magnitude}`);
  }catch(err){
    console.log(err);
    res.status(400);
    res.send(err);
  }
  res.end();
});

router.get('/summarize', async (req, res) => {
    try{
        let summary_data = await summarizeClient.summarization(req.body.text);
        let summary = summary_data.data.summary_text;
    
        res.status(200).send(summary);
    }
    catch(err){
        console.log("errors");
        res.status(400).send(err);
    }
    res.end();
    
});

module.exports = router;