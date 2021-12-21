const express = require("express")
const router = express.Router()
const fs = require("fs")
const {getData, updateData, deleteData, postData, getDataById} = require("../controllers/controller")


router.post("/data", (req, res)=>{
    fs.readFile("./staticFiles/saralApi.json", "utf-8", (err, data)=>{
        if(err){
            console.log("err: ", err)
        }else{
            const allData = JSON.parse(data)
            allData.forEach((obj)=>{
                let objData = Api(obj)
                objData.save()
            })
            res.send("done")
        }
    })
})

router.get("/data", getData)

router.get("/data/:id", getDataById)

router.put("/update/:id", updateData)

router.delete("/delete/:id", deleteData)

router.post("/postOne", postData)


module.exports = router;