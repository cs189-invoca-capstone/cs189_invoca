const router = require("express").Router();
const CallLog = require("../models/Call_Log");
const User = require("../models/User");

// get all the call logs for that user
router.get('/all/:userId', async (req, res)=>{
    try{
        const user = await User.findById(req.params.userId);

        const allCallLogs = await CallLog.find({})

        let callLogList = []
        allCallLogs.map((call) => {
            let {userId} = call;
            if(userId === req.params.userId){
                callLogList.push(call);
            }
        });
        res.status(200).json(callLogList);
    }catch(err){
        res.status()

        // access too many records at same time, 503
        // 500 for generic internal server error

        // 400 bad req 
        // 404 not found 
        // 401 user is not authorized
        // 408 time out for request
    }
});

// post a call logs that a user wants to upload
router.post('/', async (req, res)=>{
    
});

// get a specific call log info
router.get('/:id', async (req, res)=>{

});

// update the call log
router.put('/:id', async (req, res)=>{
    console.log("Inside Update/Put");

    try {
        await CallLog.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error!");
                throw new Error("ID does not exist in Call Log Database.");
            }
            else{
                let userId = req.query.userId ? req.query.userId : "";
                let phoneNumber = req.query.phoneNumber ? req.query.phoneNumber : "";
                let entireCall = req.query.entireCall ? req.query.entireCall : "";
                let callSummary = req.query.callSummary ? req.query.callSummary : "";
                let sentimentAnalysis = req.query.sentimentAnalysis;

                const filter = { _id: req.params.id };
                const update = { userId: userId, phoneNumber: phoneNumber, entireCall: entireCall, callSummary: callSummary, sentimentAnalysis: sentimentAnalysis };
                const opts = { new: true };
                let updatedRecord = CallLog.findOneAndUpdate(filter, update, opts);

                res.status(200);
                console.log(updatedRecord);
            }
        }); // Check if Id exists
    }
    catch(err){
        console.log(err);
    }
});


// delete the call log
router.delete('/:id', async (req, res)=>{
    console.log("Inside Delete");

    try {
        await CallLog.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error!");
                throw new Error("ID does not exist in Call Log Database.");
            }
            else{
                CallLog.findOneAndRemove({_id: req.params.id}, (err, deletedRecord) => {
                    if(!err){
                        console.log("Deleted Record: ", deletedRecord);
                        res.status(200);
                    }
                    else{
                        throw new Error(err);
                    }
                }).clone().catch(function(err){ console.log(err)});
            }
        }); // Check if Id exists
    }
    catch(err){
        console.log(err);
    }
});



module.exports = router;