const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true 
        // unique : true,
    },
    right:{
        type : String,
        // required : true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Staff' , staffSchema);