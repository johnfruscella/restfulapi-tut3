const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req,res) => {
    res.send('Welcome to the root route of my web server!!!!!');
})
app.get('/careerdevs', (req,res) => {
    res.send('Welcome to CareerDevs! Yay!');
})

mongoose.connect('mongodb+srv://johnf:skippy04@cluster0-pyvqf.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDB')
});

const port = 3000;
app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});

