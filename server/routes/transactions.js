const router = require("express").Router();
const Transactions = require("../models/Transactions");
const axios = require('axios');

const COLUMNS = ["transaction_id", "transaction_type", "call_source_description", "city", "region", "calling_phone_number", "mobile", "duration", "connect_duration", "start_time_local", "start_time_utc", "recording", "complete_call_id", "destination_phone_number"];

router.post('/', async (req, res)=>{
    console.log("in post");

    //delete any data to reset
    await Transactions.deleteMany({});

    let data = [];
    await axios.get('https://ucsbcapstone.invoca.net/api/2020-10-01/networks/transactions/2041.json?include_columns=transaction_id,transaction_type,call_source_description,city,region,calling_phone_number,mobile,duration,connect_duration,start_time_local,start_time_utc,recording,complete_call_id,destination_phone_number&oauth_token=Mp-5qdWhM6L72M1Zx2m0MfMaI5gBkQtp')
        .then(res => {
            data = res.data;
        })
        .catch(err => {
            console.log(err);
            res.status(400);
            res.send("Error");
        });
    
    for(d of data){
        console.log(d);
        let transactions = new Transactions();

        transactions.transaction_id = d.transaction_id;
        transactions.complete_call_id = d.complete_call_id;
        transactions.calling_phone_number = d.calling_phone_number;
        transactions.destination_phone_number = d.destination_phone_number;
        await axios.get(`https://ucsbcapstone.invoca.net/call/transcript/${d.complete_call_id}?transcript_format=caller_agent_conversation&oauth_token=Mp-5qdWhM6L72M1Zx2m0MfMaI5gBkQtp`)
            .then(result => {
                // const headerDate = result.headers && result.headers.date ? result.headers.date : 'no resultponse date';
                // console.log('Status Code:', result.status);
                // console.log('Date in response header:', headerDate);

                transactions.transcript = result.data; //storing transcript in transactions object
                console.log(transactions.transcript);
                // result.json(result.data);
            })
            .catch(err => {
                // result.json('Error: ', err);
                console.log("Error: ", err);
            });
        console.log(transactions);
        await transactions.save();
    }
    
    res.status(200).send("Inserted");
    res.end();
});


// get user Id by query
// get invoca phone by user Id
// get transaction objects by correlating invocaPhone = destination_phone_number
// return that
router.get('/:userId', async (req, res)=>{
    console.log("in get transactions for a specific user");

    res.status(200).send("Successful!");
    res.end();
});


module.exports = router;