const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        default:'anon'
    },
    image:{
        type:Number,
        default:6
    },
    gold:{
        type:Number,
        default:100
    },
    goldLike:{
        type:Number,
        default:0
    },
})

const User=mongoose.model("User", UserSchema);
module.exports=User;
