const router = require("express").Router();
const Transactions = require("../models/Transactions");
const axios = require('axios');
const { data } = require("jquery");

const COLUMNS = ["transaction_id", "transaction_type", "call_source_description", "city", "region", "calling_phone_number", "mobile", "duration", "connect_duration", "start_time_local", "start_time_utc", "recording", "complete_call_id", "destination_phone_number"];

router.post('/', async (req, res)=>{
    console.log("in post");
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
        await transactions.save();
    }
    
    res.status(200).send("Inserted");
    res.end();
});

module.exports = router;