const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const projectSchema = new Schema(
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
    tasks: { 
        type: [ObjectId]
    }
  },
  { timestamps: true }
);
 
const Project = mongoose.model('Project', projectSchema);
 
module.exports = Project;