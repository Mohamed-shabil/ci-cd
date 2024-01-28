const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get',(req,res)=>{
    res.status(200).json({
        message:"Get Request working perfectly"
    })
})

app.post('/post',(req,res)=>{
    const {name, age} = req.body;
    if(!name||!age){
        return res.status(400).json({
            message:"some fields are missing"
        })
    }
    
    res.status(200).json({
        message:"Post Request working perfectly"
    })
})

module.exports = app;