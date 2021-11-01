const mongoose = require("mongoose");

const CallLogSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    entireCall: {
      type: String,
    },
    callSummary: {
      type: String,
    },
    sentimentAnalysis: {
      type: Boolean,
    }
  }
);

module.exports = mongoose.model("CallLog", CallLogSchema);