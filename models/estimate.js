const mongoose = require("mongoose")

const EstimateSchema = mongoose.Schema({
    name:{
        type:String,
        required :true 
    },
    email : {
        type : String ,
        required: true,
        lowercase:true,
        sparse:true
    },
    number:{
        type: Number,
        required:true,
        sparse:true
       

    },
    message:{
        type:String,
        required:true,
        sparse:true
    }
    
});

module.exports = mongoose.model("Estimate" , EstimateSchema);