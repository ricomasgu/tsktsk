const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const taskSchema = new Schema(
  {
    name: { 
        type: String
    },
    description: { 
        type: String
    },
    status: { 
        type: String,
        enum: ["Not Started", "In progress", "Finished"]
    },
    priority: { 
        type: String,
        enum: ["High", "Medim", "Low"]
    },
    subtask: { 
        type: [ObjectId]
    }
  },
  { timestamps: true }
);
 
const Task = mongoose.model('Task', taskSchema);
 
module.exports = Task;