const mongoose = require('mongoose');

const rightSchema = new mongoose.Schema({

    staff_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Staff'
    },
    email:{
        type : String,
        // required : true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Right' , rightSchema);