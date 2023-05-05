const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/booksdatabase',(err)=>{
    if(!err){
        console.log("MongoDb Connection Successfull");
    }
    else{
        console.log("MongoDb Connection Error: "+JSON.stringify(err,undefined, 2));
    }
});

module.exports=mongoose;
