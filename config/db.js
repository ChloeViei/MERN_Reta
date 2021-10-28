const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/off', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connect to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));