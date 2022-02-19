const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
    email: {
      type: String,
      required: [true, 'Email is required.'],
      // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
      unique: [true, "Email is already taken"],
      lowercase: true,
      trim: true
    },
    password: String,
    projects: [{
      type: Schema.Types.ObjectId,
      ref: 'Project' 
    }],
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: 'Task' 
    }]
});

const User = model("User", userSchema);

module.exports = User;
