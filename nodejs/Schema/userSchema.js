const mongoose = require("mongoose")
require("../../dbconnection/connection");

const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    number:{
        trpe:Number,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }

})

const model = mongoose.model('CSV', userSchema);
module.exports= model;

