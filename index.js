const express = require("express");
const app = express();
const playersData = require("./manchester.json")

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Manchester United Players")
})

app.get("/players",(req,res)=>{
    res.send(playersData)
})
app.listen(port,()=>{
    console.log(`App is listening to port ${port}`)
})
