const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ReplySchema=new Schema({
    text:{
        type:String,
        required:true
    },
    senderId:{
        type:String,
        default:'12345'
    },
    messageId:{
        type:String,
        required:true
    },
    timestamp:{
        type:String,
        default:function(){return new Intl.DateTimeFormat('en-us',{
            dateStyle:'medium',
            timeStyle:'short',
            timeZone: 'EET'
        }).format(new Date())}
    },
    likes:{
        type:Number,
        default:0
    },
})

const Reply=mongoose.model("Reply", ReplySchema);
module.exports=Reply;
