const axios = require("axios")
const fs = require("fs")

axios.get("http://api.navgurukul.org/courses").then(apiResponse=>{
    const data = apiResponse.data
    fs.writeFileSync("./staticFiles/saralApi.json", JSON.stringify(data, null, 4))
}).catch(err=>{
    console.log("err", err)
})