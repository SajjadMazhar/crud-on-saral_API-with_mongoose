const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/saralAPI",
{useUnifiedTopology:true , useCreateIndex: true, useNewUrlParser:true}).then(()=>{
    console.log("db connected")
}).catch(err=>{
    console.log("db connection failed", err)
})