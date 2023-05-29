const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PostboxSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    senderId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    gold:{
        type:Number,
        default:0
    }
})

const Postbox=mongoose.model("Postbox", PostboxSchema);
module.exports=Postbox;
