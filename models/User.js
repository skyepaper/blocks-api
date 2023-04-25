const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        dropDups: true
    },
    name:{
        type:String,
        default:'anon'
    },
    image:{
        type:Number,
        default:6
    },
})

const User=mongoose.model("User", UserSchema);
module.exports=User;
