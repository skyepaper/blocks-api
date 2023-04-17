const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ReplySchema=new Schema({
    text:{
        type:String,
        required:true
    },
    name:{
        type:String,
        default:'anon'
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
        }).format(new Date())}
    },
    date:{
        type:String,
        default:new Date()
    }
})

const Reply=mongoose.model("Reply", ReplySchema);
module.exports=Reply;