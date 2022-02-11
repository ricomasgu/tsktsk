const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const resourceSchema = new Schema(
  {
    name: { 
        type: String,
        required: true
    },
    availability: { 
        type: Number,
        default: 144000,
        max: 144000
    },
    projects: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
    },
    tasks: { 
        type: [{
          task: { type: Schema.Types.ObjectId, ref: 'Task' },
          timers: [{ type: Schema.Types.ObjectId, ref: 'Timer' }]
        }]
    },
    subtasks: { 
        type: [{
          subtask: { type: Schema.Types.ObjectId, ref: 'Subtask' },
          timers: [{ type: Schema.Types.ObjectId, ref: 'Timer' }]
        }]
    }
  },
  { timestamps: true }
);
 
const Resource = mongoose.model('Resource', resourceSchema);
 
module.exports = Resource;