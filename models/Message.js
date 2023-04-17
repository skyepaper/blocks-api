const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const f=new Intl.DateTimeFormat('en-us',{
    dateStyle:'medium',
    timeStyle:'short',
})

const MessageSchema=new Schema({
    text:{
        type:String,
        required:true
    },
    name:{
        type:String,
        default:'anon'
    },
    timestamp:{
        type:String,
        default:function(){return new Intl.DateTimeFormat('en-us',{
            dateStyle:'medium',
            timeStyle:'short',
        }).format(new Date())}
    },
    date:{
        type:String,
        default:new Date()
    }
})

const Message=mongoose.model("Message", MessageSchema);
module.exports=Message;