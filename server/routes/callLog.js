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
        res.status()
            console.log(err);
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

    console.log("in post");
    let call = new CallLog();
    console.log(req.query.userId);
    call.userId = req.query.userId;
    call.phoneNumber = req.query.phoneNumber;
    call.entireCall = req.query.entireCall;
    call.callSummary = req.query.callSummary;
    call.sentimentAnalysis = req.query.sentimentAnalysis;

    call.save(function(err, data){
        if(err){
            console.log(err);
        }
        else{
            res.send("Data inserted");
        }
    });
  

});

// get a specific call log info
router.get('/:id', async (req, res)=>{

    
});

// update the call log
router.put('/:id', async (req, res)=>{

});


// delete the call log
router.delete('/:id', async (req, res)=>{

});



module.exports = router;