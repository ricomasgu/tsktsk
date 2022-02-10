const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const taskSchema = new Schema(
  {
    name: { 
        type: String,
        required: true
        
    },
    description: { 
        type: String,
        default: "-"
    },
    status: { 
        type: String,
        enum: ["not-started", "in-progress", "finished"],
        default: "not-started"
    },
    priority: { 
        type: String,
        enum: ["high", "medium", "low"],
        default: "medium"
    }
  },
  { timestamps: true }
);
 
const Task = mongoose.model('Task', taskSchema);
 
module.exports = Task;