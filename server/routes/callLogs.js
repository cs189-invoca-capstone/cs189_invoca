const router = require("express").Router();
const CallLog = require("../models/Call_Log");
const User = require("../models/User");

// get all the call logs for that user
router.get('/all/:userId', async (req, res)=>{
    try{
        const allCallLogs = await CallLog.find({userId: req.params.userId})
        let callLogList = []
        allCallLogs.map((call) => {
            let {userId} = call;
            if(userId === req.params.userId){
                callLogList.push(call);
            }
        });
        res.status(200).json(allCallLogs);
    }catch(err){
        console.log(err);
        res.status(400);
        res.send(err);
    }
    res.end();
});

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
        if( type != "userId" && type != "phoneNumber" && type != "entireCall" && type != "callSummary" && type != "sentimentAnalysis")
            throw "Search Type not valid";
        const allCallLogs = await CallLog.find(
            { [type] : { "$regex": query, "$options": "i" } , userId: req.params.userId}
        );
        console.log(allCallLogs);
        res.status(200).send(allCallLogs);
    }catch(err){
        console.log(err);
        res.status(400);
        res.send(err);
    }
    res.end();

});


// post a call logs that a user wants to upload
router.post('/', async (req, res)=>{
    try{
        console.log("in post");
        let call = new CallLog();
        console.log(req.body);
        if(req.body.userId == undefined || req.body.phoneNumber == undefined || req.body.entireCall == undefined || req.body.callSummary == undefined || req.body.sentimentAnalysis == undefined){
            throw "Missing a required parameter";
        }
    
        call.userId = req.body.userId;
        call.phoneNumber = req.body.phoneNumber;
        call.entireCall = req.body.entireCall;
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

// get a specific call log info
router.get('/:id', async (req, res)=>{
    try{
        const call = await CallLog.findById(req.params.id);
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

// update the call log
router.put('/:id', async (req, res)=>{
    console.log("Inside Update/Put");
    try {
        await CallLog.exists({ _id: req.params.id }, (error, result) => {
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
        if("phoneNumber" in req.body) update.phoneNumber = req.body.phoneNumber;
        if("entireCall" in req.body) update.entireCall = req.body.entireCall;
        if("callSummary" in req.body) update.callSummary = req.body.callSummary;
        if("sentimentAnalysis" in req.body) update.sentimentAnalysis = req.body.sentimentAnalysis;
    
        let updatedRecord = await CallLog.findOneAndUpdate(filter, update, opts);

        res.status(200);
        console.log(updatedRecord);
    }
    catch(err){
        console.log(err);
    }

    res.end();
});


// router.delete('/:userId', async (req, res)=>{
//     console.log("Inside Delete All");

//     try {
   
//         await CallLog.deleteMany({userId: req.params.userId}, (err, deletedRecord) => {
//             if(!err){
//                 console.log("Deleted All Record: ", deletedRecord);
//                 res.status(200);
//             }
//             else{
//                 throw new Error(err);
//             }
//         }).clone().catch(function(err){ console.log(err)});
//     }
//     catch(err){
//         console.log(err);
//         res.status(400);
//         res.send(err);
//     }
//     res.end();
// });

// delete the call log
router.delete('/:id', async (req, res)=>{
    console.log("Inside Delete");

    try {
        await CallLog.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error!");
                res.status(400);
                res.end();
                return;
            }
        }); // Check if Id exists
        await CallLog.findOneAndRemove({_id: req.params.id}, (err, deletedRecord) => {
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