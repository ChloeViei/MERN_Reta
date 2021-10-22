const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.fzb9l.mongodb.net/mearn', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connect to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));