const router = require("express").Router();
const CallLog = require("../models/Call_Log");
const User = require("../models/User");

// get all the call logs for that user
router.get('/all/:userId', async (req, res)=>{
    console.log(req.params.userId);
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
        console.log(error);
        res.status(400);
        res.send(err);
    }
});

// post a call logs that a user wants to upload
router.post('/', async (req, res)=>{

    try{
        console.log("in post");
        let call = new CallLog();
        console.log(req.body.userId);
        if(req.body.userId == undefined){
           throw "No UserId specified";
        }

        call.userId = req.body.userId;
        call.phoneNumber = req.body.phoneNumber;
        call.entireCall = req.body.entireCall;
        call.callSummary = req.body.callSummary;
        call.sentimentAnalysis = req.body.sentimentAnalysis;

        call.save(function(err, data){
            if(err){
                console.log(err);
                res.status(400);
                res.send(err);
            }
            else{
                res.send("Data Inserted");
            }
        });
    }
    catch(err){
        console.log(err);
        res.status(400);
        res.send(err);
    }
  

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

    
});

// update the call log
router.put('/:id', async (req, res)=>{
    console.log("Inside Update/Put");
    try {
        await CallLog.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error!");
                res.status(400);
                throw new Error("ID does not exist in Call Log Database.");
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


// delete the call log
router.delete('/:id', async (req, res)=>{
    console.log("Inside Delete");

    try {
        await CallLog.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error!");
                res.status(400);
                throw new Error("ID does not exist in Call Log Database.");
            }
        }); // Check if Id exists
        await CallLog.findOneAndRemove({_id: req.params.id}, (err, deletedRecord) => {
            if(!err){
                console.log("Deleted Record: ", deletedRecord);
                res.status(200);
            }
            else{
                throw new Error(err);
            }
        }).clone().catch(function(err){ console.log(err)});
    }
    catch(err){
        console.log(err);
    }
    res.end();
});



module.exports = router;