const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const subtaskSchema = new Schema(
  {
    name: { 
        type: String,
        required: true
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
    task: { 
      type: Schema.Types.ObjectId,
      ref: 'Task'
    },
    resources: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Resources' }]
    },
    timers: { 
      type: [{
        resource: { type: Schema.Types.ObjectId, ref: 'Subtask' },
        timer: { type: Schema.Types.ObjectId, ref: 'Timer' }
      }]
    }
  },
  { timestamps: true }
);
 
const SubTask = mongoose.model('SubTask', subtaskSchema);
 
module.exports = SubTask;