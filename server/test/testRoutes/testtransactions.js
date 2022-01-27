const router = require("express").Router();
const Transactions = require("../testModels/TestTransactions");
const User = require("../../models/User");
const axios = require('axios');
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

const NLPCloudClient = require('nlpcloud');
const summarizeClient = new NLPCloudClient('bart-large-cnn',process.env.NLP_CLOUD_TOKEN);

// const { data } = require("jquery");

const COLUMNS = ["transaction_id", "transaction_type", "call_source_description", "city", "region", "calling_phone_number", "mobile", "duration", "connect_duration", "start_time_local", "start_time_utc", "recording", "complete_call_id", "destination_phone_number"];

var last_transactions_id = "";

router.post('/invoca', async (req, res)=>{
    // delete all of the transactions stored because this is for testing
    // can remove if not desired
    await Transactions.deleteMany({});
    // console.log(last_transactions_id);

    // data will be all of the transactions that are stored on invoca
    let data = [];

    console.log("in invoca");

    // call invoca transactions api
    let tmp = 'https://ucsbcapstone.invoca.net/api/2020-10-01/networks/transactions/2041.json?include_columns=transaction_id,transaction_type,call_source_description,city,region,calling_phone_number,mobile,duration,connect_duration,start_time_local,start_time_utc,recording,complete_call_id,destination_phone_number&oauth_token=Mp-5qdWhM6L72M1Zx2m0MfMaI5gBkQtp&start_after_transaction_id='+last_transactions_id;
    await axios.get(tmp)
        .then(res => {
            data = res.data;
        })
        .catch(err => {
            console.log(err);
            res.status(400);
            res.send("Error");
        });
    
    // go through all of the transactions that have been retrieved from invoca
    for(d of data){

        // see if the transactions retrieved from invoca already exist in the mongodb 
        let temp1 = await Transactions.find({transaction_id: d.transaction_id});

        // check specifically for all of the transactions that correlate to 
        // the user that was logged in
        let temp2 = await User.find({invocaPhone: d.destination_phone_number});
        
        // check if the temp1 is 0
        //      if so, then the transactions that were retrieved from invoca does NOT exist
        //      in our db, thus, will want to store that info
        //
        // check if the temp2 is 0
        //      if temp2 is 0, this transaction belongs to some other user; thus, we can ignore it
        //
        if(temp1.length == 0 && temp2 != null){

            // debugging
            // console.log(d);
            // console.log(d.start_time_local);
            // console.log(d.transaction_id); 

            // create new transaction for the newly retrieved invoca transaction
            let transactions = new Transactions();
            transactions.userId = temp2[0]._id.toString();
            transactions.start_time_local = d.start_time_local;
            transactions.transaction_id = d.transaction_id;
            transactions.complete_call_id = d.complete_call_id;
            transactions.calling_phone_number = d.calling_phone_number;
            transactions.destination_phone_number = d.destination_phone_number;


            const caller_only = [];

            const joined_transcripts = [];
            // with the complete call id that is stored, will want to retrieve the call log
            // that is associated/recorded from this specific transaction
            await axios.get(`https://ucsbcapstone.invoca.net/call/transcript/${d.complete_call_id}?transcript_format=caller_agent_conversation&oauth_token=Mp-5qdWhM6L72M1Zx2m0MfMaI5gBkQtp`)
            .then(result => {
                // const headerDate = result.headers && result.headers.date ? result.headers.date : 'no resultponse date';
                // console.log('Status Code:', result.status);
                // console.log('Date in response header:', headerDate);
                // console.log(result.data);

                // go through the call log and format it such that it is easier to display on front end
                let out = []
                for (let i = 0; i < result.data.length; i++){
                    Object.entries(result.data[i]).map(([key, value]) => {
                        let tmp = key + ": " + value;
                        if (key === "caller") {
                            caller_only.push(tmp);
                        }
                        joined_transcripts.push(value);
                        out.push(tmp);
                    })
                };
                transactions.transcript = out; //storing transcript in transactions object
            })
            .catch(err => {
                // result.json('Error: ', err);
                console.log("Error: ", err);
            });
            
            // now lets set the callSummary and sentiment analysis
            

            // sentiment analysis
            const document = {
                content: caller_only.join(". "),
                type: 'PLAIN_TEXT',
            };

            // say how you empirically found these thresholds through your trial and error
            await client.analyzeSentiment({document})
                .then(result => {
                    const sentiment = result[0].documentSentiment;
                    // console.log('Document sentiment:');
                    // console.log( `Score: ${sentiment.score}`);
                    // console.log( `Magnitude: ${sentiment.magnitude}`);
                    transaction_sentiment = "";
                    if (sentiment.score <= -0.35) {
                        transaction_sentiment = "Very Negative"
                    } else if (sentiment.score <= -0.1) {
                        transaction_sentiment = "Negative"
                    } else if (sentiment.score >= 0.35) {
                        transaction_sentiment = "Very Positive"
                    } else if (sentiment.score >= 0.1) {
                        transaction_sentiment = "Positive"
                    } else if (sentiment.score < 0.1 && -0.1 < sentiment.score) {
                        transaction_sentiment = "Neutral"
                    } else {
                        transaction_sentiment = "ERROR IN TRANSACTIONS.JS"
                    }

                    transactions.sentiment = transaction_sentiment;
                })
                .catch(err => {
                    console.log(err);
                    
                });
            
            const joined_transactions = transactions.transcript.join(". ");
            const joined_transactions_entities = joined_transcripts.join(". ");
            // console.log(typeof(joined_transactions));
            const entity_document = {
                content: joined_transactions_entities,
                type: 'PLAIN_TEXT',
            };

            await client.analyzeEntities({document: entity_document})
            .then(result => {
                const entities = result[0].entities;
                console.log('Entities:');
                var other_count = 0;

                entities.forEach(entity => {
                    if(entity.type == "PERSON" || entity.type == "LOCATION" || entity.type == "ORGANIZATION" || entity.type == "EVENT") {
                        console.log(entity.name);
                        console.log(` - Type: ${entity.type}`);
                        transactions.keywords.push(entity.name);
                        
                    } else {
                        
                        if(other_count < 3 && transactions.keywords.indexOf(entity.name) == -1) {
                            console.log(entity.name);
                            console.log(` - Type: ${entity.type}`);
                            transactions.keywords.push(entity.name);
                            other_count++;
                        }
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });

            // console.log(joined_transactions);
            await summarizeClient.summarization(joined_transactions)
                .then(result => {
                    console.log(result);
                    let summary = result.data.summary_text;
                    transactions.summary = summary;
                })
                .catch(err=>{
                    console.log(err);
                    
                });
            

            console.log("transaction is");
            console.log(transactions);
            await transactions.save();
        }
    }
    // console.log("last")
    // console.log(data[data.length - 1]['transaction_id'])
    if(data.length > 0){
        last_transactions_id = data[data.length - 1]['transaction_id']
    }
    res.status(200).send("inserted");
    res.end();
});

// get all transactions for a user
router.get('/all/:userId', async (req, res)=>{
    // console.log("in get transactions for a specific user");

    let allTransactions = await Transactions.find({userId: req.params.userId});

    // console.log(allTransactions);
    res.status(200).send(allTransactions);
    res.end();
});

router.get('/:id', async (req, res)=>{
    try{
        const call = await Transactions.findById(req.params.id);
        res.status(200);
        res.send(call);
    }
    catch(err){
        console.log("errors");
        res.status(400);
        res.send(err);
    }
    res.end();    
});

// search
router.get('/search/:userId', async (req, res)=>{
    console.log("in search");
    console.log(req);
    console.log(req.query.searchType);
    console.log(req.query.searchQuery);

    try{
        let type = req.query.searchType;
        let query = req.query.searchQuery;

        if(type == undefined || query == undefined){
            throw "Missing Parameters";
        }
        if(type != "id" && type != "calling_phone_number" && type != "callSummary" && type != "transcript" && type != "sentimentAnalysis")
            throw "Search Type not valid";
        const allTransactions = await Transactions.find(
            { [type] : { "$regex": query, "$options": "i" } , userId: req.params.userId}
        );
        console.log(allTransactions);
        res.status(200).send(allTransactions);
    }catch(err){
        console.log(err);
        res.status(400);
        res.send(err);
    }
    res.end();

});

//edit a specific transaction by id
router.put('/:id', async (req, res)=>{
    console.log("Inside Update/Put");
    try {
        await Transactions.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error!");
                res.status(400);
                res.end();
                return;
            }
        }); // Check if Id exists
        const filter = { _id: req.params.id };
        const opts = { new: true };
        let update = {};
        // if("start_time_local" in req.body) update.start_time_local = req.body.start_time_local;
        if("calling_phone_number" in req.body) update.calling_phone_number = req.body.calling_phone_number;
        if("complete_call_id" in req.body) update.complete_call_id = req.body.complete_call_id;
        if("transaction_id" in req.body) update.transaction_id = req.body.transaction_id;
        if("callSummary" in req.body) update.callSummary = req.body.callSummary;
        if("transcript" in req.body) update.transcript = req.body.transcript;
    
        let updatedRecord = await Transactions.findOneAndUpdate(filter, update, opts);

        res.status(200);
        console.log(updatedRecord);
    }
    catch(err){
        console.log(err);
    }

    res.end();
});

// post a call logs that a user wants to upload
router.post('/new', async (req, res)=>{
    try{
        console.log("in post");
        let call = new Transactions();
        console.log(req.body);
        if(req.body.userId == undefined || req.body.phoneNumber == undefined || req.body.entireCall == undefined || req.body.callSummary == undefined || req.body.sentimentAnalysis == undefined){
            throw "Missing a required parameter";
        }
        call.userId = req.body.userId;
        call.calling_phone_number = req.body.phoneNumber;
        call.transcript = req.body.entireCall;
        call.callSummary = req.body.callSummary;
        call.sentimentAnalysis = req.body.sentimentAnalysis;

        await call.save();
        console.log("inserted")
        res.status(200).send("Data Inserted");
    }
    catch(err){
        console.log(err);
        res.status(400);
        res.send(err);
    }
    res.end();
});

router.delete('/:id', async (req, res)=>{
    console.log("Inside Delete");

    try {
        await Transactions.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error!");
                res.status(400);
                res.end();
                return;
            }
        }); // Check if Id exists
        await Transactions.findOneAndRemove({_id: req.params.id}, (err, deletedRecord) => {
            if(!err){
                console.log("Deleted Record: ", deletedRecord);
                res.status(200);
            }
            else{
                res.status(400);
            }
        }).clone().catch(function(err){ console.log(err)});
    }
    catch(err){
        console.log(err);
        res.status(400);
    }
    res.end();
});


module.exports = router;



/*
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
columns = [transaction_id, transaction_type, call_source_description, city, region, calling_phone_number, mobile, duration, connect_duration, start_time_local, start_time_utc, recording, complete_call_id, destination_phone_number];
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
  */