const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const projectSchema = new Schema(
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
        enum: ["not-started", "in-progress", "finished"]
    },
    priority: { 
        type: String,
        enum: ["high", "medium", "low"]
    },
    tasks: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
    },
    resources: { 
        type: [{ type: Schema.Types.ObjectId, ref: 'Resources' }]
    }
  },
  { timestamps: true }
);
 
const Project = mongoose.model('Project', projectSchema);
 
module.exports = Project;