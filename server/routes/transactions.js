const router = require("express").Router();
const Transactions = require("../models/Transactions");
const User = require("../models/User");
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
        let transactions = new Transactions();

        transactions.transaction_id = d.transaction_id;
        transactions.complete_call_id = d.complete_call_id;
        transactions.calling_phone_number = d.calling_phone_number;
        transactions.destination_phone_number = d.destination_phone_number;

        //might have to use for loop here to traverse through the temp
        transactions.userId = "";
        let temp = await User.find({invocaPhone: d.destination_phone_number});
        if(temp[0]){
            let test = temp[0]._id.toString();
            transactions.userId = test;
        }
        await axios.get(`https://ucsbcapstone.invoca.net/call/transcript/${d.complete_call_id}?transcript_format=caller_agent_conversation&oauth_token=Mp-5qdWhM6L72M1Zx2m0MfMaI5gBkQtp`)
            .then(result => {
                // const headerDate = result.headers && result.headers.date ? result.headers.date : 'no resultponse date';
                // console.log('Status Code:', result.status);
                // console.log('Date in response header:', headerDate);

                transactions.transcript = result.data; //storing transcript in transactions object
                // console.log(transactions.transcript);
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


// get all transactions for a user
router.get('/all/:userId', async (req, res)=>{
    console.log("in get transactions for a specific user");

    let allTransactions = await Transactions.find({userId: req.params.userId});

    console.log(allTransactions);
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
        if(type != "userId" && type != "destination_phone_number" && type != "calling_phone_number" && type != "complete_call_id" && type != "transaction_id" && type != "transcript")
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
        if("userId" in req.body) update.userId = req.body.userId;
        if("destination_phone_number" in req.body) update.destination_phone_number = req.body.destination_phone_number;
        if("calling_phone_number" in req.body) update.calling_phone_number = req.body.calling_phone_number;
        if("complete_call_id" in req.body) update.complete_call_id = req.body.complete_call_id;
        if("transaction_id" in req.body) update.transaction_id = req.body.transaction_id;
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