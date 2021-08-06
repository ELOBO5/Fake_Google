const port = 3000;
const express = require('express')
const app = express();
const router = express.Router();
const cors = require('cors');
const { cat, dog } = require('./data');
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World');
})

//return the first 10 items in cat
app.get('/cat', (req,res)=>{
    res.send(cat.slice(0,10));
})

//return the first 10 items in dog
app.get('/dog', (req,res)=>{
    res.send(dog.slice(0,10));
})

//returns random item from dog/cat
app.get('/random', (req,res)=>{
    if (Math.floor(Math.random()*2) %2 == 0){
        res.send(cat[Math.floor(Math.random()*cat.length)]);
    } else{
        res.send(dog[Math.floor(Math.random()*dog.length)]);
    }
})

module.exports = app;