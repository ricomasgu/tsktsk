const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const taskSchema = new Schema(
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
        enum: ["not-started", "in-progress", "finished"],
        default: "not-started"
    },
    priority: { 
        type: String,
        enum: ["high", "medium", "low"],
        default: "medium"
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project' 
    },
    subtasks: { 
      type: [{ type: Schema.Types.ObjectId, ref: 'Subtask' }]
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
 
const Task = mongoose.model('Task', taskSchema);
 
module.exports = Task;