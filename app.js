const express = require('express'); // Importing the package
const app = express();// Execute the package
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the root route of my web server!!!!!');
})





const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.DB_CONNECTION, options, () => {
    console.log('Connected to MongoDB')
});


app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

