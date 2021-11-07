const router = require("express").Router();
const CallLog = require("../models/Call_Log");
const User = require("../models/User");

// get all the call logs for that user
router.get('/all/:userId', async (req, res)=>{
    
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
        let userId = req.query.userId ? req.query.userId : "";
        let phoneNumber = req.query.phoneNumber ? req.query.phoneNumber : "";
        let entireCall = req.query.entireCall ? req.query.entireCall : "";
        let callSummary = req.query.callSummary ? req.query.callSummary : "";
        let sentimentAnalysis = req.query.sentimentAnalysis;

        const filter = { _id: req.params.id };
        const update = { userId: userId, phoneNumber: phoneNumber, entireCall: entireCall, callSummary: callSummary, sentimentAnalysis: sentimentAnalysis };
        const opts = { new: true };
        let updatedRecord = await CallLog.findOneAndUpdate(filter, update, opts);

        res.status(200);
        console.log(updatedRecord);
    }
    catch(err){
        console.log(err);
    }
});


// delete the call log
router.delete('/:id', async (req, res)=>{
    console.log("Inside Delete");

    await CallLog.findOneAndRemove({_id: req.params.id}, (error, deletedRecord) => {
        if(!error){
            console.log("Deleted Record: ", deletedRecord);
            res.status(200);
        }
        else{
            // TODO //
            console.log(error);
        }
    }).clone().catch(function(err){ console.log(err)});
});



module.exports = router;