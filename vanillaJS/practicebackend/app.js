const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user");

require("dotenv/config");
const app = express();

app.get("/users", (req, res) => {
    let users = ["big chungs", "big bungs", "lung"];
    
    res.send({
        users: users
    });
});

app.post("/create_user", async (req, res) => { 
    try{
        const myuser = new User(req.body);
        await myuser.save()
        res.send(myuser);
    }catch(err){
        res.send({message: err});
    }
});

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    {useUnifiedTopology: true, useNewUrlParser: true},
    (req, res)=>{
    
    console.log("connected to database");
})

app.listen(3000, () => {
    console.log("listening to 3000");
});