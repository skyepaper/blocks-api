const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const LikeSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    messageId:{
        type:String,
        required:true
    }
})

const Like=mongoose.model("Like", LikeSchema);
module.exports=Like;
