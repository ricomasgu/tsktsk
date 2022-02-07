// Require mongoose
const mongoose = require('mongoose');

// Connection to the Database
mongoose.connect('mongodb://localhost/tsktsk')
        .then(res => console.log(`Connected to ${res.connections[0].name}`))
        .catch(err => console.log(err));