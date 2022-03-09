const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const projectSchema = new Schema(
  {
    name: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        default: ""
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
    tasks: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
    },
    resources: { 
        type: [{
            resource: { type: Schema.Types.ObjectId, ref: 'Resources' },
            time: Number
        }]
    },
    time: {
        type: Number,
        default: 0
    }
  },
  { timestamps: true }
);
 
const Project = mongoose.model('Project', projectSchema);
 
module.exports = Project;