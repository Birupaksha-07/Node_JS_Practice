const dotenv = require('dotenv');
const express = require('express');
const mysql = require('mysql');
dotenv.config();

const port = process.env.PORT || 7000;

const app = express();

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project1',
});

con.connect((err)=>{
    if(err) {
        console.log("connection failed",err)
    }else{  
        console.log("DB Connected Successfully");
    }
})

con.query("select * from customers", (err, result)=>{
    if(err){
        console.log("tale error ---", err)
    }else{
        console.log("result is", result);
    }
})



app.get('/', (req , res)=>{
    res.send("wellcome to Home Page");
});

app.listen(port, ()=>{
    console.log("Server is running on Port " , port);
});