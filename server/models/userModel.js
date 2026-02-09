import mongoose from 'mongoose';

const userSchema = new  mongoose.Schema({
    name:{
        type:String,
        requrired:true
    },
    email:{
        type:String,
        
        requrired:true
    },
    password:{
        type:String,
        requrired:true
    },
    age:{
        type:Number,
        requrired:true,
        min: 18,
        max:60
    },token:{
        type:String,
        default:""
    }
    },{timestamps:true})


const User = mongoose.model("User",userSchema);

export default User;
