const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const resourceSchema = new Schema(
  {
    name: { 
        type: String,
        default: 0 
    },
    availability: { 
        type: Number,
        default: 144000,
        max: 144000
    },
    tasks: { 
        type: [ObjectId]
    }
  },
  { timestamps: true }
);
 
const Resource = mongoose.model('Resource', resourceSchema);
 
module.exports = Resource;