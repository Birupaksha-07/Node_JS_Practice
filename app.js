const dotenv = require('dotenv');
const express = require('express');
const con = require("./config");


dotenv.config();
const port = process.env.PORT || 7000;
const app = express();

app.use(express.json());




app.get('/show-users', (req , res)=>{
    con.query("select * from users", (err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
});

app.post('/add-users', (req , res)=>{
    const data = req.body 
    console.log("data---", data)

    con.query("INSERT INTO users SET ?", data , (err , result , fields )=>{
        if(err){console.log("error in api", err)}
        else{res.send(result)}

    })
});

app.listen(port, ()=>{
    console.log("Server is running on Port " , port);
});