const mongoose = require ('mongoose')


let newSchema = new mongoose.Schema({
    fullName: {type:String, required:true},
    email: {type:String, required:true},
    organization: {type:String, required:true},
    message: {type: String, required:true},
    date: {type: Date, default: Date.now()} 
})

let contactModel = mongoose.model("portfolio", newSchema)
module.exports = contactModel