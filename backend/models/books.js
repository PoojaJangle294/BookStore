const mongoose=require('mongoose')
var Books=mongoose.model('Books',{
    Book_Title:{
        type:String,
    },
    Author:{
        type:String,
    },
    ISBN:{
        type:String,
    },
});


module.exports={Books};