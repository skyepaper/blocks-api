const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const BlockSchema=new Schema({
    timestamp:{
        type:String,
        default:function(){return new Intl.DateTimeFormat('en-us',{
            dateStyle:'medium',
            timeStyle:'short',
            timeZone: 'EET'
        }).format(new Date())}
    },
    data:{
        type:String,
        default:''
    },
    hash:{
        type:String,
        default:''
    },
    prevHash:{
        type:String,
        default:''
    },
   
})

const Block=mongoose.model("Block", BlockSchema);
module.exports=Block;
