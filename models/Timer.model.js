const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const timerSchema = new Schema(
  {
    hours: { 
        type: Number,
        default: 0 
    },
    minutes: { 
        type: Number,
        default: 0,
        max: 60
    },
    seconds: { 
        type: Number,
        default: 0,
        max: 60
    }
  },
  { timestamps: true }
);
 
const Timer = mongoose.model('Timer', timerSchema);
 
module.exports = Timer;