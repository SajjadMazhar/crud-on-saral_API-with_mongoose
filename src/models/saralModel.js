const mongoose = require("mongoose")

const apiSchema = mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
        
    },
    logo:{
        type:String
    },
    notes:{
        type:String
    },
    days_to_complete:{
        type:String,
        
    },
    short_description:{
        type:String
        
    },
    type:{
        type:String
    },
    course_type:{
        type:String
    },
    lang_available:{
        type:Object
    }

})

const SaralAPI = new mongoose.model("saraldata", apiSchema);
module.exports = SaralAPI;