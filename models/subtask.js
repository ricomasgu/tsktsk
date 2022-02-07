const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const subtaskSchema = new Schema(
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
    }
  },
  { timestamps: true }
);
 
const SubTask = mongoose.model('SubTask', subtaskSchema);
 
module.exports = SubTask;