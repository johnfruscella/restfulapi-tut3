const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req,res) => {
    res.send('Welcome to the root route of my web server!!!!!');
})
app.get('/careerdevs', (req,res) => {
    res.send('Welcome to CareerDevs! Yay!');
})
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect('mongodb+srv://johnf:skippy04@cluster0-pyvqf.mongodb.net/test?retryWrites=true&w=majority',options, () => {
    console.log('Connected to MongoDB')
});

const port = 3000;
app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});

