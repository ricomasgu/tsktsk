// Require mongoose
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/basic-auth';

// Connection to the Database
mongoose.connect(MONGO_URI)
        .then(res => console.log(`Connected to ${res.connections[0].name}`))
        .catch(err => console.log(err));