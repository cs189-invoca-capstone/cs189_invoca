const mongoose = require("mongoose");

//columns = [transaction_id, transaction_type, call_source_description, 
//city, region, calling_phone_number, mobile, duration, connect_duration, 
//start_time_local, start_time_utc, recording, complete_call_id, destination_phone_number];
const TransactionSchema = new mongoose.Schema(
    {
        transaction_id: {
            type: String
        },
        transaction_type: {
            type: String
        },
        call_source_description: {
            type: String
        },
        city: {
            type: String
        },
        region: {
            type: String
        },
        calling_phone_number: {
            type: String
        },
        mobile: {
            type: String
        },
        // duration: {
        //     type: int
        // },
        // connect_duration: {
        //     type: int
        // },
        start_time_local: {
            type: String
        },
        // start_time_utc: {
        //     type: int
        // },
        recording: {
            type: String
        },
        complete_call_id: {
            type: String
        },
        destination_phone_number: {
            type: String
        },
        transcript: {
            type: Array
        },
        summary: {
            type: String
        },
        keywords: {
            type: Array
        },
        sentiment: {
            type: String
        },
        userId: {
            type: String
        }
    }
);

module.exports = mongoose.model("Transactions", TransactionSchema);