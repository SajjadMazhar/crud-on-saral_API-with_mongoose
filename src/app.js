require("./db/conn")
const express = require("express")
const app = express()
const Router = require("../routes/router")

const port = 5000 || process.env.PORT;

app.use(express.json())
app.use("/", Router)

app.listen(port, ()=>{
    console.log("listening to port:", port)
})