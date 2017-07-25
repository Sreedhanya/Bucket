var mongoose=require('mongoose');
var userSchema=  new mongoose.Schema({ name: String , title: String , description : String},{timestamps:true});
var user=mongoose.model('user',userSchema)