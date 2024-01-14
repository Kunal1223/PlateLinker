const mongoose=require('mongoose')
const { Schema } = mongoose;
const NGOSchema = new Schema({
name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true,
    unique:true
 },
 manager_name:{
    type:String,
    required:true
 },
 desc:{
    type:String,
    required:true
 },
 social_link:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 date: {
    type: Date,
    default: Date.now
},
});

module.exports=mongoose.model('NGO',NGOSchema)