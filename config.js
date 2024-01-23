const mysql = require("mysql");

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'project1',
});

con.connect((err)=>{
    if(err){
        console.log("error in connection", err)
    }else{
        console.log("DB connected successfully")
    }
})

module.exports = con