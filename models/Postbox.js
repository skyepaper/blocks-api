const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PostboxSchema=new Schema({
    userId:{
        type:String,
    },
    senderId:{
        type:String,
    },
     type:{
        type:String,
    }, 
    status:{
        type:String,
    },
    gold:{
        type:Number,
    }
})

const Postbox=mongoose.model("Postbox", PostboxSchema);
module.exports=Postbox;
