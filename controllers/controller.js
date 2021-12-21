const Api = require("../src/models/saralModel")

exports.getData = async(req, res)=>{
    const dbData = await Api.find()
    res.send(dbData)
}

exports.updateData = async(req, res)=>{
    const updateData = await Api.updateOne({id:req.params.id}, req.body)
    res.send("updated")
}

exports.deleteData = async(req, res)=>{
    const deletedData = await Api.deleteOne({id:req.params.id})
    res.send("deleted")
}

exports.postData = async(req, res)=>{
    const posted = await Api(req.body)
    await posted.save()
    res.send("inserted")
}

exports.getDataById = async(req, res)=>{
    const thisData = await Api.find({id:req.params.id})
    res.send(thisData)
}